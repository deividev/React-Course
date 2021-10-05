import React, { Component } from 'react';

//Components
import Title from '../title/Title';
import Autonomia from '../autonomia/Autonomia';
import Hidrogeno from '../hidrogeno/Hidrogeno';
import ButtonLikes from '../buttonLikes/ButtonLikes';

class Article extends Component {
  
    render() {
      return (
        <div >
          <Title title='PilasConvencionales' />
          <p>
            A pesar del auge de las energias renovables, 
            las pilas convencionales siguen utilizandose a diario.
          </p>
          <Autonomia km={0}/>
          <Title title='BateriasLitio ' />
          <p>
            Gracias a las nuevas tecnologias que afectan a las baterías, 
            la autonomía de los coches eléctricos está aumentando a pasos agigantados.
          </p>
          <Autonomia km={500}/>
          <Hidrogeno />
          <ButtonLikes />
        </div>
      )
    }
  }

  export default Article;