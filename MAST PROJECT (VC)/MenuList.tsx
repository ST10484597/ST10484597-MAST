import React from 'react';
import { MenuItem } from '../App';
import { MenuItemCard } from './MenuItemCard';
import { UtensilsCrossed } from 'lucide-react';

interface MenuListProps {
  menuItems: MenuItem[];
  onDeleteItem: (id: string) => void;
}

const courses: MenuItem['course'][] = ['Starters', 'Mains', 'Desserts', 'Sides', 'Beverages'];

export const MenuList: React.FC<MenuListProps> = ({ menuItems, onDeleteItem }) => {
  const groupedItems = courses.reduce((acc, course) => {
    acc[course] = menuItems.filter(item => item.course === course);
    return acc;
  }, {} as Record<MenuItem['course'], MenuItem[]>);

  if (menuItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-6">
        <div className="bg-orange-100 p-6 rounded-full mb-4">
          <UtensilsCrossed className="text-orange-400" size={48} />
        </div>
        <h3 className="text-slate-700 mb-2">No Menu Items Yet</h3>
        <p className="text-slate-500 text-center text-sm">
          Start building your menu by adding your first dish
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 space-y-8 pb-20">
      {courses.map(course => {
        const items = groupedItems[course];
        if (items.length === 0) return null;

        return (
          <div key={course}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-gradient-to-r from-orange-400 to-transparent flex-1"></div>
              <h2 className="text-orange-600 uppercase tracking-wide text-sm">{course}</h2>
              <div className="h-px bg-gradient-to-l from-orange-400 to-transparent flex-1"></div>
            </div>
            
            <div className="space-y-3">
              {items.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onDelete={() => onDeleteItem(item.id)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
