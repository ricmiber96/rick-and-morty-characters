import axios from "axios";


export default class ApiFetch{

   getCharacters = async (API_URL) =>{
        let res =  await fetch(`${API_URL}`)
                            .then(response => response.json())
                            .then(async (results) => {return results})
                            .catch(error => console.log(error))
        
        res.results != undefined ? res =  res.results : res = []           
        return res
    }
    
    getCharacterByID = async(API_URL) =>{
        let res =  await fetch(`${API_URL}`)
                            .then(response => response.json())
                            .then(async(result) => {return result})
        return res
    }

}





