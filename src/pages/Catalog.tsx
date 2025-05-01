
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Каталог автомобилей</h1>
          <Button variant="outline">Фильтры</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=80`} 
                alt="Автомобиль" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Toyota Camry</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-primary">5000 ₽/день</span>
                  <span className="text-sm text-gray-500">Седан • Автомат</span>
                </div>
                <Button asChild className="w-full">
                  <Link to={`/catalog/${id}`}>Подробнее</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Catalog;
