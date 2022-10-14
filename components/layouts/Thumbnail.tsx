import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ data }: any, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <div
      ref={ref}
      className='group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105'
    >
      <Image
        src={
          `${BASE_URL}${data.backdrop_path || data.poster_path}` ||
          `${BASE_URL}${data.poster_path}`
        }
        layout='responsive'
        height={1080}
        width={1920}
      />
      <div className='p-2'>
        <p className='max-w-md truncate'>{data.overview}</p>
        <h2 className='translate-all mt-1 text-2xl text-white duration-100 ease-in-out group-hover:font-bold'>
          {data.title || data.original_title || data.name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {data.media_type && `${data.media_type} . `}
          {`${data.release_date || data.first_air_date} . `}
          <HandThumbUpIcon className='mx-2 h-5' /> {data.vote_count}
        </p>
      </div>
    </div>
  );
});
export default Thumbnail;
