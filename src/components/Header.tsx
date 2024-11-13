'use client'
import { HiShoppingCart } from "react-icons/hi";
import { useSelector} from "react-redux";

import React from 'react'
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { CartItem } from "@/utils/types";



const Header = () => {
    const { carts } = useSelector((state: { allCart : { carts : CartItem[]}}) => state.allCart);
    console.log(carts)
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-black text-white">
            <div className="flex items-center space-x-2 gap-2">
                <Link href={'/'}><HiHome className="text-white" size={30} /></Link>
                <h1 className="text-white font-bold text-2xl">
                    Redux Toolkit Simple Implementation
                </h1>
            </div>

            <Link href={'/cart'}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <HiShoppingCart className="text-white " size={40} />

                    {/* Badge */}
                    {carts?.length > 0 && (
                        <span
                            style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: 'red',
                                color: 'white',
                                borderRadius: '50%',
                                padding: '4px 8px',
                                fontSize: '10px',
                            }}
                        >
                            {carts.length}
                        </span>
                    )}
                </div>
            </Link>

        </div>
    )
}

export default Header