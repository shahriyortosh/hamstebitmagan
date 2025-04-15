import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const HourModal = ({ closeTabModal }) => {
    return (
        <div className="text-white  absolute w-[250px] top-[200px] left-auto right-auto p-5 bg-[#2C2F35] border shadow-sky-300 rounded-xl">
        
            <div className="absolute z-20 top-1 right-2">
                <IoIosCloseCircle
                    onClick={closeTabModal}
                    className="cursor-pointer"
                    size={30}
                />
            </div>
            <div className="flex mt-2 gap-2 rounded-2xl  cursor-pointer w-[90%] bg-[#32363C] p-2 items-center">
                    <p>lvl 1</p>
                    <span className='justify-center flex text-center text-white'><img src="coin.svg" alt="" />+12</span>
                    <span className='justify-center flex text-center text-white'>-1000<img src="coin.svg" alt="" /></span>
            </div>
            <div className="flex mt-2 gap-2 rounded-2xl  cursor-pointer w-[90%] bg-[#32363C] p-2 items-center">
                    <p>lvl 1</p>
                    <span className='justify-center flex text-center text-white'><img src="coin.svg" alt="" />+12</span>
                    <span className='justify-center flex text-center text-white'>-1000<img src="coin.svg" alt="" /></span>
            </div>
            <div className="flex mt-2 gap-2 rounded-2xl  cursor-pointer w-[90%] bg-[#32363C] p-2 items-center">
                    <p>lvl 1</p>
                    <span className='justify-center flex text-center text-white'><img src="coin.svg" alt="" />+12</span>
                    <span className='justify-center flex text-center text-white'>-1000<img src="coin.svg" alt="" /></span>
            </div>

        </div>
    );
};

export default HourModal;
