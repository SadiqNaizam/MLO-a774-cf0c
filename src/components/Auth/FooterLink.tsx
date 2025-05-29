import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FooterLinkProps {
  text: string;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, href, onClick, className }) => {
  return (
    <Button
      variant="link"
      asChild // Renders the child component (<a> tag) and passes Button's props to it
      className={cn(
        "p-0 h-auto", // Reset Button's default padding and height for a more natural link flow
        "text-sm text-muted-foreground hover:text-card-foreground hover:underline", // Custom link styling
        className
      )}
    >
      <a href={href} onClick={onClick}>
        {text}
      </a>
    </Button>
  );
};

export default FooterLink;