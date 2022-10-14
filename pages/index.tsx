import Header from '@/layouts/Header';
import NavBar from '@/layouts/Navbar';
import Result from '@/layouts/Resuts';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from 'utils/requests';

const Home: NextPage = ({ results }: any) => {
  console.log({ results });
  return (
    <div className='flex min-h-screen flex-col '>
      <Head>
        <title>Portfolio</title>
        <meta
          name='description'
          content='Using NextJs and tailwind css for generating my portfolio'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <NavBar />
      <Result list={results} />
    </div>
  );
};

export default Home;

export async function getServerSideProps({ query }: any) {
  const genre = query.genre;
  const aa: any = requests;
  const requestData: any = aa[genre];
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requestData?.url || requests.fetchTrending?.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results ?? [],
    },
  };
}
