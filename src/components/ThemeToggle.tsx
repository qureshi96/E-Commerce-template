
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
