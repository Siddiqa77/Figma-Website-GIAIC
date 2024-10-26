import React from 'react'

const Contactinfo = () => {
  return (
   <section>
   <div className="h-32 flex-col justify-start items-start inline-flex">
  <div className="text-[#bdbdbd] text-[64px] font-light font-['Roboto'] leading-[64px]">Contact</div>
  <div className="text-[#333333] text-[64px] font-bold font-['Roboto'] leading-[64px]">Information</div>
</div>
<div><span className="text-[#333333] text-lg font-bold font-['Roboto']">Company Name<br/></span><span className="text-[#333333] text-base font-light font-['Roboto'] leading-snug">1234 Sample Street Austin Texas 76401</span></div>
<div className="text-[#333333] text-lg font-bold font-['Roboto']">512.333.2222</div>
<div className="text-[#333333] text-base font-light font-['Roboto']">sampleemail@gmail.com</div>
<div className="w-[221.81px] h-[71px] relative">
  <div className="w-[222px] h-[71px] left-0 top-0 absolute bg-[#333333]" />
  <div className="left-[71px] top-[30px] absolute text-white text-xs font-normal font-['Roboto'] uppercase leading-3 tracking-widest">Contact US</div>
</div>
<img className="w-[790px] h-[483px] border border-black" src="/image 14.png" />
<div className="w-[55px] h-[55px] relative">
  <div className="w-[55px] h-[55px] left-0 top-0 absolute bg-[#cecece]/75 rounded-full" />
  <div className="w-[30px] h-[30px] left-[13px] top-[13px] absolute bg-[#333333] rounded-full" />
</div>
   </section>
  )
}

export default Contactinfo