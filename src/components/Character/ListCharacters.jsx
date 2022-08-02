import {useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import CardCharacter from './CardCharacter'
import ApiFetch from '../../api/Api'
import SearchBar from '../Filters/SearchBar'
import SelectType from '../Filters/SelectType'
import Pagination from '../Pagination/ButtonPagination'


export default function ListCharacters(){

    const api = new ApiFetch()
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [name, setName] = useState("")
    const [specie, setSpecie] = useState("")
    const [searchValue, setSearchValue] = useState([])
    let API_URL = `https://rickandmortyapi.com/api/character/?name=${name}&species=${specie}&page=${page}`

    const searchName = (value) =>{
        setName(value)
        setSearchValue(value);
        console.log(name);
        if(value === ''){
            setPage(1)
        }
    }

    const changeSpecie = (value) =>{
        setSpecie(value)
    }

    const getCharacters = async () => {
        let res = await api.getCharacters(API_URL)
        setCharacters(res)
    }

    useEffect(() =>{
        getCharacters() 
        console.log('heeey')
    },[name,specie,page])


    return (
        <>
        <div className="flex flex-row justify-center content-center items-center">
          <SearchBar searchName={searchName}/>
          <SelectType changeSpecie={changeSpecie}/>
        </div>
            {
            characters.length > 0 ?
                <div>
                <section className="flex flex-col justify-center items-center m-4">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2">
                        {characters.map((character, i) =>(
                            <Link to={`/characters/${character.id}`}>
                                <CardCharacter image={character.image} name={character.name} species={character.species} status={character.status}/>
                            </Link>
                        ))}
                    </div>
                    
                </section>
                <div className="flex flex-row justify-center content-center items-center mb-4 mt-10">
                        <Pagination page={page} setPage={setPage}/>
                    </div>
                </div>
                
                :
                <section className="">
                    <h1> No hay resultado</h1>
                </section>
            }

        </>
    )
}