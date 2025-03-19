
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, Users, Bell, PlusCircle } from 'lucide-react';

const CommunityChat = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-220px)]">
      {/* Communities Sidebar */}
      <Card className="col-span-1 overflow-hidden">
        <CardHeader className="px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Communities</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-auto">
          <div className="divide-y">
            {[
              { name: 'Morning Routine Masters', unread: 3 },
              { name: 'Fitness Enthusiasts', unread: 0 },
              { name: 'Mindfulness Meditators', unread: 0, active: true },
              { name: 'Book Club', unread: 7 },
              { name: 'Productivity Hackers', unread: 0 },
            ].map((community, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-4 hover:bg-muted/50 cursor-pointer ${community.active ? 'bg-muted' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{community.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium truncate max-w-[140px]">
                    {community.name}
                  </span>
                </div>
                {community.unread > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {community.unread}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="col-span-1 lg:col-span-3 flex flex-col overflow-hidden">
        <CardHeader className="px-6 py-4 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CardTitle className="text-lg">Mindfulness Meditators</CardTitle>
              <Badge variant="outline" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>42</span>
              </Badge>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        {/* Messages */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {[
            { user: 'Alex', message: 'Good morning everyone! How was your meditation session today?', time: '9:30 AM', isMine: false },
            { user: 'You', message: 'It was great! I managed to do a full 20 minutes today.', time: '9:32 AM', isMine: true },
            { user: 'Sarah', message: 'I struggled a bit with focus today. Any tips?', time: '9:35 AM', isMine: false },
            { user: 'Michael', message: 'Try counting your breaths, it helps me stay focused.', time: '9:38 AM', isMine: false },
            { user: 'You', message: 'I also find using the 4-7-8 technique really helpful when my mind starts to wander.', time: '9:40 AM', isMine: true },
            { user: 'Emma', message: 'Has anyone tried the new guided meditation in the app?', time: '9:45 AM', isMine: false },
          ].map((message, index) => (
            <div key={index} className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.isMine ? 'flex-row-reverse' : ''}`}>
                {!message.isMine && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div className={`space-y-1 ${message.isMine ? 'items-end' : 'items-start'}`}>
                  {!message.isMine && (
                    <span className="text-xs font-medium">{message.user}</span>
                  )}
                  <div className={`rounded-lg px-4 py-2 ${message.isMine ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <p className="text-sm">{message.message}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{message.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="p-4 border-t flex gap-2">
          <Input placeholder="Type your message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CommunityChat;
