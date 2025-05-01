
import React from "react";
import * as LucideIcons from "lucide-react";

type IconProps = {
  name: string;
  fallback?: string;
  size?: number;
  className?: string;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  fallback = "CircleAlert", 
  size = 24, 
  className = "", 
  color,
  ...props 
}) => {
  // @ts-ignore - dynamic import
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons[fallback];

  return (
    <LucideIcon 
      size={size} 
      className={className} 
      color={color}
      {...props} 
    />
  );
};

export default Icon;
