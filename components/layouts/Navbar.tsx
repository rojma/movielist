import { useRouter } from 'next/router';
import requests from 'utils/requests';

function NavBar() {
  const { push } = useRouter();
  return (
    <nav className='relative'>
      <div className='scrollbar-hide flex flex-row space-x-10 overflow-x-scroll whitespace-nowrap px-10 text-2xl sm:px-20'>
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => push(`/?genre=${key}`)}
              className='last:pr-25 transform cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500'
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className='absolute top-0 right-0 h-10 w-2/12 bg-gradient-to-l from-[#06202A]' />
    </nav>
  );
}

export default NavBar;
