import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import AssentosDesign from "./AssentosDesign";
import axios from "axios";

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    const { state } = useLocation();
    const {movieDetails, selectedSession} = state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const { idSessao } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched seats data:", data);
                setAssentos(data.seats);
            })
            .catch((error) => console.error("Error fetching seats:", error));
    }, [idSessao]);

    function handleSeatClick(assento) {
        console.log("Clicked seat:", assento);

        if (!assento.isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }
    
        setSelectedSeats((prevSeats) => {
            
            const isAlreadySelected = prevSeats.some(seat => seat.id === assento.id);
            
            if (isAlreadySelected) {
                console.log(`Removing seat: ${assento.name}`);
                
                return prevSeats.filter(seat => seat.id !== assento.id);
            } else {
                console.log(`Adding seat: ${assento.name}`);
               
                return [...prevSeats, { id: assento.id, name: assento.name }];
            }
        });
    }

    function handleClick(event) {
        event.preventDefault();

        console.log("Selected Seats:", selectedSeats);
        console.log("Name:", nome);
        console.log("CPF:", cpf);

        if (selectedSeats.length === 0) {
            alert("Selecione pelo menos um assento antes de continuar.");
            return;
        }

        const seatIds = selectedSeats.map(seat => seat.id);
        const seatNames = selectedSeats.map(seat => seat.name);

        axios
            .post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
                ids: seatIds,
                name: nome,
                cpf: cpf,
            })
            .then(() => navigate(`/sucesso`, {
                state: {
                    selectedSeats: seatNames ,
                    nome,
                    cpf,
                    movieDetails,
                    selectedSession
                },
            }))
            .catch((error) => {
                console.error("Error booking seats:", error);
                alert("Ocorreu um erro ao reservar os assentos.");
            });
    }

    return (
        <AssentosDesign>
            <div className="assentos">
                <div className="pageTitle">
                    <span>Selecione o(s) assento(s)</span>
                </div>
                <ul className="assentos-container">
                    {assentos.length > 0 ? (
                        assentos.map((assento) => (
                            <li key={assento.id}> 
                                <button  onClick={() => handleSeatClick(assento)}
                                    className={`eachAssento 
                                        ${!assento.isAvailable ? "unavailable" : ""} 
                                        ${selectedSeats.some(seat => seat.id === assento.id) ? "selected" : ""}`}  
                                >
                                    {assento.name}
                                </button>
                            </li>
                        ))
                    ) : (
                        <p>Loading seats...</p>
                    )}
                </ul>

                <div className="division"></div>

                <form>
                    <label className="input-label">Nome do comprador(a)</label>
                    <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome..."/>
                    <label className="input-label">CPF do comprador(a)</label>
                    <input value={cpf} onChange={e => setCPF(e.target.value)} placeholder="Digite seu CPF..."/>
                </form>

                <button type="button" className="botao-vermelho-finalizar" 
                 onClick={handleClick}>Reservar assento(s)</button>
            </div>
        </AssentosDesign>
    );
}
