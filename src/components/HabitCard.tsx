
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Clock, Flame, MoreVertical } from 'lucide-react';

interface HabitCardProps {
  habit: {
    id: string;
    title: string;
    description?: string;
    currentStreak: number;
    bestStreak: number;
    progress: number;
    frequency: string;
    timeOfDay?: string;
    isCompleted: boolean;
  };
  onComplete?: (id: string, completed: boolean) => void;
}

const HabitCard = ({ habit, onComplete }: HabitCardProps) => {
  const handleCheckboxChange = (checked: boolean) => {
    if (onComplete) {
      onComplete(habit.id, checked);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
        <CardTitle className="text-base font-medium">{habit.title}</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-4">
        {habit.description && (
          <p className="text-sm text-muted-foreground">{habit.description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">{habit.currentStreak} day streak</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{habit.frequency}</span>
          </div>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Progress</span>
            <span className="text-xs font-medium">{habit.progress}%</span>
          </div>
          <Progress value={habit.progress} className="progress-bar-shine h-2" />
        </div>
        
        <div className="pt-2 flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Best streak: {habit.bestStreak} days
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Mark complete</span>
            <Checkbox 
              checked={habit.isCompleted}
              onCheckedChange={handleCheckboxChange}
              id={`habit-${habit.id}`}
              className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitCard;
