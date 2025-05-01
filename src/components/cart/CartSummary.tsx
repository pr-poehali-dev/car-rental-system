
import React, { useState } from 'react';
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the order to your backend
    setIsOrderComplete(true);
    clearCart();
  };
  
  const handleOrderCompleted = () => {
    navigate('/');
  };

  const isEmpty = getTotalItems() === 0;
  
  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Сводка заказа</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Количество автомобилей:</span>
          <span>{getTotalItems()}</span>
        </div>
        
        <div className="flex justify-between text-lg font-bold">
          <span>Итого:</span>
          <span>{getTotalPrice()} ₽</span>
        </div>
      </CardContent>
      <CardFooter>
        <Dialog open={isOrderComplete} onOpenChange={setIsOrderComplete}>
          <DialogTrigger asChild>
            <Button 
              className="w-full" 
              disabled={isEmpty}
              onClick={isEmpty ? undefined : () => {}}
            >
              Оформить заказ
            </Button>
          </DialogTrigger>
          
          <DialogContent>
            {isOrderComplete ? (
              <>
                <DialogHeader>
                  <DialogTitle>Заказ оформлен!</DialogTitle>
                  <DialogDescription>
                    Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш менеджер.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button onClick={handleOrderCompleted}>Вернуться на главную</Button>
                </DialogFooter>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Оформление заказа</DialogTitle>
                  <DialogDescription>
                    Заполните форму для завершения бронирования автомобилей.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">ФИО</Label>
                      <Input id="name" required />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button type="submit">Подтвердить заказ</Button>
                  </DialogFooter>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
