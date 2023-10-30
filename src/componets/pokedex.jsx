import './pokedex.css';
import React from 'react';

function Pokedex ({props, e}) {

  return (
    <div className="pokedex">
      <header className="pokedex__header">
        <h1 className="pokedex__name">{props.data.name}</h1>
        <input type="text" className="pokedex__input" placeholder='0' onChange={e}/>
      </header>
      <main className="pokedex__main">
        <figure className="pokedex__figure">
          <img src={props.data.sprites.front_default} alt="" className="pokedex__img" />
        </figure>
        <section className="pokedex__statsContainer">
            <ul className="pokedex__basicStats">
              <li className="pokedex__baseHeight">
                <h2 className="pokedex__basicHeight">Pokemon Height: {props.data.height}</h2>
              </li>
              <li className="pokedex__baseWeight">
                <h2 className="pokedex__basicWeight">Pokemon Weight: {props.data.weight}</h2>
              </li>
              <li className="pokedex__baseTypes">{props.data.types.map(val => {
            return (
              <h2 className="basic__types">{val.type.name}</h2>
            )
          })}
          </li>
            </ul>
          <ul className="pokedex__baseStats">
          {props.data.stats.map(val => {
            return (
              <li className='pokedex__baseStat'>
                <h2 className="basic__types">{val.stat.name}</h2>
                <h2 className="basic__types">: {val.base_stat}</h2>
              </li>
            )
          })}
          </ul>
          <article className="pokedex__LenghtWeight"></article>
        </section>
      </main>
    </div>
  );
}

export default Pokedex;
