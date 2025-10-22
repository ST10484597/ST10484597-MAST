import React, { useState, useEffect } from 'react';
import { MenuItem } from '../App';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

interface AddMenuItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: Omit<MenuItem, 'id'>) => void;
}

const courses: MenuItem['course'][] = ['Starters', 'Mains', 'Desserts', 'Sides', 'Beverages'];

export const AddMenuItemDialog: React.FC<AddMenuItemDialogProps> = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    course: '' as MenuItem['course'] | '',
    price: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    description: '',
    course: '',
    price: ''
  });

  useEffect(() => {
    if (!isOpen) {
      // Reset form when dialog closes
      setFormData({
        name: '',
        description: '',
        course: '',
        price: ''
      });
      setErrors({
        name: '',
        description: '',
        course: '',
        price: ''
      });
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      description: '',
      course: '',
      price: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Dish name is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Please enter a valid price';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAdd({
        name: formData.name.trim(),
        description: formData.description.trim(),
        course: formData.course as MenuItem['course'],
        price: Number(formData.price)
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-orange-200 text-slate-800 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-slate-800">Add Menu Item</DialogTitle>
          <DialogDescription className="text-slate-600">
            Enter the details for your new dish
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">
              Dish Name *
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Seared Scallops"
              className="bg-white border-orange-200 text-slate-800 placeholder:text-slate-400 focus:border-orange-400"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-slate-700">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the dish..."
              className="bg-white border-orange-200 text-slate-800 placeholder:text-slate-400 min-h-20 focus:border-orange-400"
            />
            {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-slate-700">
              Course *
            </Label>
            <Select
              value={formData.course}
              onValueChange={(value) => setFormData(prev => ({ ...prev, course: value as MenuItem['course'] }))}
            >
              <SelectTrigger className="bg-white border-orange-200 text-slate-800 focus:border-orange-400">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent className="bg-white border-orange-200">
                {courses.map(course => (
                  <SelectItem 
                    key={course} 
                    value={course}
                    className="text-slate-800 focus:bg-orange-50 focus:text-slate-800"
                  >
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.course && <p className="text-red-600 text-sm">{errors.course}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-slate-700">
              Price (R) *
            </Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              value={formData.price}
              onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
              placeholder="0.00"
              className="bg-white border-orange-200 text-slate-800 placeholder:text-slate-400 focus:border-orange-400"
            />
            {errors.price && <p className="text-red-600 text-sm">{errors.price}</p>}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0"
            >
              Add Dish
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
