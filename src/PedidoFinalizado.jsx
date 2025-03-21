import { useNavigate, useLocation } from "react-router-dom";
import PedidoDesign from "./PedidoFinalizadoDesign";

export default function PedidoFinalizado() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const state = location.state || {};
    const { movieDetails, selectedSession, selectedSeats, nome, cpf } = state || {};
    console.log("State from navigate:", state);

    if (!location.state) {
        return <div>Carregando... (Verifique se os dados foram passados corretamente)</div>;
    }

    function backToMenu() {
        navigate(`/`);
    }

    return (
        <PedidoDesign>
            <div className="pedido">
                <div className="pageTitle">
                    <span>Pedido Realizado!</span>
                </div>

                <div className="pedido-container">
                    <div> 
                        <div className="title-container">
                        <span className="titles">Filme e Sessão</span>
                        </div>
                        <div className="division"></div>
                        <div className="movie-details">
                            <span>{movieDetails.name}</span>
                            <span>{selectedSession.date}, {selectedSession.time}</span>
                        </div>

                        <div className="title-container">
                        <span className="titles">Ingressos</span>
                        </div>
                        <div className="division"></div>
                        <div className="movie-details">
                            {selectedSeats.map((seat, index) => (
                                <span key={index}>Assento {seat}</span>
                            ))}
                        </div>

                        <div className="title-container">
                        <span className="titles">Comprador(a)</span>
                        </div>
                        <div className="division"></div>
                        <div className="movie-details">
                        <span>Nome: {nome || "Não informado"} </span>
                        <span>CPF: {cpf || "Não informado"} </span>
                        </div>
                    </div>
                </div>

                <button type="submit" className="botao-vermelho-finalizar" onClick={backToMenu}>
                    Voltar para tela inicial
                </button>
            </div>
        </PedidoDesign>
    );
}
