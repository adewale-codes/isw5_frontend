import { forwardRef } from "react";

  const Footer = forwardRef<HTMLDivElement, {}>((_, ref) =>{
  return (
    <div ref={ref} className='px-5 bg-primary-100 p-5 md:p-24'>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="text-white font-bold text-xl">ISW5</div>
                <div className="flex gap-5 items-center">
                    <div className="text-lg md:text-xl">Ready to get started?</div>
                    <div>
                        <button className="bg-white text-black py-2 px-4">Get started</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="text-xs md:text-sm">© 2024 ISW5. All rights reserved.</div>
                <div className="flex gap-5">
                    <div className="text-xs md:text-sm">Terms & Conditions</div>
                    <div className="text-xs md:text-sm">Privacy Policy</div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Footer