import React from 'react';
import { Plus, ChefHat } from 'lucide-react';
import { Button } from './ui/button';

interface MenuHeaderProps {
  totalItems: number;
  onAddClick: () => void;
}

export const MenuHeader: React.FC<MenuHeaderProps> = ({ totalItems, onAddClick }) => {
  return (
    <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-6 pb-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-white p-2.5 rounded-xl shadow-lg">
            <ChefHat className="text-orange-600" size={28} />
          </div>
          <div>
            <h1 className="text-white drop-shadow-md">Chef Christoffel</h1>
            <p className="text-orange-100 text-sm">Private Dining Menu</p>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-orange-200 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-orange-700 text-sm">Total Menu Items</p>
            <p className="text-orange-600 text-4xl">{totalItems}</p>
          </div>
          <Button
            onClick={onAddClick}
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:from-orange-600 hover:to-rose-600 shadow-lg border-0"
          >
            <Plus size={20} className="mr-2" />
            Add Dish
          </Button>
        </div>
      </div>
    </div>
  );
};
