import { forwardRef } from "react";

  const Blog = forwardRef<HTMLDivElement, {}>((_, ref) =>{
  return (
    <div ref={ref} className='bg-grays-400 text-black p-5 md:p-24' >
        <div className="flex gap-4 md:flex-row flex-col items-center pt-5">
            <div className="w-full">
                <div>
                    <img src="/assets/boy.svg" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <div className="font-medium text-2xl md:text-3xl">Lamin Njie</div>
                    <div className="text-sm md:text-base">Entrepreneur</div>
                </div>
                <div className="text-sm md:text-base">I've been using  INTcash money transfer for a year now, and it's been a game-changer for me. The service is fast, reliable, and user-friendly. The best part is that the fees are very low, which has saved me a lot of money compared to other money transfer services I've used before.</div>
            </div>
        </div>
    </div>
  )
})

export default Blog