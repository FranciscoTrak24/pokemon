import { useState, useEffect } from "react";

function Pokemon2({avatar,name}){
  return(
    <figure>
      <img src={avatar} alt={name}/>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default function Pokemon() {
  const [pokemon ,setpokemon ]=useState([])
  useEffect(()=>{
    const getPokemons=async(url)=>{
      let res=await fetch(url),
      json=await res.json();
    }
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
    json.results.forEach(async(el)=>{
      let res2=await fetch(el.url),
      json= await res2.json();

      let pokemon ={
        id:json.id,
        name:json.name,
        avatar:json.sprites.front_default
      };
      setpokemon((pokemons)=> [...pokemons,pokemon]);
    });
      
  
  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemon.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemon.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}