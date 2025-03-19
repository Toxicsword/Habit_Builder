
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Star, Award, Zap, Target } from 'lucide-react';

const GameDashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Game Dashboard</h2>
        <Badge variant="secondary" className="text-sm">Level 7</Badge>
      </div>

      {/* XP and Level Progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Experience Points</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Level 7</span>
            <span className="text-sm font-medium">1,250 / 2,000 XP</span>
          </div>
          <Progress value={62.5} className="h-2" />
          <div className="pt-2 text-sm text-muted-foreground">
            750 XP needed for Level 8
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-300">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-amber-200 dark:bg-amber-800 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h4 className="font-medium">7-Day Streak Master</h4>
                <p className="text-sm text-muted-foreground">Completed 3 days ago</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-300">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full">
                <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium">First Community Challenge</h4>
                <p className="text-sm text-muted-foreground">Completed 1 week ago</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {[1, 2, 3, 4, 5].map((position) => (
                <div key={position} className={`flex items-center justify-between p-4 ${position === 2 ? 'bg-muted/50' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-6 text-center font-medium ${position < 4 ? 'text-amber-500' : 'text-muted-foreground'}`}>
                      {position}
                    </span>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{`U${position}`}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">
                      {position === 2 ? 'You' : `User ${position}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-muted-foreground">{3200 - (position * 250)}XP</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameDashboard;
