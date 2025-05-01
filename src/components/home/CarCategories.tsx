
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";

interface CarCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
}

const categories: CarCategory[] = [
  {
    id: "economy",
    title: "Эконом класс",
    icon: "Wallet",
    description: "Недорогие и экономичные автомобили для повседневных поездок по городу",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "business",
    title: "Бизнес класс",
    icon: "Briefcase",
    description: "Комфортные автомобили для деловых поездок и важных встреч",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: "premium",
    title: "Премиум класс",
    icon: "Star",
    description: "Люксовые автомобили для особых случаев и незабываемых впечатлений",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&auto=format&fit=crop&q=80"
  }
];

const CarCategories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Категории автомобилей</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name={category.icon} className="text-primary" size={20} />
                  <CardTitle>{category.title}</CardTitle>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/catalog?category=${category.id}`}
                  className="text-primary hover:underline font-medium flex items-center gap-1"
                >
                  Смотреть автомобили
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
