import { useFetch } from "../hooks/useFetch";
import axios from "axios";
import { useState } from "react";
export default function Admin() {
    const url = 'https://localhost:44329/api/users/getall';
    const {data:users,isPending,error} = useFetch(url);
    const url2 = 'https://localhost:44329/api/pdfs/getall';
    const {data:pdf,isPending:isPendingPdf,error:errorPdf} = useFetch(url2)
    const[dataState,setDataState]=useState([]);
    const [usernameState,setUserNameState] = useState("");
    const [passwordState,setPasswordState] = useState("");
    const [passSavedState,setPassSavedState] = useState("");


    const deleteUser = (user) =>{
        console.log(user);
        const headers = { 
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        };
        axios.delete('https://localhost:44329/api/users/delete',user, { headers })
            .then((res) => {
              console.log(res)
             })
            .catch((err) => {
              console.log(err)
           });
    }

    
    const kullanici = {email : usernameState , password:passwordState}
     const handleSubmit = (e) => {
     e.preventDefault();
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar'
    };
    axios.post('https://localhost:44329/api/users/add/', kullanici, { headers })
        .then((res) => {
          console.log(res)
          setPassSavedState("Başarılı");
         })
        .catch((err) => {
          console.log(err)
       });
     }

   
    const onChangeHandle1 = (e)=>{
            var text = e.target.value;
            if(e.target.value=""){
                setDataState([]);
            }
          
            pdf.data.map((pdfim) =>{
                if(pdfim.className.includes(text)){
                    setDataState((prevEvents) => {
            
                           setDataState([pdfim]);
      
              })
                  
                }
            })
    }
    const onChangeHandle2 = (e)=>{
        var text = e.target.value;
      
        pdf.data.map((pdfim) =>{
            if(pdfim.projectTopic.includes(text)){
                setDataState((prevEvents) => {
        
                        setDataState([pdfim])
  
          })
              
            }
        })
}
const onChangeHandle3 = (e)=>{
    var text = e.target.value;
  
    pdf.data.map((pdfim) =>{
        if(pdfim.keyWords.includes(text)){
            setDataState((prevEvents) => {
    
                setDataState([pdfim])

      })
          
        }
    })
}
const onChangeHandle4 = (e)=>{
    var text = e.target.value;
  
    pdf.data.map((pdfim) =>{
        if(pdfim.deliveryDate.includes(text)){
            setDataState((prevEvents) => {
    
                setDataState([pdfim])

      })
          
        }
    })
}

    return (
        <div>
             {users && users.data.map((user)=> (
                 <div key={user.userId}>
                        <p>Isim : {user.firstName}</p>
                        <p>Soy Isim : {user.lastName}</p>
                        <p>E-mail : {user.email}</p>
                        <button onClick={()=> deleteUser(user)}>Delete</button>
                 </div>
             ))}

        {pdf && pdf.data.map((pdflerim) => (
               <div className="pdf-box" key={pdflerim.pdfId} >
                   <h3>Proje Başlığı : {pdflerim.projectTopic}</h3>
                   <p>Öğrenci Adı : {pdflerim.studentName}</p>
                   <h4>Ders : {pdflerim.className}</h4>
                    <p>Anhatar Kelimeler : {pdflerim.keyWords}</p>
                    <p>Juriler : {pdflerim.juriName}</p>
                    <p>Danışan : {pdflerim.danisanName}</p>
                    <p>Dönem : {pdflerim.deliveryDate}</p>
                    <p>Özet : {pdflerim.projectSummary}</p>
                   
               </div>
           ))}

<input className="inputtext" type="text" name="" id="" onChange={onChangeHandle1}/> Ders İsmi
           <input className="inputtext" type="text" name="" id="" onChange={onChangeHandle2}/> Proje Adı
           <input className="inputtext" type="text" name="" id="" onChange={onChangeHandle3}/> Anahtar Kelime
           <input className="inputtext" type="text" name="" id="" onChange={onChangeHandle4}/> Dönem

           {dataState && dataState.map((pdflerim) => (
               <div className="pdf-box" key={pdflerim.pdfId} >
                   <h3>Proje Başlığı : {pdflerim.projectTopic}</h3>
                   <h4>Ders : {pdflerim.className}</h4>
                    <p>Anhatar Kelimeler : {pdflerim.keyWords}</p>
                    <p>Juriler : {pdflerim.juriName}</p>
                    <p>Danışan : {pdflerim.danisanName}</p>
                    <p>Dönem : {pdflerim.deliveryDate}</p>
                    <p>Özet : {pdflerim.projectSummary}</p>
                   
               </div>
           ))}

<form onSubmit={handleSubmit} className="auth-form">
        <h2>Login </h2>
        <label>
          <span>email:</span>
          <input
            required
            type="username"
            onChange={(e) => setUserNameState(e.target.value)}
            value={usernameState} />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPasswordState(e.target.value)}
            value={passwordState} />
        </label>
        <label>{passSavedState}</label>
        {!isPending && <button className="btn">Sign up</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <div className="error">{error}</div>}
      </form>
        </div>

    )
}
