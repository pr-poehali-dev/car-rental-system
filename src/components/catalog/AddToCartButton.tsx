
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

interface AddToCartButtonProps {
  carId: number;
  title: string;
  price: number;
  image: string;
  type: string;
  transmission: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  carId,
  title,
  price,
  image,
  type,
  transmission
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [days, setDays] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({
      id: carId,
      title,
      price,
      image,
      days,
      type,
      transmission
    });
    setIsDialogOpen(false);
    navigate('/cart');
  };

  return (
    <>
      <Button 
        onClick={() => setIsDialogOpen(true)} 
        className="w-full"
      >
        <Icon name="ShoppingCart" size={16} />
        <span className="ml-2">Арендовать</span>
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Выбор срока аренды</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="days">Количество дней аренды</Label>
              <Input
                id="days"
                type="number"
                min="1"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span>Стоимость за день:</span>
              <span className="font-semibold">{price} ₽</span>
            </div>
            
            <div className="flex justify-between items-center font-bold">
              <span>Итого:</span>
              <span>{price * days} ₽</span>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleAddToCart}>
              Добавить в корзину
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddToCartButton;
