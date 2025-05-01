
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarInset,
  SidebarTrigger,
  SidebarFooter
} from "@/components/ui/sidebar";
import Icon from "@/components/ui/Icon";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const navigationItems = [
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/catalog", icon: "Car", label: "Каталог" },
    { path: "/cart", icon: "ShoppingCart", label: "Корзина" },
    { path: "/admin", icon: "Settings", label: "Админ" },
    { path: "/about", icon: "Info", label: "О нас" },
    { path: "/contacts", icon: "Phone", label: "Контакты" },
    { path: "/blog", icon: "FileText", label: "Блог" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar>
          <SidebarHeader className="flex items-center gap-2 px-4 py-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-b.svg" alt="Автопрокат" className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">Автопрокат</span>
            </Link>
            <SidebarTrigger className="ml-auto" />
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                    tooltip={item.label}
                  >
                    <Link to={item.path} className="flex items-center gap-2">
                      <Icon name={item.icon} size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="px-4 py-2">
            <div className="text-xs text-gray-500">
              &copy; 2025 Автопрокат
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
