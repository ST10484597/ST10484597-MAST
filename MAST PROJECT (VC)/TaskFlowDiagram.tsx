import React from 'react';
import { Circle, Square, Diamond, Octagon, ArrowDown } from 'lucide-react';

interface FlowNode {
  id: string;
  type: 'action' | 'display' | 'decision' | 'feedback';
  title: string;
  description: string;
  branches?: {
    left?: { label: string; target: string };
    right?: { label: string; target: string };
  };
}

const flowNodes: FlowNode[] = [
  {
    id: 'step1-action',
    type: 'action',
    title: 'Open Website/App',
    description: 'Navigate to www.cottonon.com or www.superbalist.com'
  },
  {
    id: 'step1-feedback',
    type: 'feedback',
    title: 'Homepage Loads',
    description: 'Categories, featured products, and search bar displayed'
  },
  {
    id: 'step2-action',
    type: 'action',
    title: 'Browse or Search',
    description: 'Navigate categories or use search bar (e.g., "T-shirt" or "sneakers")'
  },
  {
    id: 'step2-display',
    type: 'display',
    title: 'Product List Displayed',
    description: 'Matching products shown with filters for size, color, brand, price, style'
  },
  {
    id: 'step3-action',
    type: 'action',
    title: 'Select Product',
    description: 'Click on product image to view details'
  },
  {
    id: 'step3-display',
    type: 'display',
    title: 'Product Page Opens',
    description: 'Shows images, sizes, colors, price, materials, and stock availability'
  },
  {
    id: 'step4-action',
    type: 'action',
    title: 'Choose Options',
    description: 'Select size, color, quantity, and other options'
  },
  {
    id: 'step4-decision',
    type: 'decision',
    title: 'Is Item In Stock?',
    description: 'System checks availability',
    branches: {
      left: { label: 'No', target: 'step4-feedback-no' },
      right: { label: 'Yes', target: 'step4-feedback-yes' }
    }
  },
  {
    id: 'step4-feedback-yes',
    type: 'feedback',
    title: 'Availability Confirmed',
    description: 'System confirms item is available'
  },
  {
    id: 'step5-action',
    type: 'action',
    title: 'Add to Cart',
    description: 'Click "Add to Bag/Cart" button'
  },
  {
    id: 'step5-feedback',
    type: 'feedback',
    title: 'Item Added Confirmation',
    description: 'Mini-cart popup appears, cart icon updates with item count'
  },
  {
    id: 'step6-action',
    type: 'action',
    title: 'Review Cart',
    description: 'Click cart icon to view selected items'
  },
  {
    id: 'step6-display',
    type: 'display',
    title: 'Cart Page Displayed',
    description: 'Shows items, quantities, prices, shipping costs, and promo code field'
  },
  {
    id: 'step7-action',
    type: 'action',
    title: 'Proceed to Checkout',
    description: 'Click "Checkout" or "Proceed to Checkout"'
  },
  {
    id: 'step7-display',
    type: 'display',
    title: 'Checkout Page Opens',
    description: 'Prompts for login, account creation, or guest checkout'
  },
  {
    id: 'step8-action',
    type: 'action',
    title: 'Enter Shipping Info',
    description: 'Provide name, address, phone number, and email'
  },
  {
    id: 'step8-decision',
    type: 'decision',
    title: 'Information Valid?',
    description: 'System validates shipping information',
    branches: {
      left: { label: 'No', target: 'step8-feedback-error' },
      right: { label: 'Yes', target: 'step9-action' }
    }
  },
  {
    id: 'step9-action',
    type: 'action',
    title: 'Choose Delivery Method',
    description: 'Select standard, express, in-store pickup, or same-day delivery'
  },
  {
    id: 'step9-feedback',
    type: 'feedback',
    title: 'Shipping Updated',
    description: 'Shipping cost and estimated delivery date displayed'
  },
  {
    id: 'step10-action',
    type: 'action',
    title: 'Enter Payment Info',
    description: 'Provide card details or select alternative payment (PayPal, SnapScan, etc.)'
  },
  {
    id: 'step10-decision',
    type: 'decision',
    title: 'Payment Valid?',
    description: 'System validates payment information',
    branches: {
      left: { label: 'No', target: 'step10-feedback-error' },
      right: { label: 'Yes', target: 'step11-action' }
    }
  },
  {
    id: 'step11-action',
    type: 'action',
    title: 'Review Order Summary',
    description: 'Confirm items, shipping, payment, promo codes, and total price'
  },
  {
    id: 'step11-display',
    type: 'display',
    title: 'Order Summary Displayed',
    description: 'Shows complete order details before final purchase'
  },
  {
    id: 'step12-action',
    type: 'action',
    title: 'Place Order',
    description: 'Click "Place Order" or "Complete Purchase"'
  },
  {
    id: 'step12-feedback',
    type: 'feedback',
    title: 'Order Confirmed',
    description: 'Confirmation screen shows order number and estimated delivery'
  },
  {
    id: 'step13-feedback',
    type: 'feedback',
    title: 'Email Confirmation Sent',
    description: 'Email with order details, tracking info, and customer service contacts'
  },
  {
    id: 'step14-decision',
    type: 'decision',
    title: 'Track Order?',
    description: 'User decides to track shipment (optional)',
    branches: {
      left: { label: 'No', target: 'end' },
      right: { label: 'Yes', target: 'step14-action' }
    }
  },
  {
    id: 'step14-action',
    type: 'action',
    title: 'Access Tracking',
    description: 'Use order number on Track Order page or email link'
  },
  {
    id: 'step14-feedback',
    type: 'feedback',
    title: 'Tracking Information',
    description: 'Shows shipment status and estimated delivery date'
  }
];

