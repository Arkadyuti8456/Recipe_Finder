import React from 'react'
import RecipeCard from '../components/RecipeCard';
import { getRandomColor } from '../lib/utils';

const Favourites = () => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-lg my-4'>My Favoutites
        </p>


        {favourites.length === 0 && (<div className='h-[80vh] flex flex-col items-center gap-4'>
          <img src="/404.svg" className='h-3/4' alt="" />
        </div>)}


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {favourites.map((recipe) => (
            <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Favourites
