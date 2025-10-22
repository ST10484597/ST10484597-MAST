import React, { useState } from 'react';
import { MenuHeader } from './components/MenuHeader';
import { MenuList } from './components/MenuList';
import { AddMenuItemDialog } from './components/AddMenuItemDialog';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: 'Starters' | 'Mains' | 'Desserts' | 'Sides' | 'Beverages';
  price: number;
}

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Seared Scallops',
      description: 'Pan-seared scallops with lemon butter sauce and microgreens',
      course: 'Starters',
      price: 145
    },
    {
      id: '2',
      name: 'Caprese Salad',
      description: 'Fresh mozzarella, heirloom tomatoes, basil, and balsamic reduction',
      course: 'Starters',
      price: 95
    },
    {
      id: '3',
      name: 'Butternut Soup',
      description: 'Roasted butternut squash soup with crispy sage and crème fraîche',
      course: 'Starters',
      price: 85
    },
    {
      id: '4',
      name: 'Grilled Ribeye',
      description: 'Premium ribeye steak with roasted vegetables and red wine jus',
      course: 'Mains',
      price: 385
    },
    {
      id: '5',
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with asparagus, lemon butter, and dill',
      course: 'Mains',
      price: 295
    },
    {
      id: '6',
      name: 'Lamb Rack',
      description: 'Herb-crusted lamb rack with rosemary jus and garlic mashed potatoes',
      course: 'Mains',
      price: 425
    },
    {
      id: '7',
      name: 'Truffle Risotto',
      description: 'Creamy arborio rice with black truffle, parmesan, and wild mushrooms',
      course: 'Mains',
      price: 245
    },
    {
      id: '8',
      name: 'Chocolate Fondant',
      description: 'Warm chocolate fondant with vanilla ice cream',
      course: 'Desserts',
      price: 95
    },
    {
      id: '9',
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean custard with caramelized sugar crust',
      course: 'Desserts',
      price: 85
    },
    {
      id: '10',
      name: 'Grilled Vegetables',
      description: 'Seasonal vegetables with olive oil and herbs',
      course: 'Sides',
      price: 65
    },
    {
      id: '11',
      name: 'House Wine Selection',
      description: 'Curated selection of red and white wines',
      course: 'Beverages',
      price: 120
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddMenuItem = (newItem: Omit<MenuItem, 'id'>) => {
    const menuItem: MenuItem = {
      ...newItem,
      id: Date.now().toString()
    };
    
    setMenuItems(prev => [...prev, menuItem]);
    setIsAddDialogOpen(false);
    toast.success('Menu item added successfully!');
  };

  const handleDeleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
    toast.success('Menu item removed');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl">
        <MenuHeader 
          totalItems={menuItems.length}
          onAddClick={() => setIsAddDialogOpen(true)}
        />
        
        <MenuList 
          menuItems={menuItems}
          onDeleteItem={handleDeleteMenuItem}
        />

        <AddMenuItemDialog
          isOpen={isAddDialogOpen}
          onClose={() => setIsAddDialogOpen(false)}
          onAdd={handleAddMenuItem}
        />

        <Toaster position="top-center" />
      </div>
    </div>
  );
}
