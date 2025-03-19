
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad, MessageSquare, ListChecks } from 'lucide-react';
import HabitCard from '@/components/HabitCard';
import HabitTracker from '@/components/HabitTracker';
import GameDashboard from '@/components/GameDashboard';
import CommunityChat from '@/components/CommunityChat';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6 space-y-8">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        
        <Tabs defaultValue="habits" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="habits" className="flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <span className="hidden sm:inline">Habit Tracker</span>
            </TabsTrigger>
            <TabsTrigger value="games" className="flex items-center gap-2">
              <Gamepad className="h-4 w-4" />
              <span className="hidden sm:inline">Game Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Community Chat</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="habits">
            <HabitTracker />
          </TabsContent>
          
          <TabsContent value="games">
            <GameDashboard />
          </TabsContent>
          
          <TabsContent value="community">
            <CommunityChat />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
