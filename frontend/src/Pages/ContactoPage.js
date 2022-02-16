import { useState } from 'react';
import axios from 'axios';


import '../Styles/Components/Pages/ContactoPage.css'

const ContactoPage=(props)=>{


  const initialForm={
    nombre:'',
    email:'',
    telefono:'',
    mensaje:''
  }
  const [sending,setSending]=useState(false);
  const [msg,setMsg]=useState('');
  const [formData,setFormData]=useState(initialForm);
  const handleChange=e=>{
    const {name,value} =e.target;
    setFormData(oldData=>({
     ...oldData,
      [name]:value //Forma dinamica
    }));
  }

  const handleSubmit= async e =>{
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`,formData);
    setSending(false);
    setMsg(response.data.message);
    if(response.data.error ===false){
      setFormData(initialForm)
    }
  }


    return(
<div>
  <h1>CONTACTO</h1>
    <div className="CONTACTO1">
      <div className="CONTACTO2">
        <p>FORMULARIO DE CONTACTO</p>
          <form action="/contacto" class="formulario" onSubmit={handleSubmit}>
          <p>
            <label for="">Nombre</label>
            <input type="text" name='nombre' value={formData.nombre} onChange={handleChange}/>
          </p>
          <p>
            <label for="">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange}/>
          </p>
          <p>
            <label for="">Telefono</label>
            <input type="text" name='telefono' value={formData.telefono} onChange={handleChange}/>
          </p>
          <p>
            <label for="">Comentario</label>
            <textarea cols="30" rows="10" name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
            <p className="acciones"><input type="submit" value="Enviar"/></p>
          </form>

          {sending ? <p>Enviando...</p> : null}
          {msg ? <p>{msg}</p> : null}


      </div>
      <div className="CONTACTO3">
        <p>OTROS MEDIOS DE CONTACTO</p>
        <p>Puede comunicarse con nosotros, a través de:</p>
        <ul>
          <a href=' https://wa.me/1157588779'><li>Whastapp</li></a>
          <a href="mailto:jaltamirano@efectum.com?Subject=Consulta Efectum"><li>Email</li></a>
          <a href="https://www.linkedin.com/in/efectum-proyectos-y-energ%C3%ADa-66bb571a0/"><li>Linkedin</li></a>
            </ul>
      </div>
    </div>  
</div>
        );
    }
    export default ContactoPage;