import React from 'react'
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { BlocDroite, BoxBtns } from './Droite.styled';
// import gsap from "gsap";


const Droite = ({
  couleur,
  imgUrl,
  downTableau,
  upTableau,
  index,
}) => {
  

  return (
    <BlocDroite image={imgUrl} className={`droite`}>
      <h2
        className={`mediumT mt`}
        style={{
          color: couleur,
        }}
      >
        Modéle Mythiques
      </h2>
      <BoxBtns className={`boxbtn${index}`}>
        <div className="btn btn1 btna1">
          <BsArrowUp onClick={upTableau} />
        </div>
        <div className="btn btn2 btnb1">
          <BsArrowDown onClick={downTableau} />
        </div>
      </BoxBtns>
    </BlocDroite>
  );
};

export default Droite
