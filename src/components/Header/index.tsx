'use client';

import Image from "next/image";
import Link from 'next/link';
import Modal from '../Modal'
import { Fragment, useState } from "react";

export function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
    <header className="bg-header w-full h-[212px]">
      <div className="mx-auto max-w-[1120px] flex justify-between pt-8">
        <Image className="max-h-10" src="/images/logo.png" alt="Logo" width={172} height={40} />
        <button 
            className="bg-button text-white size-4 w-[197px] px-5 py-6 rounded-md text-center flex items-center justify-center hover:opacity-80"
            onClick={() => setShowModal(true)}
          >
            Nova Transação
          </button>
      </div>
    </header>
    <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
      <div className="py-6 px-6 lg:px-8 text left">
        <h3 className="mb-4 text-xl font-medium text-gray-900">Cadastar Transação</h3>
        <form className="space-y-6" action="#">
          <div>
            <label
            htmlFor="nome"
            className="block mb-2 text-sm font-medium text-gray-900"
            >

              Nome

            </label>
            <input
              type="text"
              name="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
              placeholder="Aluguel do apartamento"
              required
            />
          </div>
          <div>
            <label
              htmlFor="preço"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Preço
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
              placeholder="R$ 1.200"
              required
            />
          </div>
          <div>
           <label
              htmlFor="categoria"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Categoria
            </label>
            <input
              type="text"
              name="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
              placeholder="Casa"
              required
            />
          </div>
          <button
            type="button"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Cadastrar
          </button>
          
        </form>
      </div>
    </Modal>
    </Fragment>
  
  );
  
}

