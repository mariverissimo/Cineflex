import styled from "styled-components";

const PedidoDesign = styled.div`
.pedido{
display: flex;
margin-top:20%;
flex-direction: column;
align-items: center;
width:100%;
height:100%;
background-color:rgb(31, 32, 36);
}
.pedido-container{
display: flex;
flex-direction: column;
align-items: flex-start;
width: 338px;
height: 421px;
border-radius: 8px;
margin-bottom: 15px;
padding: 20px;
background-color: #2B2D36;
}
.movie-details{
display:flex;
flex-direction: column;
margin-bottom: 10px;
list-style:none;
gap: 15px;
}
.movie-details span{
font-family: Sarala;
font-weight: 400;
font-size: 20px;
line-height: 100%;
text-align: left;
vertical-align: left;
color: #FFFFFF;
letter-spacing: 4%;
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
text-align: left;
vertical-align: left;
color: #9DB899;
}
.title-container{
margin-top:15px;
display: flex;
flex-direction: column;
align-items: flex-start;
}
.titles{
font-family: Sarala;
font-weight: 700;
font-size: 22px;
line-height: 100%;
letter-spacing: 4%;
text-align: left;
vertical-align: middle;
color: #EE897F;
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

export default PedidoDesign;