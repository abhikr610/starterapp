import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
      if(index-1 < 0){
        setIndex(reviews.length - 1);
      }
      else{
        setIndex(index - 1);
      }
    }

    function rightShiftHandler() {
      if(index+1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }

    function surpriseHandler() {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }

  return (
    <div className='w-[85] md:w-[700px] bg-white flex flex-col teansition-all duration-700
    mt-10 p-10 hover:shadow-xl rounded-md '>
        <Card review = {reviews[index]}></Card>
        
        <div className='flex text-3xl gap-3 mt-10 text-violet-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500 '>
            <FiChevronRight/>
        </button>
      </div>
      <div className='pt-10'>
        <button 
        onClick={surpriseHandler}
        className='bg-violet-500 hover:bg-violet-700 transition-all 
        duration-200 cursor-pointer px-10 py-2 rounded-md text-white text-lg'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
