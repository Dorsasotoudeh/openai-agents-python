import { useState } from 'react';
import {
  UserIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [active, setActive] = useState('profile');

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: UserIcon },
    { id: 'about', label: 'About Us', icon: InformationCircleIcon },
    { id: 'regulations', label: 'Regulations', icon: DocumentTextIcon },
    { id: 'contact', label: 'Contact Us', icon: PhoneIcon },
  ];

  return (
    <nav className="bg-white h-full w-64 p-4 space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setActive(item.id)}
          className={`flex items-center w-full px-4 py-2 text-left rounded-lg text-[#00008B] hover:bg-[aliceblue] transition-colors ${active === item.id ? 'text-[#FFD700]' : ''}`}
        >
          <item.icon className="w-5 h-5 mr-3" />
          {item.label}
        </button>
      ))}
    </nav>
  );
}
