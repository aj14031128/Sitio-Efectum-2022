import '../Styles/Components/Pages/NosotrosPage.css'

const NosotrosPage=(props)=>{
    return(
        <main>
        <h1>NOSOTROS</h1>

        <p>EFECTUM es una empresa joven con gran proyección y potencial dedicada a la resolución de problemas del rubro industrial y energético.</p>
        <p>Ofrecemos servicios de consultoría, proyectos llave en mano, asesoramiento técnico a problemáticas puntuales, un área de modelado y simulación computacional.</p>
        <p>Contamos con un grupo interdisciplinario de profesionales que complementa su conocimiento y experiencia para ofrecer soluciones innovadoras que se adapten a las necesidades del cliente.</p> 
        <p>Nuestro compromiso es lograr un resultado a medida, poniendo foco en la eficiencia y la calidad.</p> 
        <p>Creemos que un buen resultado no sólo se mide por la capacidad técnica de las personas que intervienen, lo que es necesario para destacarse es sentir pasión por lo que uno hace y comprometerse con cada proyecto.</p>
        <p>Es por esto que en EFECTUM sentimos pasión por lo que hacemos, nos enorgullece brindar satisfacción y seguridad a través de nuestros trabajos.</p>
    <div className="CONTENEDORNOSOTROS1">
        <div className="CONTENEDORNOSOTROS2">
            <a href="https://www.linkedin.com/in/juan-diego-altamirano-ba1484106/">
            <img src="imagenes/Nosotros/diego.jpg" alt=""/>
            <h2>DIEGO ALTAMIRANO</h2>
            <h3>Ingeniero Mecanico</h3>
            </a>
        </div>
        <div className="CONTENEDORNOSOTROS2">
            <a href="https://www.linkedin.com/in/vitalifede/">
            <img src="imagenes/Nosotros/fede.jpg" alt=""/>
            <h2>FEDERICO VITALI</h2>
            <h3>Ingeniero Mecanico</h3>
            </a>
        </div>
    </div>
    
    </main>
        );
    }
    export default NosotrosPage;