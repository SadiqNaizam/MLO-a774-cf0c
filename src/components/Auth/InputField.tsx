import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  className,
  ...props
}) => {
  return (
    <div className={cn("grid w-full items-center gap-1.5", className)}>
      <Label htmlFor={id} className="text-sm font-medium text-card-foreground">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        {...props}
        // Relies on default Shadcn Input styling which uses border-input and placeholder:text-muted-foreground
        // border-input is configured in tailwind.config.ts to use var(--input)
        // var(--input) is defined in index.css as #D3D3D3
      />
    </div>
  );
};

export default InputField;