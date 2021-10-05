import React, { Component } from 'react';
import Title from '../title/Title';
class Article extends Component {
 
    render() {
      return (
        <div >
          <Title title='PilasConvencionales' />
          <p>
            A pesar del auge de las energias renovables, 
            las pilas convencionales siguen utilizandose a diario.
          </p>
          <Title title='BateriasLitio ' />
          <p>
            Gracias a las nuevas tecnologias que afectan a las baterías, 
            la autonomía de los coches eléctricos está aumentando a pasos agigantados.
          </p>
        </div>
      )
    }
  }

  export default Article;