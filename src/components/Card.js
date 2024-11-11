import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
let review = props.review;
  return (
    <div className='flex flex-col md:relative '>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img className='aspect-square w-[140px] h-[140px] z-25 rounded-full' src={review.image}/>
        <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute
        top-[-6px] z-[-20] left-[10px]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-[2xl] capitalize '>{review.name}</p>
        <p className='uppercase text-violet-500 font-medium text-sm'>{review.job}</p>
      </div>

      <div className='mx-auto text-violet-400 mt-5'>
        <FaQuoteLeft/>
      </div>
      <div className='text-center text-slate-500'>
        {review.text}
      </div>
      <div className='mx-auto text-violet-400 mt-5'>
        <FaQuoteRight/>
      </div>
      
    </div>
  )
}

export default Card
