import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

interface PrimaryButtonProps extends ButtonProps {}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <Button
      type={type}
      className={cn(
        "w-full font-semibold", // Default Shadcn button is font-medium, image looks bolder
        // Default variant styling (bg-primary text-primary-foreground) is applied automatically by Shadcn Button
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;