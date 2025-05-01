
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
        <p className="text-gray-600 mb-8">Извините, запрашиваемая страница не существует или была перемещена.</p>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </MainLayout>
  );
};

export default NotFound;
