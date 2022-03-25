import Navbar from "../components/Navbar"
import react from "react";
import Inputpdf from "../components/Inputpdf"
import Map from "../components/Map"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { projectFirestore } from "../firebase/config";
import { useEffect } from "react";
import { useState } from "react";

export default function Arac() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    const id = useParams();

    useEffect(() =>{
        setIsPending(true);

        const unsub = projectFirestore.collection('aracdurumu').onSnapshot((snapshot) =>{
                if(snapshot.empty){
                    setError('No car to load');
                    setIsPending(false);
                }
                else{
                    let results = []
                    snapshot.docs.forEach(doc => {
                        results.push({...doc.data(),id : doc.id})
                    })
                    setData(results);
                    setIsPending(false)
                    console.log(results);
                  
                    
                }

        },err => {
            setError(err.message)
            setIsPending(false);
        })
        return ()=> unsub()
    },[])
    return (
        <div>
        <Navbar  id={id.id}/>
        <Map id={id.id} data={data} />
        </div>
    )
}
