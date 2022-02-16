import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../Components/novedades/NovedadItem';


import '../Styles/Components/Pages/NovedadesPage.css'



const NovedadesPage=(props)=>{
        const[loading,setLoading]=useState(false);
        const[novedades,setNovedades]=useState([]);

        useEffect(()=>{
                const cargarNovedades=async()=>{
                        setLoading(true);
                        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
                        setNovedades(response.data);
                        setLoading(false);  
                };

                cargarNovedades();
        }, []);


    return(
<div>
<h1>NOVEDADES</h1>

<div className='ContenedorNovedades'>
        {loading ? (
                <p>Cargando...</p>
        ):(
                novedades.map(item=>
                <NovedadItem key ={item.id}
                        title={item.titulo} 
                        subtitle={item.subtitulo}
                        imagen={item.imagen} 
                        body={item.cuerpo}/>)
        )}
 </div>
 </div>
        );
    }
    export default NovedadesPage;