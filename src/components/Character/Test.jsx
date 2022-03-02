import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
export default function App() {
const {id} = useParams()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
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
    <div style={{ textAlign: "center" }}>
      <img src={data.image} alt="Avatar" height="100" />
      <p>Name: {data.name}</p>
      <p>Bio: {data.species}</p>
      <p>Username: {data.status}</p>
      <p>Location: {data.gender}</p>
    </div>
  );
}