const NodeShape: React.FC<{ node: FlowNode }> = ({ node }) => {
  const getShapeClasses = () => {
    switch (node.type) {
      case 'action':
        return 'bg-blue-500 border-blue-600 text-white rounded-full';
      case 'display':
        return 'bg-green-500 border-green-600 text-white rounded-lg';
      case 'decision':
        return 'bg-amber-500 border-amber-600 text-white transform rotate-45';
      case 'feedback':
        return 'bg-purple-500 border-purple-600 text-white';
      default:
        return '';
    }
  };

  const getShapeStyle = () => {
    if (node.type === 'feedback') {
      return {
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
      };
    }
    return {};
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative border-2 shadow-lg ${getShapeClasses()} ${
          node.type === 'action' ? 'w-48 h-48' : 
          node.type === 'display' ? 'w-56 h-40' :
          node.type === 'decision' ? 'w-48 h-48' :
          'w-52 h-52'
        } flex items-center justify-center p-6 transition-transform hover:scale-105`}
        style={getShapeStyle()}
      >
        <div className={`text-center ${node.type === 'decision' ? '-rotate-45' : ''}`}>
          <div className="mb-2">{node.title}</div>
          <div className="text-xs opacity-90">{node.description}</div>
        </div>
      </div>
      {node.branches && (
        <div className="mt-4 flex gap-8 text-xs">
          {node.branches.left && (
            <div className="text-amber-700 px-2 py-1 bg-amber-100 rounded">
              {node.branches.left.label}
            </div>
          )}
          {node.branches.right && (
            <div className="text-amber-700 px-2 py-1 bg-amber-100 rounded">
              {node.branches.right.label}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ErrorFeedback: React.FC<{ id: string; title: string; description: string; returnTo: string }> = ({ 
  id, 
  title, 
  description,
  returnTo 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative border-2 bg-red-500 border-red-600 text-white shadow-lg w-52 h-52 flex items-center justify-center p-6 transition-transform hover:scale-105"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
        }}
      >
        <div className="text-center">
          <div className="mb-2">{title}</div>
          <div className="text-xs opacity-90">{description}</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-red-700 px-2 py-1 bg-red-100 rounded">
        Return to correct
      </div>
    </div>
  );
};

export const TaskFlowDiagram: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto">
      <div className="flex flex-col items-center gap-6 min-w-max">
        {/* Step 1 */}
        <NodeShape node={flowNodes[0]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[1]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 2 */}
        <NodeShape node={flowNodes[2]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[3]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 3 */}
        <NodeShape node={flowNodes[4]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[5]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 4 with decision */}
        <NodeShape node={flowNodes[6]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[7]} />
        
        {/* Decision branches */}
        <div className="flex items-start gap-16 relative">
          {/* Left branch - Out of stock */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">← No</div>
            <ErrorFeedback 
              id="step4-feedback-no"
              title="Out of Stock"
              description="Error message: Item unavailable. Return to select different option."
              returnTo="step4-action"
            />
            <div className="text-xs text-slate-500">← Return to Step 4</div>
          </div>
          
          {/* Right branch - In stock */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">Yes →</div>
            <NodeShape node={flowNodes[8]} />
            <ArrowDown className="text-slate-400" size={32} />
          </div>
        </div>
        
        {/* Continue main flow */}
        <NodeShape node={flowNodes[9]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[10]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 6 */}
        <NodeShape node={flowNodes[11]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[12]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 7 */}
        <NodeShape node={flowNodes[13]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[14]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 8 with validation */}
        <NodeShape node={flowNodes[15]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[16]} />
        
        {/* Validation branches */}
        <div className="flex items-start gap-16 relative">
          {/* Left branch - Invalid */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">← No</div>
            <ErrorFeedback 
              id="step8-feedback-error"
              title="Validation Error"
              description="Missing or incorrect fields. Error messages displayed."
              returnTo="step8-action"
            />
            <div className="text-xs text-slate-500">← Return to Step 8</div>
          </div>
          
          {/* Right branch - Valid */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">Yes →</div>
            <div className="h-8"></div>
          </div>
        </div>
        
        {/* Step 9 */}
        <NodeShape node={flowNodes[17]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[18]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 10 with validation */}
        <NodeShape node={flowNodes[19]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[20]} />
        
        {/* Payment validation branches */}
        <div className="flex items-start gap-16 relative">
          {/* Left branch - Invalid */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">← No</div>
            <ErrorFeedback 
              id="step10-feedback-error"
              title="Payment Error"
              description="Invalid payment details. Error displayed."
              returnTo="step10-action"
            />
            <div className="text-xs text-slate-500">← Return to Step 10</div>
          </div>
          
          {/* Right branch - Valid */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">Yes →</div>
            <div className="h-8"></div>
          </div>
        </div>
        
        {/* Step 11 */}
        <NodeShape node={flowNodes[21]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[22]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 12 */}
        <NodeShape node={flowNodes[23]} />
        <ArrowDown className="text-slate-400" size={32} />
        <NodeShape node={flowNodes[24]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 13 */}
        <NodeShape node={flowNodes[25]} />
        <ArrowDown className="text-slate-400" size={32} />
        
        {/* Step 14 - Optional tracking */}
        <NodeShape node={flowNodes[26]} />
        
        {/* Final decision branches */}
        <div className="flex items-start gap-16 relative">
          {/* Left branch - No tracking */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">← No</div>
            <div className="w-48 h-24 bg-slate-700 border-2 border-slate-800 text-white rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div>Process Complete</div>
                <div className="text-xs opacity-75 mt-1">End of flow</div>
              </div>
            </div>
          </div>
          
          {/* Right branch - Track order */}
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs text-amber-700 px-3 py-1 bg-amber-100 rounded-full">Yes →</div>
            <NodeShape node={flowNodes[27]} />
            <ArrowDown className="text-slate-400" size={32} />
            <NodeShape node={flowNodes[28]} />
            <ArrowDown className="text-slate-400" size={32} />
            <div className="w-48 h-24 bg-slate-700 border-2 border-slate-800 text-white rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div>Process Complete</div>
                <div className="text-xs opacity-75 mt-1">End of flow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
