import { useQuery } from 'react-query'
import { useParams } from "react-router-dom"
 
import { BsFillCircleFill, BsFillPersonFill } from "react-icons/bs";
import { RiAliensLine } from "react-icons/ri";
import { IoPlanetSharp } from "react-icons/io5";
import ApiFetch from '../../api/Api'

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CharacterDetail() {
    const {id} = useParams()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        getData(id);
    }, []);

  async function getData(id) {
    await axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }

  if (loading) return "Loading...";
  if (error) return "Error!";
    
    return (
        <article className="flex flex-col justify-center text-white items-center h-screen  align-center  content-center ">
            <div className="flex flex-row shadow-2xl rounded-lg border-4 border-border-color bg-card-color">
               <div className="flex flex-col">
                    <div className="p-2">
                        <img className="rounded-lg w-full" src={data.image} />
                    </div>
                    <div className="flex flex-col bg-border-color m-2 p-4 rounded-lg text-card-color items-start font-sans ">
                        <div className="flex flex-row  justify-between mb-2 text-center">
                            <span title={data.status} className={`${data.status.toLowerCase()}`}><BsFillCircleFill size="1.6em"/></span>
                            <p className="ml-6">{data.name}</p>
                        </div>
                        <div className="flex flex-row  justify-between mb-2">
                            {
                            data.species == "Human" ? 
                                    <>
                                        <span className="" title={data.species}><BsFillPersonFill size="2em"/></span><p className="ml-8">{data.species}</p>
                                    </> 
                                :   <>
                                        <span title={data.species}><RiAliensLine size="2em"/></span><p className="ml-8">{data.species}</p>
                                    </>
                            }
                        </div>
                        <div className="flex flex-row  justify-between mb-2">
                            <span><IoPlanetSharp size="2em"/></span>
                            <p className="ml-8">{data.location.name}</p>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col lg:p-10 sm:p-2 text-center">
                    <h4 className="text-4xl mb-4">Episodes:</h4>
                    <div className="grid grid-cols-10 items-center content-center">
                        {
                        data.episode.map((episode,i)=>(
                            <div className="flex flex-col text-xl border-4 rounded-md cursor-pointer shadow-2xl border-white text-white p-2 m-2 hover:text-border-color hover:border-border-color ">
                                {episode.split('/').slice(-1)}
                            </div>
                        ))
                        
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}