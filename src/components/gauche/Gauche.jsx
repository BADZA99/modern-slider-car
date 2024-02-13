import React from 'react'
import { BarresJum, ContCube, Left } from './Gauche.styled';



const Gauche = ({ couleur, titre, couleurTitre, index, Activeindex }) => {
  // anime tous les elements de la page avec la classe contennant index
 
  return (
    <Left>
      <ContCube>
        <p className="cubeHautG">
          MODELE <br />
          EXCEPTION
        </p>
      </ContCube>
      <BarresJum>
        <hr className="barre barre1" />
        <hr className="barre barre2" />
      </BarresJum>
      <h4 className={`stitre st`} style={{ color: `${couleurTitre}` }}>
        Rentrez dans l'histoire...
      </h4>
      <p className={`txtGauche tg`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae
        voluptatibus delectus numquam velit iure autem quas facilis in harum
        quis veritatis, quisquam fugiat, assumenda ipsa tempore temporibus
        consequatur quod molestias! Fugiat,
      </p>
      <h1 className={`titre t`} style={{ color: `${couleurTitre}` }}>
        {titre}
        <span className={`Soustitre s`} style={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Nemo fuga quam dolorem non officia odio voluptatibus <br /> nam
          veritatis architecto, natus eos, <br /> perspiciatis quo reiciendis
          autem ducimus.Mollitia beatae nihil <br /> repudiandae ad laborum non.
        </span>
      </h1>
    </Left>
  );
};

export default Gauche
