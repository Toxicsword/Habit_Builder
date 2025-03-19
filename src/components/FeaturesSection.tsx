
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Calendar, LineChart, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Habit Tracking',
    description: 'Track your daily habits with simple checkmarks, set reminders, and view your progress over time.'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join habit groups, share your journey, and stay motivated with support from like-minded individuals.'
  },
  {
    icon: Brain,
    title: 'AI Recommendations',
    description: 'Receive personalized habit suggestions based on your goals, preferences, and current habits.'
  },
  {
    icon: Trophy,
    title: 'Challenges & Gamification',
    description: 'Participate in challenges, earn rewards, and climb the leaderboard to make habit-building fun.'
  },
  {
    icon: LineChart,
    title: 'Insights & Analytics',
    description: 'Visualize your progress, identify patterns, and optimize your habit-building strategy.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Features designed for habit success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive set of tools helps you build lasting habits with the support of community and AI guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
