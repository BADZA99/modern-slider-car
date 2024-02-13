import Droite from './components/Droite/Droite';
import Gauche from './components/gauche/Gauche';
// import globalstyle from style-component
import { TabPrinciaple } from './App.styled';
// import allItems from './utils/features';
import bmw from "./ressources/bmw.jpg";
import ferrari from "./ressources/ferrari.jpg";
import lambo from "./ressources/lambo.jpg";
import gsap from "gsap";
import {  useState } from 'react';

const allItems = [
  {
    imgUrl:bmw,
    titre: "BMW V.E.D",
    couleurTitre: "#000",
    couleur: "#fff",
  },
  {
    imgUrl: ferrari,
    titre: "Ferrari F8",
    couleur: "red",
    couleurTitre: "red"
  },
  {
    imgUrl:lambo,
    titre: "Aventador",
    couleur: "blue",
    couleurTitre: "blue"
  },
];



function App() {
  const [index, setIndex] = useState(0);
 


  const downTableau = () => {

  if (index < allItems.length - 1) {
    setIndex(index + 1);
    gsap.to(".tableau", {
      duration: 1,
      y: "-=100vh",
    });
    //  garder l'index du slide active

  }
}

const upTableau = () => {
  if (index > 0) {
    setIndex(index - 1);
    gsap.to(".tableau", {
      duration: 1,
      y: "+=100vh",
    });
    //  garder l'index du slide active

  }
}
  

  return (
      <TabPrinciaple className='tableau'>
        {
          allItems.map((item, index) => {
            return (
              <div className={`grid grid${index}`} key={index}>
                <Gauche
                  couleur={item.couleur}
                  titre={item.titre}
                  couleurTitre={item.couleurTitre}
                  index={index}
               
                />
                <Droite
                  couleur={item.couleur}
                  imgUrl={item.imgUrl}
                  downTableau={downTableau}
                  upTableau={upTableau}
                  index={index}
               
                />
              </div>
            );
          })
        }
      </TabPrinciaple>
  );
}

export default App;
