import {React, useState} from 'react'
 
 
export default function SelectType ({changeSpecie}){

    const handleSelect = (ev) =>{
        const value = ev.target.value
        changeSpecie(value)
    }
 
    return (
        <div className="pt-2 mt-5 flex ml-2 cursor:pointer">
            <div className="mb-3">
                <select
                onChange={handleSelect} 
                className="form-select appearance-none
                text-center
                block
                w-full
                px-3
                py-2
                text-md
                font-normal
                text-border-color
                bg-card-color bg-clip-padding bg-no-repeat
                rounded
                transition
                ease-in-out
                focus:text-border-color focus:bg-card-color focus:border-green-600 focus:outline-none hover:bg-border-color hover:text-card-color " aria-label="Default select example">
                    <option selected value="">All</option>
                    <option value="Alien">Alien</option>
                    <option value="Human">Human</option>
                </select>
            </div>
        </div>
    )
}