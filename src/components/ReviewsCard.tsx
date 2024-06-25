import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image, { StaticImageData } from 'next/image'

interface IReview 
    {
        id: number,
        name: string,
        img: StaticImageData
    }


 
const ReviewsCard =({id, name, img}:IReview) => {
  return (
    <div key={id} className='bg-neutral-900'>
        <div className='flex items-center'>
            <div className='w-3/4 py-3 space-y-3 px-3'>
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <h3 className='text-orange-400 uppercase text-xs font-semibold tracking-[2px]'>client</h3>
                </div>
                <p className='text-sm italic'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, distinctio quis! Minima voluptas officiis nesciunt rem sed eveniet cum id similique dicta? Non omnis consectetur explicabo recusandae nesciunt quia culpa?
                </p>
                <div className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
           <div className='w-2/4 md:w-1/4'>
           <Image src={img} alt='img' className='rounded-md h-full'/>
           </div>
        </div>
    </div>
  )
};

export default ReviewsCard