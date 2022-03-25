import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {useState} from 'react';

const AnyReactComponent = ({ text }) => <div style={{color:'blue' ,fontSize:'15px'}}><FaMapMarkerAlt/></div>;
const AnyReactComponentTwo = ({ text }) => <div style={{color:'red' ,fontSize:'15px'}}><FaMapMarkerAlt/></div>;

export default function SimpleMap({id,data}) {
    const [minute, setMinute] = useState(null);
    const[son,setSon]=useState(null);
    const[aracbir,setAracbir]=useState(true);
    const[araciki,setAraciki]=useState(true);
    const[moment,setMoment]=useState('11:30');
    const zoom = 8
    const center= {
      lat: 59.30,
      lng: 18
    }
    
    
    
    return (
     
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' ,margin:'auto',marginTop:'50px',border:'1px solid rgba(0,0,0,0.5)'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBKK0owJbaauVhMJbWKBm5fkLO0CP4XWAA" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {
            
            data && data.map((item) =>{
             
              if(id==1){
                const tarih = item.date.split(' ')
                if(tarih[1]>moment){
                  setMoment(tarih[1]);
                }
                if(item.aracId==5 && aracbir){
                  if((son!=null && son.length!=0) || (minute!=null && minute.length!=0) ){
                      if(minute!=null && (son==null|| son.length==0)  && tarih[1]>minute){
                        return(
                          <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/> )
                      }
                      else if(son!=null && (minute==null ||minute.length==0) && minute.length==0 && tarih[1]<son){
                        return(
                          <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                      }
                      else{
                        if(tarih[1]>minute && tarih[1]<son){
                          return(
                            <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                        }
                      }

                  }
                  else{
                    return(
                      <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                  }
                  
                }
                if(item.aracId==3 && araciki){
                  if((son!=null && son.length!=0) || (minute!=null &&minute.length!=0)){
                    if(minute!=null && (son==null|| son.length==0)  && tarih[1]>minute){
                      return(
                        <AnyReactComponentTwo  lat={item.lat} lng={item.long} text="My Marker2"/>)
                    }
                    if(son!=null && (minute==null ||minute.length==0) && tarih[1]<son){
                      return(
                        <AnyReactComponentTwo  lat={item.lat} lng={item.long} text="My Marker2"/>)
                    }
                    else{
                      if(tarih[1]>minute && tarih[1]<son){
                        return(
                          <AnyReactComponentTwo  lat={item.lat} lng={item.long} text="My Marker2"/>)
                      }
                    }

                }
                else{
                  return(<AnyReactComponentTwo lat={item.lat} lng={item.long} text="My Marker2"/>)
                }

                  
                }
              }
              if(id==3){
                const tarih = item.date.split(' ')
                if(tarih[1]>moment){
                  setMoment(tarih[1]);
                }
                if(item.aracId==1 && aracbir){
                  if((son!=null && son.length!=0) || (minute!=null && minute.length!=0) ){
                      if(minute!=null && (son==null|| son.length==0)  && tarih[1]>minute){
                        return(
                          <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                      }
                      else if(son!=null && (minute==null ||minute.length==0) && minute.length==0 && tarih[1]<son){
                        return(
                          <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                      }
                      else{
                        if(tarih[1]>minute && tarih[1]<son){
                          return(
                            <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                        }
                      }

                  }
                  else{
                    return(
                      <AnyReactComponent  lat={item.lat} lng={item.long} text="My Marker"/>)
                  }
                  
                }
                if(item.aracId==2 && araciki){
                  if((son!=null && son.length!=0) || (minute!=null &&minute.length!=0)){
                    if(minute!=null && (son==null|| son.length==0)  && tarih[1]>minute){
                      return(
                        <AnyReactComponentTwo  lat={item.lat} lng={item.long} text="My Marker2"/>)
                    }
                    if(son!=null && (minute==null ||minute.length==0) && tarih[1]<son){
                      return(
                        <AnyReactComponentTwo  lat={item.lat} lng={item.long} text="My Marker2"/>)
                    }
                    else{
                      if(tarih[1]>minute && tarih[1]<son){
                        return(
                          <AnyReactComponentTwo  lat={item.lat} lng={item.long} text="My Marker2"/>)
                      }
                    }

                }
                else{
                  return(<AnyReactComponentTwo lat={item.lat} lng={item.long} text="My Marker2"/>)
                }

                  
                }
              }
             

            })
          }
          
        </GoogleMapReact>
        <div>
          <input type="text" onChange={(e) => setMinute(e.target.value)}></input>
          <span>Başlangıç Saati  ---</span>
          <span> Bitiş Saati</span>
          <input type="text" onChange={(e) => setSon(e.target.value)}></input>
          <p>{moment} son verinin saati</p>
        </div>
          <div>
            <button style={{marginBottom:'5px'}} onClick={() => setAracbir(!aracbir)} >Araç 1'i Gizle</button>
            <button onClick={() => setAraciki(!araciki)}>Araç 2'i Gizle</button>
          </div>
       </div>
    )
  }


