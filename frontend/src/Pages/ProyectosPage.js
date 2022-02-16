import '../Styles/Components/Pages/ProyectosPage.css'

const ProyectosPage=(props)=>{
    return(
<div>
<h1>PROYECTOS</h1>
        <div className="CONTENEDORSERVICIOS1">
            <div className="CONTENEDORSERVICIOS2">
                <h4>SIERRA DE MADERA</h4>
                <p>El trabajo consistió en la digitalización de una cortadora eléctrica de madera, relevamiento de medidas y diseño de planos de fabricación necesarios para su construcción.</p>
                <p>Además se realizó la parametrización de la máquina mediante un software 3D.</p>
            </div>
            <div className="CONTENEDORSERVICIOS3">
                 <img src="imagenes/proyectos/1.JPG" alt=""/>
            </div>
        </div>

        <div className="CONTENEDORSERVICIOS1">
            <div className="CONTENEDORSERVICIOS2">
                <h4>SANDCUBE</h4>
                <p>El desarrollo consistió en el diseño, cálculo, y seguimiento de fabricación de una estructura metálica para el uso en la industria petrolera.
                    La misma cuenta con una cinta transportadora para transportar arena utilizada para el proceso de extracción de petróleo (fracking).</p>
                <p>La contratación contempló desde la parametrización de la estructura, los cálculos dimensionales, simulación por elementos finitos, elaboración de planos de fabricación (con su consecuente seguimiento en el proceso de fabricación) y elaboración de memorias de cálculo e informes técnicos asociados.</p>
            </div>
            <div className="CONTENEDORSERVICIOS3">
                 <img src="imagenes/proyectos/2.jpeg" alt=""/>
            </div>
        </div>

</div>
        );
    }
    export default ProyectosPage;