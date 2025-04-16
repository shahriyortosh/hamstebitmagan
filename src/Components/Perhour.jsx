// import React, { useState } from "react";
// import { IoIosCloseCircle } from "react-icons/io";

// const HourModal = ({ closeHourModal, onSave }) => {
//   const [hourRate, setHourRate] = useState("");

//   const handleSave = () => {
//     if (hourRate) {
//       onSave(parseInt(hourRate));
//       closeHourModal();
//     }
//   };

//   return (
//     <div className="text-white w-[300px] absolute top-[300px] left-1/2 transform -translate-x-1/2 p-5 bg-[#3b3e45]  shadow-sky-300 rounded-xl z-50">
//       <div className="absolute z-20 top-1 right-2">

//         <IoIosCloseCircle
//           onClick={closeHourModal}
//           className="cursor-pointer"
//           size={30}
//         />
//       </div>
//       <h2 className="text-lg mb-3 font-semibold text-center">Profit per hour</h2>
//       <div className="flex gap-4 bg-[#32363C] rounded-2xl p-2 items-center">
//         <img className="w-15" src="/aio.svg" alt="" />
//         <div className="block">
//           <p className=" text-xl text-white">Тоp 10 cmc pairs</p>
//           <p className="text-[#ffffff9b]">Profit per hour</p>
//           <span className=' flex  text-white'><img src="coin.svg" alt="" />+12</span>
//         </div>
//       </div>
//       <div className="flex gap-4 mt-4 bg-[#32363C] rounded-2xl p-2 items-center">
//         <img className="w-15" src="/aioq.svg" alt="" />
//         <div className="block">
//           <p className=" text-xl text-white">Тоp 10 cmc pairs</p>
//           <p className="text-[#ffffff9b]">Profit per hour</p>
//           <span className=' flex  text-white'><img src="coin.svg" alt="" />+12</span>
//         </div>
//       </div>
//       <div className="flex mt-4 gap-4 bg-[#32363C] rounded-2xl p-2 items-center">
//         <img className="w-15" src="/a.svg" alt="" />
//         <div className="block">
//           <p className=" text-xl text-white">Тоp 10 cmc pairs</p>
//           <p className="text-[#ffffff9b]">Profit per hour</p>
//           <span className=' flex  text-white'><img src="coin.svg" alt="" />+12</span>
//         </div>
//         <hr />
     
//       </div>
//     </div>
//   );
// };

// export default HourModal;
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const HourModal = ({ closeHourModal, onSave }) => {
  return (
    <div className="text-white w-[300px] absolute top-[300px] left-1/2 transform -translate-x-1/2 p-5 bg-[#3b3e45] shadow-sky-300 rounded-xl z-50">
      <div className="absolute z-20 top-1 right-2">
        <IoIosCloseCircle onClick={closeHourModal} className="cursor-pointer" size={30} />
      </div>
      <h2 className="text-lg mb-3 font-semibold text-center">Profit per hour</h2>

      {[10, 25, 50].map((profit, i) => (
        <div key={i} onClick={() => onSave(profit)} className="flex gap-4 mt-4 bg-[#32363C] rounded-2xl p-2 items-center cursor-pointer">
          <img className="w-15" src="/aio.svg" alt="" />
          <div className="block">
            <p className=" text-xl text-white">Upgrade +{profit}</p>
            <p className="text-[#ffffff9b]">Cost: -1000</p>
            <span className=' flex text-white'><img src="coin.svg" alt="" />+{profit}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HourModal;
