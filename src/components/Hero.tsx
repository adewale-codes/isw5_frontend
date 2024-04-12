import { forwardRef } from "react";

  const Hero = forwardRef<HTMLDivElement, {}>((_, ref) =>{
  return (
    <div ref={ref}>
        <div className='h-full bg-black w-full flex md:flex-row flex-col items-center p-5 md:p-24'>
            <div className="w-full flex flex-col gap-5">
                <p className="font-bold text-3xl md:text-5xl md:max-w-[95%]">Simple, Transparent, and Affordable Global Transactions</p>
                <p className="text-base md:text-lg">Say goodbye to long wait times and expensive fees. Our hassle-free platform lets you send money to loved ones, pay bills, and make purchases from anywhere in the world. Trust us to handle your transfers securely and efficiently.</p>
                <div className="flex gap-4">
                    <div>
                        <button className="bg-white text-black font-medium py-2 px-4">Send money</button>
                    </div>
                    <div>
                        <button className="border-white border-2 font-medium py-2 px-4">Send money</button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src="/assets/hero.svg" alt="hero" />
            </div>
        </div>
    </div>
  )
})

export default Hero