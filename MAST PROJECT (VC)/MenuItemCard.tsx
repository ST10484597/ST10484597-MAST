import React from 'react';
import { MenuItem } from '../App';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

interface MenuItemCardProps {
  item: MenuItem;
  onDelete: () => void;
}

const courseColors: Record<MenuItem['course'], string> = {
  Starters: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  Mains: 'bg-rose-100 text-rose-700 border-rose-300',
  Desserts: 'bg-purple-100 text-purple-700 border-purple-300',
  Sides: 'bg-blue-100 text-blue-700 border-blue-300',
  Beverages: 'bg-amber-100 text-amber-700 border-amber-300',
};

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onDelete }) => {
  return (
    <Card className="bg-white border-orange-200 p-4 hover:border-orange-400 hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-slate-800">{item.name}</h3>
            <Badge 
              variant="outline" 
              className={`${courseColors[item.course]} text-xs whitespace-nowrap border`}
            >
              {item.course}
            </Badge>
          </div>
          
          <p className="text-slate-600 text-sm mb-3 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-orange-600">
              R {item.price.toFixed(2)}
            </div>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-red-600 hover:bg-red-50 h-8 px-2"
                >
                  <Trash2 size={16} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white border-slate-200">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-slate-800">Delete Menu Item?</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-600">
                    Are you sure you want to remove "{item.name}" from the menu? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onDelete}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </Card>
  );
};
