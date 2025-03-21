import styled from "styled-components";

const SessoesDesign = styled.div`
.sessao-container{
width: 338px;
max-height: 149px;
padding: 20px;
margin-bottom: 15px;
border-radius: 8px;
list-style: none;
background-color: #2B2D36;
}
.sessoes{
margin-top:20%;
display: flex;
flex-direction: column;
align-items: center;
list-style: none;
width:100%;
height:100%;
background-color:rgb(31, 32, 36);
}
.sessoes-map{
padding: 0;
margin: 0;
}
.division{
margin-top: 15px;
margin-bottom: 15px;
background-color: #4E5A65;
height:1px;
border-none;
border-radius:8px;
width:302;
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
.list-div{
display:flex;
}
.time-list{
list-style: none;
display: grid;
grid-template-columns: repeat(3, 1fr)    
align-items: center;
justify-content: center; 
gap: 10px;
padding: 0;        
width: 100%;    
}
.time-button{
grid-column: span 1;
width: auto;
height: auto;
list-style: none;
}
.time{
list-style: none;
width: 84px;
grid-column: span 1;
height: 41px;
border-radius: 4px;
border-color: #EE897F;
border-width: 2px;
color:  #FFFFFF;
background-color: #2B2D36;
margin-bottom: 20px;
}
`

export default SessoesDesign