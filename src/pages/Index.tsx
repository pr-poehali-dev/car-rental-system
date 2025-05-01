
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import CarCategories from "@/components/home/CarCategories";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <CarCategories />
    </MainLayout>
  );
};

export default Index;

