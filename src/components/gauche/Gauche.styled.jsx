import styled from "styled-components";


export const Left = styled.div`
  /* deubut range/deb col /fin range/fin col */
  grid-area: 1/1/-1/7;
  display: grid;
  grid-template: repeat(8, 122px) 1fr / repeat(6, 160px) 1fr;
  background: rgb(221, 221, 221);
  /* height:100vh; */

  .stitre {
    grid-area: 3/2/5/7;
    font-family: "Abril Fatface";
    font-size: 50px;
    color: rgb(36, 36, 36);
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
  }

  .txtGauche {
    grid-area: 4/2/5/6;
    padding-top: 30px;
    padding-left: 118px;
  }

  .titre {
    grid-area: 6/2/8/7;
    font-size: 130px;
    font-family: "Abril Fatface";
    margin: 0;
    color: rgb(36, 36, 36);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: red; */
    /* text-align: justify; */

    .Soustitre {
      font-size: 16px;
      font-family: "Poppins" !important;
      padding-left: 16%;
      width: 90%;
      /* text-align:justify */
    }
  }

`;


export const ContCube = styled.div`
  /* deubut range/deb col /fin range/fin col */
  grid-area: 1/1/3/3;
  display: flex;
justify-content: center;
align-items: center;

.cubeHautG{
    font-size:30px;
    height: 125px;
    width: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:3px solid black;
}
`;

export const BarresJum = styled.div`
  /* deubut range/deb col /fin range/fin col */
  grid-area: 1/3/3/5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

  .barre{
    width: 175px;
    height: 5px;
    background: #333;
    border-radius:5px;

  }

  .barre1{
    margin-left: 100px;
  }

`;



