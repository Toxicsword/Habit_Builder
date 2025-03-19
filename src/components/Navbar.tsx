
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Habit Builder
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">
            Features
          </a>
          <a href="#community" className="text-sm hover:text-primary transition-colors">
            Community
          </a>
          <a href="#challenges" className="text-sm hover:text-primary transition-colors">
            Challenges
          </a>
          <a href="#pricing" className="text-sm hover:text-primary transition-colors">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 flex flex-col gap-4 animate-fade-in">
          <a href="#features" className="text-sm py-2 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#community" className="text-sm py-2 hover:text-primary transition-colors">
            Community
          </a>
          <a href="#challenges" className="text-sm py-2 hover:text-primary transition-colors">
            Challenges
          </a>
          <a href="#pricing" className="text-sm py-2 hover:text-primary transition-colors">
            Pricing
          </a>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" className="w-full">
              Log in
            </Button>
            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
