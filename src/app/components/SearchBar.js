

import { Search } from "lucide-react";
export default function SearchBar({searchString, onInput}) {
    const inputHandler = ({ target }) => {
        onInput(target.value);
    }
    return (
        <section className='w-full h-14 flex justify-center items-center px-5 mt-8'>
            <div className='w-full max-w-2xl flex items-center bg-gray-50 rounded-lg border-1 border-solid border-gray-300  px-2 py-4 pr-4'>
                <input 
                    className='w-full mx-auto py-4 px-2 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-gray-800 font-normal text-lg mr-2'
                    onInput={inputHandler}
                    value={searchString}
                    placeholder="Enter a query (Title, Author, etc)"
                />
                <Search />
            </div>
        </section>
    )
}