import styled from "styled-components";

const FilmDesign = styled.div`
.emCartaz{
margin-top:20%;
width:100vw;
height:100vh;
background-color:rgb(31, 32, 36);
}
.poster-container{
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 list-style:none;
 gap: 20px;
}
.poster-container img {
width: 145px;
height: 210px;
border-radius: 8px;
}
.pageTitle{
width:100%;
height: 78px;
display: flex;
flex-direction: center;
justify-content: center;
align-items: center;
}
span{
font-family: Sarala;
font-weight: 400;
font-size: 24px;
line-height: 100%;
letter-spacing: 4%;
text-align: center;
vertical-align: middle;
color: #FFFFFF;
}
`
export default FilmDesign