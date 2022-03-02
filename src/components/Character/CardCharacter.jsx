import { useState} from 'react'
 
 
export default function CardCharacter({image, name, species, status}){
 
    return (
        <div className="flex flex-col text-center items-center  content-center cursor-pointer rounded-lg border-4 border-border-color bg-card-color m-4 shadow-2xl">
            <div className="character-img mt-2 p-2">
                <img className="rounded-lg w-full" src={image}/>
            </div>
            <div className="flex flex-col text-white mt-2 lg:p-6 sm:p-2 w-full">
                <h4 className="lg:text-2xl text-1xl  font-semibold">{name}</h4>
                <p>{status}</p>
            </div>
        </div>
    )
}