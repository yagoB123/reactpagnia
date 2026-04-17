import styles from "./pokemon.module.css";
import { useState, useEffect } from "react";

export function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                return fetch(data.species.url);
            })
            .then(response => response.json())
            .then(speciesData => setSpecies(speciesData))
            .catch(error => console.error("Error:", error));
    }, []);

    if (!pokemon || !species) {
        return <section className={styles.pokemon}><h2>Loading...</h2></section>
    }

    const description = species.flavor_text_entries.find(
        entry => entry.language.name === 'en'
    )?.flavor_text.replace(/[\n\f]/g, ' ') || 'No description available';

    return (
        <section className={styles.pokemon}>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div>
                <h3>Types:</h3>
                {pokemon.types.map(t => (
                    <span key={t.type.name} className={styles["type-" + t.type.name]}>
                        {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
                    </span>
                ))}
            </div>
            <div>
                <h3>Pokedex:</h3>
                <p>{description}</p>
            </div>
        </section>
    )
}
