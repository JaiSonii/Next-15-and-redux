import { addItem } from '@/redux/features/cartSlice'
import { CartItem } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import { HiStar, HiTrendingUp } from 'react-icons/hi'
import { useDispatch } from 'react-redux'

type props = {
    cartData: CartItem[]
}

const Cart: React.FC<props> = ({ cartData }) => {
    const dispatch = useDispatch()
    const handleClick = (data : CartItem)=>{
        dispatch(addItem(data))
    }
    return (
        <div className='grid grid-cols-3 gap-4 mt-2'>
            {
                cartData.map((item, index) => (
                    <div key={index} className='p-4 shadow hover:shadow-md rounded-lg bg-gray-50 flex flex-col gap-2 transition-all duration-300 ease-in-out'>
                        <div className='flex items-center justify-center rounded-lg'>
                            <Image src={item.imgdata} alt='dish image' width={300} height={400} className='max-h-[200px] h-full aspect-auto rounded-lg'/>
                        </div>
                        <div className='flex items-center justify-between p-2'>
                            <h2 className='text-black font-semibold text-lg'>
                                {item.dish}
                            </h2>
                            <div className='py-1 px-4 bg-green-500 text-white text-sm rounded-xl font-semibold flex items-center gap-1'>
                                <span>
                                    {item.rating}
                                </span>
                                <HiStar size={15} />
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-2 text-black font-normal'>
                            <p>{item.address}</p>
                            <p>₹{item.price}</p>
                        </div>
                        <hr className='text-gray-700 h-2'/>
                        <div className='flex items-center justify-between'>
                            <div className='rounded-full bg-gray-100 p-2'>
                            <HiTrendingUp size={20}/>
                             </div>   
                            
                            <button onClick={()=>handleClick(item)} className='bg-green-600 text-white rounded-xl py-2 px-4 font-normal hover:shadow-md hover:scale-105 transition-all duration-20000 ease-in-out'>
                                Add to Cart +
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart