// import React, { useState } from 'react';
// import HourModal from './Perhour';
// import TabModal from './Pertab';

// const Hamster1 = () => {
//   const [counter, setCounter] = useState(900000);
//   const [hourModal, setHourModal] = useState(false);
//   const [tabModal, setTabModal] = useState(false);
//   const [hourProfit, setHourProfit] = useState(636); // default qiymat

//   const showHourModal = () => {
//     setHourModal(true);
//     setTabModal(false);
//   };

//   const closeHourModal = () => setHourModal(false);
//   const showTabModal = () => {
//     setTabModal(true);
//     setHourModal(false);
//   };
//   const closeTabModal = () => setTabModal(false);

//   const handleSaveHour = (newProfit) => {
//     setHourProfit(newProfit);
//   };
//   const stepByStep = () => {
//     setCounter(counter + step);
//     localStorage.setItem('coin', counter + step);
  
//     const tabModalLogik = (count, discount) => {
//       setStep(step + count);
//       setCounter(counter - discount);
//       localStorage.setItem('step', step + count);
//     };
//   };
  

//   return (
//     <div className='w-[400px] m-auto overflow-hidden mt-12 rounded-[50px] scrollbar-none overflow-y-scroll h-[730px] bg-[#2C2F35] pt-8 relative'>
//       <p className='text-white text-center'>Sherxon Kombat</p>

//       <div className="flex justify-center gap-[10px] mt-[40px]">
//         <div onClick={showTabModal} className="bg-[#32363C] p-[8px] cursor-pointer rounded-[10px] items-center">
//           <p className='text-[#F79841]'> Earn per tap</p>
//           <span className='justify-center flex text-center text-white'><img src="coin.svg" alt="" />+12</span>
//         </div>

//         <div className="bg-[#32363C] p-[8px] cursor-pointer rounded-[10px] items-center">
//           <p className='text-[#6F72E2]'>Coins to level up</p>
//           <span className='justify-center flex text-center text-white'>10 M</span>
//         </div>

//         <div onClick={showHourModal} className="bg-[#32363C] p-[8px] cursor-pointer rounded-[10px] items-center">
//           <p className='text-[#84CB69]'> Profit per hour</p>
//           <span className='justify-center flex text-center text-white'>
//             <img src="coin.svg" alt="" />+{hourProfit}
//           </span>
//         </div>
//       </div>

//       <span className='flex mt-9 items-center justify-center gap-3'>
//         <img className='w-[42px]' src="coin.svg" alt="" />
//         <h1 className='text-4xl font-semibold tracking-widest text-white'>{counter}</h1>
//       </span>

//       <div className="w-[300px] cursor-pointer m-auto justify-center mt-6">
//         <img onClick={() => setCounter(counter + 12)} className='transition-transform duration-200 active:scale-95' src="/tap.svg" alt="" />
//       </div>

//       <div className="flex justify-center mt-8 m-auto gap-40">
//         <span className='justify-center flex text-center text-white gap-3'>
//           <img src="/qw.svg" alt="" /> 6500 / 6500
//         </span>
//         <p className='text-white cursor-pointer'>Boost</p>
//       </div>

//       <div className="flex bg-[#53585f] w-[95%] mb-8 p-3 rounded-3xl m-auto items-center mt-4 justify-center gap-4">
//         <div className="cursor-pointer bg-[#292C32] rounded-2xl items-center p-2">
//           <img className='m-auto w-9' src="/ech.svg" alt="" />
//           <p className='text-white'>Exchange</p>
//         </div>
//         <div className="cursor-pointer">
//           <img className='m-auto w-9' src="/mi.svg" alt="" />
//           <p className='text-[#97999C]'>Mine</p>
//         </div>
//         <div className="cursor-pointer">
//           <img className='m-auto w-16' src="/fr.svg" alt="" />
//           <p className='text-[#97999C]'>Friends</p>
//         </div>
//         <div className="cursor-pointer">
//           <img className='m-auto w-12' src="/ea.svg" alt="" />
//           <p className='text-[#97999C]'>Earn</p>
//         </div>
//         <div className="cursor-pointer">
//           <img className='m-auto w-9' src="/ai.svg" alt="" />
//           <p className='text-[#97999C]'>Airdrop</p>
//         </div>
//       </div>
      
//       {hourModal && <HourModal closeHourModal={closeHourModal} onSave={handleSaveHour} />}
//       {tabModal && <TabModal closeTabModal={closeTabModal} />}
//     </div>
//   );
// };

// export default Hamster1;



import React, { useState, useEffect } from 'react';
import HourModal from './Perhour';
import TabModal from './Pertab';

const Hamster1 = () => {
  const [counter, setCounter] = useState(() => {
    return parseInt(localStorage.getItem('coin')) || 900000;
  });

  const [step, setStep] = useState(() => {
    return parseInt(localStorage.getItem('step')) || 12;
  });

  const [hourProfit, setHourProfit] = useState(() => {
    return parseInt(localStorage.getItem('hour')) || 636;
  });

  const [hourModal, setHourModal] = useState(false);
  const [tabModal, setTabModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        const updated = prev + hourProfit;
        localStorage.setItem('coin', updated);
        return updated;
      });
    }, 3600000); // 1 soatda bir qo‘shadi

    return () => clearInterval(interval);
  }, [hourProfit]);

  const showHourModal = () => {
    setHourModal(true);
    setTabModal(false);
  };

  const closeHourModal = () => setHourModal(false);

  const showTabModal = () => {
    setTabModal(true);
    setHourModal(false);
  };

  const closeTabModal = () => setTabModal(false);

  const handleSaveHour = (newProfit) => {
    setHourProfit(prev => prev + newProfit);
    localStorage.setItem('hour', hourProfit + newProfit);
    setCounter(prev => {
      const updated = prev - 1000; // misol uchun narx
      localStorage.setItem('coin', updated);
      return updated;
    });
  };

  const handleLevelUp = (addStep, cost) => {
    if (counter >= cost) {
      const newStep = step + addStep;
      setStep(newStep);
      localStorage.setItem('step', newStep);

      const updatedCounter = counter - cost;
      setCounter(updatedCounter);
      localStorage.setItem('coin', updatedCounter);
    }
  };

  const handleTap = () => {
    const updated = counter + step;
    setCounter(updated);
    localStorage.setItem('coin', updated);
  };

  return (
    <div className='w-[400px] m-auto overflow-hidden mt-12 rounded-[50px] scrollbar-none overflow-y-scroll h-[730px] bg-[#2C2F35] pt-8 relative'>
      <p className='text-white text-center'>Sherxon Kombat</p>

      <div className="flex justify-center gap-[10px] mt-[40px]">
        <div onClick={showTabModal} className="bg-[#32363C] p-[8px] cursor-pointer rounded-[10px] items-center">
          <p className='text-[#F79841]'> Earn per tap</p>
          <span className='justify-center flex text-center text-white'><img src="coin.svg" alt="" />+{step}</span>
        </div>

        <div className="bg-[#32363C] p-[8px] cursor-pointer rounded-[10px] items-center">
          <p className='text-[#6F72E2]'>Coins to level up</p>
          <span className='justify-center flex text-center text-white'>10 M</span>
        </div>

        <div onClick={showHourModal} className="bg-[#32363C] p-[8px] cursor-pointer rounded-[10px] items-center">
          <p className='text-[#84CB69]'> Profit per hour</p>
          <span className='justify-center flex text-center text-white'>
            <img src="coin.svg" alt="" />+{hourProfit}
          </span>
        </div>
      </div>

      <span className='flex mt-9 items-center justify-center gap-3'>
        <img className='w-[42px]' src="coin.svg" alt="" />
        <h1 className='text-4xl font-semibold tracking-widest text-white'>{counter}</h1>
      </span>

      <div className="w-[300px] cursor-pointer m-auto justify-center mt-6">
        <img onClick={handleTap} className='transition-transform duration-200 active:scale-95' src="/tap.svg" alt="" />
      </div>

      <div className="flex justify-center mt-8 m-auto gap-40">
        <span className='justify-center flex text-center text-white gap-3'>
          <img src="/qw.svg" alt="" /> 6500 / 6500
        </span>
        <p className='text-white cursor-pointer'>Boost</p>
      </div>

      <div className="flex bg-[#53585f] w-[95%] mb-8 p-3 rounded-3xl m-auto items-center mt-4 justify-center gap-4">
        <div className="cursor-pointer bg-[#292C32] rounded-2xl items-center p-2">
          <img className='m-auto w-9' src="/ech.svg" alt="" />
          <p className='text-white'>Exchange</p>
        </div>
        <div className="cursor-pointer">
          <img className='m-auto w-9' src="/mi.svg" alt="" />
          <p className='text-[#97999C]'>Mine</p>
        </div>
        <div className="cursor-pointer">
          <img className='m-auto w-16' src="/fr.svg" alt="" />
          <p className='text-[#97999C]'>Friends</p>
        </div>
        <div className="cursor-pointer">
          <img className='m-auto w-12' src="/ea.svg" alt="" />
          <p className='text-[#97999C]'>Earn</p>
        </div>
        <div className="cursor-pointer">
          <img className='m-auto w-9' src="/ai.svg" alt="" />
          <p className='text-[#97999C]'>Airdrop</p>
        </div>
      </div>

      {hourModal && <HourModal closeHourModal={closeHourModal} onSave={handleSaveHour} />}
      {tabModal && <TabModal closeTabModal={closeTabModal} onUpgrade={handleLevelUp} />}
    </div>
  );
};

export default Hamster1;
