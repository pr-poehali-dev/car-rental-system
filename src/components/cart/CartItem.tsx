
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/Icon";
import { useCart, CartItem as CartItemType } from "@/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateCartItem } = useCart();
  
  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const days = parseInt(e.target.value);
    if (days > 0) {
      updateCartItem(item.id, days);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg bg-white">
      <div className="w-full md:w-1/4 h-48 overflow-hidden rounded-md">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <span className="text-lg font-bold text-primary">{item.price} ₽/день</span>
        </div>
        
        <div className="text-sm text-gray-500">
          {item.type} • {item.transmission}
        </div>
        
        <div className="flex flex-wrap gap-4 items-center mt-4">
          <div className="flex items-center">
            <label htmlFor={`days-${item.id}`} className="mr-2 text-sm font-medium">
              Количество дней:
            </label>
            <Input
              id={`days-${item.id}`}
              type="number"
              value={item.days}
              onChange={handleDaysChange}
              className="w-20 h-9"
              min="1"
            />
          </div>
          
          <div className="font-semibold">
            Итого: {item.price * item.days} ₽
          </div>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => removeFromCart(item.id)}
        className="self-start text-gray-400 hover:text-red-500"
      >
        <Icon name="Trash2" />
        <span className="sr-only">Удалить</span>
      </Button>
    </div>
  );
};

export default CartItem;
