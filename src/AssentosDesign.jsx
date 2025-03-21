import styled from "styled-components";

const AssentosDesign = styled.div`
.assentos{
display: flex;
margin-top:20%;
flex-direction: column;
align-items: center;
width:100%;
height:100%;
background-color:rgb(31, 32, 36);
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
.assentos-container{
margin: 20px;
display: flex;
list-style: none;
flex-wrap: wrap;
gap: 10px;
}
.eachAssento{
font-family: Roboto;
font-weight: 400;
font-size: 11px;
line-height: 100%;
letter-spacing: 4%;
text-align: center;
vertical-align: middle;
color: #2B2D36;
width: 26px;
height: 26px;
display: flex;             
border-radius: 50%;
align-items: center;
justify-content: center;
border-color: #808F9D;
border-width: 1px;
background-color: #9DB899;
}
.eachAssento.selected {
background-color: #FADBC5;
border-color: #EE897F;
border-width: 2px;
}
.eachAssento.unavailable {
background-color: #2B2D36;
}
.division{
margin-top: 15px;
margin-bottom: 15px;
background-color: #4E5A65;
height: 1px;
border-none;
border-radius:8px;
width: 302px;
}
form{
display:flex;
flex-direction: column;
margin-bottom: 20px;
}
form label{
font-family: Sarala;
font-weight: 400;
font-size: 16px;
line-height: 100%;
vertical-align: middle;
text-align: left;
margin-bottom: 5px;
}
input{
width: 338px;
height: 40px;
background-color: #FFFFFF;
border-radius: 8px;
border-width: 1px;
border-color: #D4D4D4;
font-family: Roboto;
font-weight: 400;
font-style: italic;
font-size: 16px;
line-height: 100%;
vertical-align: middle;
margin-bottom: 10px;
}
.botao-vermelho-finalizar{
margin-bottom: 20px;
width: 338px;
height: 42px;
border-radius: 8px;
background-color: #EE897F;
font-family: Sarala;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: 4%;
text-align: center;
vertical-align: middle;
color: #2B2D36;
}
`
export default AssentosDesign