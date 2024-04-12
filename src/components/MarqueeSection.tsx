import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeSection = () => {
  return (
    <div>
        <Marquee pauseOnHover>
            <div className='bg-grays-200 h-28 w-full flex md:flex-row flex-col justify-center items-center p-5 font-normal font-heading text-white text-4xl'>
                <div className='flex items-center gap-32'>
                    <div>
                        <img src="/assets/quartz.svg" alt="quartz" />
                    </div>
                    <div>
                        <img src="/assets/bloomberg.svg" alt="bloomberg" />
                    </div>
                    <div>
                        <img src="/assets/cnbc.svg" alt="cnbc" />
                    </div>
                    <div>
                        <img src="/assets/forbes.svg" alt="forbes" />
                    </div>
                    <div>
                        <img src="/assets/techcrunch.svg" alt="techcrunch" />
                    </div>
                </div>
            </div>
        </Marquee>
    </div>
  )
}

export default MarqueeSection