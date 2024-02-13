import styled from "styled-components";

export const BlocDroite = styled.div`
/* height:100%; */
  grid-area: 1 / 7 /-1 / 13;
  display: grid;
  grid-template: repeat(8, 122px) 1fr / repeat(6, 160px);
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.image});

  background-size: cover;
  background-position: center;
  /* background-color:red; */

  .mediumT {
    grid-area: 1 / 1 / 4 / -1;
    font-family: "Abril Fatface";
    font-size: 130px;
    color: #f1f1f1;
    margin: 0;
    padding-left: 15px;
    line-height: 160px;
  }
`;
export const BoxBtns = styled.div`
  grid-area: 4 / 1 / 6 / 3;
  display: flex;
  padding-left: 15px;

.btn{
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background:rgb(218,218,218);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;
}

.btn2{
  align-self: flex-end;
}
`;