import {  forwardRef } from "react";

  const Features = forwardRef<HTMLDivElement, {}>((_, ref) =>{
  return (
    <div ref={ref} className='px-5 text-black md:px-24 py-8 md:py-52 md:pb-20'>
        <div className='flex flex-col gap-5'>
            <div className='font-bold text-black text-2xl md:text-4xl'>Our Features</div>
            <div className="text-black font-semibold text-sm md:text-base md:max-w-[65%]">With our user-friendly interface, you can initiate a transfer in just a few clicks. Our system uses the latest encryption technology to ensure your personal and financial information is kept safe and secure. Plus, our competitive exchange rates mean you get the most for your money.</div>
        </div>
        <div className='flex pt-2 md:pt-9 items-center justify-center'>
            <div className='flex gap-4 md:flex-row flex-col items-center md:items-start pt-5'>
                <div className=''>
                    <div className='bg-white w-64 h-64 py-5 flex justify-center items-center shadow'>
                        <div className="flex flex-col px-5 items-center gap-5 justify-center">
                            <div className=' font-medium text-3xl md:text-4xl text-black'>International Transfer</div>
                            <div className="font-xs md:font-sm">We're committed to making international payments fast, affordable, and hassle-free for everyone, from small business owners to large enterprises.</div>
                        </div>
                        
                    </div>
                </div>
                <div className=''>
                    <div className='bg-white w-64 h-64 py-5 flex justify-center items-center shadow'>
                        <div className="flex flex-col px-5 items-center gap-5 justify-center">
                            <div className=' font-medium text-3xl md:text-4xl text-black'>Safe and Secure</div>
                            <div className="font-xs md:font-sm">Secure and user-friendly platform that empowers individuals and organizations to easily send and receive payments globally. </div>
                        </div>
                        
                    </div>
                </div>
                <div className=''>
                    <div className='bg-white w-64 h-64 py-5 flex justify-center items-center shadow'>
                        <div className="flex flex-col px-5 items-center gap-5 justify-center">
                            <div className=' font-medium text-3xl md:text-4xl text-black'>Transparency & Simplicity  </div>
                            <div className="font-xs md:font-sm">We prioritize the security of our users' information and transactions, utilizing the latest technology and best practices to keep your data safe.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Features