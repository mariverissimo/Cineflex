import logo from './assets/Cineflex_logo.png'
import TopDesign from './TopoDesign'
export default function Topo(){
    return (
        <TopDesign>
            <div className="top-container">
            <img src={logo} />
            <span>Cineflex</span>
        </div>
        </TopDesign>
    )
}