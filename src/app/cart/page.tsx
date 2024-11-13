'use client';
import Header from '@/components/Header';
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { addItem, deleteItem, emptyCart, removeItem } from '@/redux/features/cartSlice';
import { CartItem } from '@/utils/types';

const CartPage = () => {
    const { carts } = useSelector((state: { allCart : { carts : CartItem[]}}) => state.allCart);
    const dispatch = useDispatch()


    const handlePlus = (data: CartItem) => {
        dispatch(addItem(data))
    }

    const handleMinus = (id: number) => {
        dispatch(removeItem(id))
    }

    const handleDeleteItem = (id: number) => {
        dispatch(deleteItem(id))
    }

    const handleEmtpyCart = () => {
        dispatch(emptyCart())
    }

    return (
        <div className="container mx-auto ">
            <Header />
            <div className="flex flex-col items-center mt-4">
                <div className="bg-gray-800 text-white font-semibold text-lg w-full max-w-3xl p-3 rounded-t-lg text-center flex items-center justify-between =-2">
                    <h1>
                        Cart Calcuation
                    </h1>
                    <button onClick={() => handleEmtpyCart()} className='flex text-white items-center space-x-2 p-2 bg-red-500 rounded-lg text-sm hover:bg-red-600 transition-colors' disabled={carts.length === 0 ? true : false}>
                        <MdDelete className='' />
                        <span className=' font-normal'>Empty Cart</span>
                    </button>
                </div>
                <div className="bg-white shadow-lg rounded-b-lg max-w-3xl w-full p-4">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-3 border-b">Action</th>
                                <th className="p-3 border-b">Product</th>
                                <th className="p-3 border-b">Name</th>
                                <th className="p-3 border-b">Price</th>
                                <th className="p-3 border-b">Qty</th>
                                <th className="p-3 border-b text-right">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts?.map((item, index: number) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-3">
                                        <button onClick={() => handleDeleteItem(item.id)} className="text-red-600 hover:text-red-800">
                                            <MdDelete size={24} />
                                        </button>
                                    </td>
                                    <td className="p-3">
                                        <Image src={item.imgdata} alt="img data" width={50} height={50} className="rounded-md shadow-md max-h-[50px]" />
                                    </td>
                                    <td className="p-3">{item.dish}</td>
                                    <td className="p-3">₹{item.price}</td>
                                    <td className="p-3">
                                        <div className="flex items-center space-x-2">
                                            <button onClick={() => handleMinus(item.id)} className="bg-blue-200 text-blue-700 p-1 rounded hover:bg-blue-300">
                                                <PiMinus size={20} />
                                            </button>
                                            <span className="px-3 border rounded-lg py-1">{item.qnty}</span>
                                            <button onClick={() => handlePlus(item)} className="bg-blue-200 text-blue-700 p-1 rounded hover:bg-blue-300">
                                                <PiPlus size={20} />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-3 text-right">₹{Number(item.qnty) * Number(item.price)}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <hr />
                    <div className='flex items-center justify-end mt-2 w-full gap-20 p-2'>
                        <span className='whitespace-nowrap text-black font-semibold flex items-center gap-2'>
                            Items in Cart : <span className='text-red-500'>{carts.length}</span>
                        </span>
                        <span className='whitespace-nowrap text-black font-semibold'>
                            Total : <span className=''>₹{carts?.reduce((acc: number, item: CartItem) => acc + item.price * item.qnty, 0)}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
