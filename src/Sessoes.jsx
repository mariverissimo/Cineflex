import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SessoesDesign from "./SessoesDesign";

export default function Sessoes() {
    const [sessoes, setSessoes] = useState([]);
    const [movieDetails, setMovie] = useState({});
    const { idFilme } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((response) => response.json())
            .then((data) => {
                setSessoes(data);
                setMovie({
                    name: data.title,
                    posterUrl: data.posterURL
                });})
            .catch((error) => console.error("Error fetching sessions:", error));
    }, [idFilme]); 

     function handleClick(id, time, date, movieDetails) {
        console.log("Clicked session ID:", id);
        navigate(`/assentos/${id}`, {state: 
            {movieDetails,
            selectedSession: { id, time, date }
        }});
    }

    return (
       <SessoesDesign>
         <div className="sessoes">
            <div className ="pageTitle">
                <span>Selecione o horário</span>
            </div>
            <ul className="sessoes-map">
                {sessoes.days && sessoes.days.map((sessao) => ( 
                    <li className="sessao-container" key={sessao.id}>
                        <span>{sessao.weekday}, {sessao.date}</span>

                        <div className="division"></div>

                        <div className="list-div">
                            <ul className="times-list">
                                {sessao.showtimes.map((horario) => (
                                <li key={horario.id} className="time-button">
                                    <button className="time"
                                    onClick={() => handleClick(horario.id, horario.name, sessao.date, movieDetails)}
                                    >{horario.name}</button>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
       </SessoesDesign>
    );
}
