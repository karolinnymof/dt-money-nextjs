import React from 'react';
import Image from 'next/image';

export const Summary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <header className="flex justify-between items-center">
          <p>Entradas</p>
          <div className="text-green-500">
            <Image className="h-6 w-6"  src="/images/Entradas.png" alt="Entradas" width={172} height={40} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </div>
        </header>
        <strong className="block mt-4 text-3xl">R$ 17.400,00</strong>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <header className="flex justify-between items-center">
          <p>Saídas</p>
          <div className="text-red-500">
           <Image className="h-6 w-6"  src="/images/Saidas.png" alt="Saidas" width={172} height={40} />
            
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
           
          </div>
        </header>
        <strong className="block mt-4 text-3xl">R$ 1.259,00</strong>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
        <header className="flex justify-between items-center">
          <p>Total</p>
          <div>
            <Image className="h-6 w-6"  src="/images/Total.png" alt="Total" width={172} height={40} />
            
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />

          </div>
        </header>
        <strong className="block mt-4 text-3xl">R$ 16.141,00</strong>
      </div>
    </div>
  );
};

