import React from 'react'
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'

function Products() {
  return (
    <div className='w-4/5 m-auto space-y-10'>
      <div className='flex justify-between item p-2'>
        <ul className='flex items-center space-x-8'>
        <li>Collection</li>
        <li>Phones</li>
        <li>Shirt</li>
        <li>Shoes</li>
        <li>Glasses</li>
        </ul>
      <div className='flex items-center space-x-8'>
        <button><BsArrowLeft size={"1.5rem"}></BsArrowLeft></button>
        <button className='bg-rose-300 rounded-full p-2 text-white drop-shadow-xl'><BsArrowRight size={"1.5rem"}></BsArrowRight></button>
      </div>
      </div>
      <div className='products grid gap-4 md:grid-cols-3 xl:grid-cols-4 grid-cols-1 justify-center'>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/labtop.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>hp EliteBook</p>
          <h1 className='text-xl font-semibold'>$7000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/shoes.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Nike shoes</p>
          <h1 className='text-xl font-semibold'>$6000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/phone.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Samsung Phone</p>
          <h1 className='text-xl font-semibold'>$11000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/cout.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Scout blazzer</p>
          <h1 className='text-xl font-semibold'>$6000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/shoes.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Many Shoes</p>
          <h1 className='text-xl font-semibold'>$4000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/phone.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Xioami Phone</p>
          <h1 className='text-xl font-semibold'>$9000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/glases.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Sun glases</p>
          <h1 className='text-xl font-semibold'>$2000</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full h-4/5 object-cover' src="image/labtop.jpg" alt="" />
          <p className='text-gray-500 font-semibold'>Dell Eline</p>
          <h1 className='text-xl font-semibold'>$32000</h1>
        </div>
      </div>
      <div className='w-full h-[300px] relative'>
        <img className='w-full h-full absolute top-0 rounded-xl object-cover' src="image/phone.jpg" alt="" />
        <div className='w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute'>
          <h1 className='text-4xl font-semibold '>Samsung Phone</h1>
          <p>If you have a specific model in mind, let me know, and I can tailor the description accordingly!</p>
          <button className='w-28 bg-rose-400 p-2 rounded-md'>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Products

