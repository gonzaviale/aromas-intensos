import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto py-6 px-4 text-center">
        <h1 className="text-4xl font-bold text-rose-700">Aromas Intensos</h1>
        <p className="text-lg text-gray-600">Jabones y Velas Aromáticas</p>
      </div>
    </header>
  );
};

export default Header;