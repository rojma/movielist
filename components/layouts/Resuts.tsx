import Thumbnail from './Thumbnail';

const Result = ({ list }: any) => {
  console.log({ list });
  return (
    <div className='my-10 flex-wrap justify-center px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex'>
      {list.length > 0 &&
        list.map((result: any) => {
          return <Thumbnail key={result.id} data={result} />;
        })}
    </div>
  );
};

export default Result;
