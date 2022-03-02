import {React, useState} from 'react'
 
 
export default function Pagination({page, setPage}){

    const MAX_PAGINATION = 42

    const setNextPage = (page) => {
        page < MAX_PAGINATION ? setPage(page + 1) : setPage(page)
        window.scrollTo(0, 0)
    }

    const setPrevPage = () => {
        page > 1 ? setPage(page - 1) : setPage(1)
        window.scrollTo(0, 0)
    }
 
    return (
        <div className="w-1/2 flex flex-row justify-items-center  justify-between mb-8">
            <button onClick={() =>setPrevPage(page)} className="bg-card-color border-2 border-border-color hover:bg-border-color hover:text-card-color text-white font-bold py-2 px-4 rounded shadow-lg">
                Prev
            </button>
            <span className="text-white font-bold text-xl">Page: {page}</span>
            <button onClick={() =>setNextPage(page)} className="bg-card-color border-2 border-border-color hover:bg-border-color hover:text-card-color text-white font-bold py-2 px-4 rounded shadow-lg">
                Next
            </button>
        </div>
       
    )
}