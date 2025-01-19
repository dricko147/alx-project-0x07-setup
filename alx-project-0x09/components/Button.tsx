import React from 'react';

interface ButtonProps {
  title: string;
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, size, shape, onClick }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-md',
    large: 'px-6 py-3 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  const combinedClasses = `${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 transition`;

  return (
    <button className={combinedClasses} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;