
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const communities = [
  {
    name: 'Morning Routine Masters',
    members: 1243,
    description: 'Build a productive morning routine with like-minded early risers.',
    tags: ['Morning', 'Productivity'],
    image: '/placeholder.svg'
  },
  {
    name: 'Fitness Enthusiasts',
    members: 2891,
    description: 'Share workout routines, nutrition tips, and stay motivated together.',
    tags: ['Fitness', 'Health'],
    image: '/placeholder.svg'
  },
  {
    name: 'Mindfulness Meditators',
    members: 967,
    description: 'Practice daily meditation and mindfulness for mental clarity and peace.',
    tags: ['Mindfulness', 'Meditation'],
    image: '/placeholder.svg'
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-16 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Join a supportive community
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with others who share your goals. Give and receive support, celebrate wins together, and stay accountable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={community.image} 
                  alt={community.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{community.name}</h3>
                    <span className="text-xs text-muted-foreground">{community.members} members</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {community.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                      <Avatar key={i} className="h-6 w-6 border-2 border-background">
                        <AvatarFallback className="text-[10px]">User</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">
                    Join
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <Button size="lg" className="gap-2">
            Explore all communities <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
