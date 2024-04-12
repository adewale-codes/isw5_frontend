import React from 'react'

const Multiple = () => {
  return (
    <div className='text-black p-5 md:p-20'>
      <div className='font-medium text-3xl md:font-4xl'>Multiple Features we Offer</div>
      <div className='flex gap-4 md:flex-row flex-col items-center pt-5'>
        <div className=''>
          <img src="/assets/phone.svg" alt="phone" />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='bg-white flex flex-col gap-5 rounded shadow h-38 w-96 py-5 px-5'>
            <div>
              <img src="/assets/first.svg" alt="first" />
            </div>
            <div className='font-medium text-lg md:text-xl'>Global Currency Exchange</div>
            <div className='text-lg md:text-xl'>Convert your money into the currency of your choice with competitive exchange rates</div>
          </div>
          <div className='bg-white flex flex-col gap-5 rounded shadow h-38 w-96 py-5 px-5'>
            <div>
              <img src="/assets/second.svg" alt="second" />
            </div>
            <div className='font-medium text-lg md:text-xl'>Bank-level Security</div>
            <div className='text-lg md:text-xl'>Rest easy knowing that your data and transactions are protected by the same level of security used</div>
          </div>
          <div className='bg-white flex flex-col gap-5 rounded shadow h-38 w-96 py-5 px-5'>
            <div>
              <img src="/assets/third.svg" alt="third" />
            </div>
            <div className='font-medium text-lg md:text-xl'>24*7 Customer Support</div>
            <div className='text-lg md:text-xl'>Receive fast and friendly support from our knowledgeable customer support team whenever you need</div>
          </div>
          <div className='bg-white flex flex-col gap-5 rounded shadow h-38 w-96 py-5 px-5'>
            <div>
              <img src="/assets/fourth.svg" alt="fourth" />
            </div>
            <div className='font-medium text-lg md:text-xl'>Multiple Payment Methods</div>
            <div className='text-lg md:text-xl'>Choose from a variety of payment methods to suit your needs, including credit/debit cards, bank</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Multiple