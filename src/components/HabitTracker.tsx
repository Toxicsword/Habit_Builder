
import React from 'react';
import HabitCard from './HabitCard';

// Sample habit data
const habits = [
  {
    id: '1',
    title: 'Drink 8 glasses of water',
    description: 'Stay hydrated throughout the day',
    currentStreak: 5,
    bestStreak: 14,
    progress: 65,
    frequency: 'Daily',
    timeOfDay: 'Throughout the day',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Morning meditation',
    description: '10 minutes of mindfulness to start the day',
    currentStreak: 12,
    bestStreak: 30,
    progress: 85,
    frequency: 'Daily',
    timeOfDay: 'Morning',
    isCompleted: true,
  },
  {
    id: '3',
    title: 'Read for 30 minutes',
    description: 'Read non-fiction books to expand knowledge',
    currentStreak: 3,
    bestStreak: 21,
    progress: 45,
    frequency: 'Daily',
    timeOfDay: 'Evening',
    isCompleted: false,
  },
];

const HabitTracker = () => {
  const [habitList, setHabitList] = React.useState(habits);
  
  const handleComplete = (id: string, completed: boolean) => {
    setHabitList(habitList.map(habit => 
      habit.id === id ? { ...habit, isCompleted: completed } : habit
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Habits</h2>
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors">
          Add New Habit
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habitList.map(habit => (
          <HabitCard 
            key={habit.id} 
            habit={habit} 
            onComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
