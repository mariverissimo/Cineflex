import { useEffect, useState } from "react";
import FilmDesign from "./FilmesDesign";
import { useNavigate } from "react-router-dom";

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((response) => response.json())
            .then((data) => setFilmes(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    function handleClick(id) {
        console.log("Clicked movie ID:", id);
        navigate(`/sessoes/${id}`);
    }

    return (
        <FilmDesign>
            <div className="emCartaz">
                <div className="pageTitle">
                    <span>Em Cartaz</span>
                </div>
                <ul className="poster-container">
                    {filmes.map((filme) => (
                        <li key={filme.id} onClick={() => handleClick(filme.id)}> 
                            <img src={filme.posterURL} alt="Poster" />
                        </li>
                    ))}
                </ul>
            </div>
        </FilmDesign>
    );
}
