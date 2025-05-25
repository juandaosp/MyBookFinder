'use client'
import MainHeader from "./components/MainHeader";
import SearchBarContainer from "./containers/SearchBarContainer";
import MiniBookContainer from "./containers/MiniBookContainer";
import { useCallback, useEffect, useState } from 'react';
export default function Home() {
  const [searchString, setSearchString] = useState('');
  const [bookData, setBookData] = useState([]);
  
  const handleSearchClick = useCallback(async () => {
    if(!searchString.trim()) {
      setBookData([]);
      return;
    }

    try {
      const querySearchString = encodeURIComponent(searchString);
      const fetchUrl = `https://www.googleapis.com/books/v1/volumes?q=${querySearchString}`;
      const response = await fetch(fetchUrl);
      if( !response.ok ) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json();
      setBookData(data?.items  || []);
    } catch(error) {
      console.error('Error fetching Books', error);
      setBookData([]);
    }
  }, [searchString]);

  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <MainHeader title='Book Finder'/>
        <SearchBarContainer
          searchString={searchString}
          setSearchString={setSearchString}
        />
        <div className='w-full flex justify-center items-center'>
          <input
            type='button'
            className='px-4 py-2 bg-red-500 text-white text-bold rounded-sm text-lg cursor-pointer hover:opacity-90'
            onClick={handleSearchClick}
            value='Search'
          />
        </div>
        <MiniBookContainer items={bookData} />
      </main>
  );
}
