import {React, useState} from 'react'
import { IoPlanetSharp } from "react-icons/io5";
 
export default function SearchBar({searchName}){


    const handleChange = (event) => {
        const value = event.target.value
        console.log(value)
        searchName(value)
    }

 
    return (
        <div className="pt-2 mt-2 flex justify-center">
            <input className="border-4 rounded-l-md border-border-color focus:border-card-color  h-10 px-5 pr-16  text-sm focus:outline-none" onChange={handleChange} />
            <button className="inline-block px-6 py-2  rounded-r-md  border-border-color bg-card-color  text-border-color font-medium text-xs leading-tight uppercase hover:bg-border-color hover:text-card-color focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">
                <IoPlanetSharp size="1.5em"/>
            </button>
        </div>
    )
}
