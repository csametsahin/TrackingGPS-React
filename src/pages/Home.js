import Navbar from "../components/Navbar"
import Inputpdf from "../components/Inputpdf"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
export default function Home() {
    const id = useParams();
        return (
        <div>
        <Navbar id={id.id}/>
        <p style={{textAlign:'center'}}>Hoşgeldiniz..!!</p>
        </div>
    )
}
