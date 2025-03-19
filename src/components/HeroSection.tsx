
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              Build better habits, together.
            </h1>
            <p className="text-lg text-muted-foreground">
              Track your habits, join supportive communities, and get AI-powered recommendations to achieve your goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Start for free <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Take a tour
            </Button>
          </div>

          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>Track your daily habits and build streaks</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>Connect with a supportive community</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              <span>Get personalized habit recommendations</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl blur-2xl opacity-50"></div>
            <div className="relative bg-card backdrop-blur-sm rounded-xl overflow-hidden border border-border/50">
              <img
                src="/placeholder.svg"
                alt="Habit Builder Dashboard"
                className="w-full h-auto rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium">Your Habit Dashboard</h3>
                <p className="text-sm text-muted-foreground">Track your progress and stay motivated with streaks and insights.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
