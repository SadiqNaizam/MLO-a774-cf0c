import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import FooterLink from './FooterLink';

interface AuthCardProps {
  title: string;
  usernameLabel?: string;
  usernamePlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  buttonText: string;
  footerText?: string; // e.g., "or,"
  footerLinkText: string;
  footerLinkHref: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
  onFooterLinkClick?: () => void;
  className?: string;
  isLoading?: boolean;
}

const AuthCard: React.FC<AuthCardProps> = ({
  title,
  usernameLabel = "Username",
  usernamePlaceholder = "Username", // Matching image placeholder
  passwordLabel = "Password",
  passwordPlaceholder = "Password", // Matching image placeholder
  buttonText,
  footerText,
  footerLinkText,
  footerLinkHref,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  onFooterLinkClick,
  className,
  isLoading = false,
}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    onUsernameChange(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    onPasswordChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Card className={cn(
      "w-full max-w-sm bg-card text-card-foreground rounded-lg shadow-md",
      className
    )}>
      <CardHeader className="p-6 pb-4"> {/* Adjust padding for tighter spacing if title is shorter or more prominent */}
        <CardTitle className="text-3xl font-bold text-card-foreground">
          {/* Title is left-aligned by default, matching image */}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0"> {/* p-6, but pt-0 due to CardHeader presence */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            id="username"
            label={usernameLabel}
            type="text"
            placeholder={usernamePlaceholder}
            value={username}
            onChange={handleUsernameChange}
            disabled={isLoading}
            autoComplete="username"
            required
          />
          <InputField
            id="password"
            label={passwordLabel}
            type="password"
            placeholder={passwordPlaceholder}
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
            autoComplete="current-password"
            required
          />
          <PrimaryButton type="submit" disabled={isLoading || !username || !password}>
            {isLoading ? 'Logging in...' : buttonText}
          </PrimaryButton>
        </form>
        {(footerLinkText && footerLinkHref) && (
          <div className="mt-6 text-center"> {/* Spacing footer from form, text-center for alignment */}
            {footerText && <span className="text-sm text-muted-foreground">{footerText} </span>}
            <FooterLink
              text={footerLinkText}
              href={footerLinkHref}
              onClick={onFooterLinkClick ? (e) => { 
                e.preventDefault(); // Prevent default navigation if onClick is provided
                onFooterLinkClick(); 
              } : undefined}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AuthCard;