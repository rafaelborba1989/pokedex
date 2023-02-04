import { dividerClasses, Grid, Link } from '@mui/material'
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCard';
import Page from './Page';


export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons();
    },[]);

    const getPokemons = () => {
        var endpoints = [];
        for(var i=1; i<601; i++ ){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if(name===""){
            getPokemons();
        }
        for(var i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);    
    };
    

    return(
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {pokemons.map((Pokemon, index) => (
                        <Grid item xs={1.5}>
                            <PokemonCard  name = {Pokemon.data.name} image={Pokemon.data.sprites.front_default} types={Pokemon.data.types} url = {`https://pokeapi.co/api/v2/pokemon/${index + 1}/`} />
                         </Grid>
                    ))}    
                </Grid>
            </Container>
        </div>

    );
        
    
};
