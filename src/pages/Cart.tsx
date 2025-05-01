
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useCart } from "@/hooks/useCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, getTotalItems } = useCart();
  
  if (getTotalItems() === 0) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <div className="mb-6">
            <Icon name="ShoppingCart" size={64} className="text-gray-300 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Ваша корзина пуста</h1>
          <p className="text-gray-500 mb-8">
            Выберите автомобили из нашего каталога, чтобы добавить их в корзину.
          </p>
          <Button asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <div className="flex justify-between items-center pt-4">
              <Button variant="outline" asChild>
                <Link to="/catalog">
                  <Icon name="ChevronLeft" size={16} />
                  <span className="ml-2">Продолжить выбор</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
