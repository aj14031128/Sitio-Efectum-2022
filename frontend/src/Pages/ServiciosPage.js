
import '../Styles/Components/Pages/ServiciosPage.css'

const ServiciosPage=(props)=>{
    return(
<div>
<main>
        <h1>SERVICIOS</h1>
        <div className="CONTENEDORSERVICIOS1">
            <div className="CONTENEDORSERVICIOS2">
                <h4>ENERGÍA RENOVABLE</h4>
                <ul>
                <li>Análisis de curva de consumo y facturación.</li>
                <li>Asesoramiento Ley 27.191 de Energias Renovables.</li>
                <li>Diseño de instalaciones fotovoltaicas, solar térmica y sistemas híbridos mediante software de cálculo.</li>
                <li>Instalaciones ON GRID, para generación destinada a autoconsumo, almacenamiento o venta de energía a la red.</li>
                <li>Instalaciones OFF GRID, para generación destinada a autoconsumo, logrando independencia de la red de distribución.</li>
                </ul>
            </div>
            <div className="CONTENEDORSERVICIOS3">
                 <img src="imagenes/servicios/Renovables/alternative-energy-building-clouds-energy-356036.jpg" alt=""/>
            </div>
        </div>
        <div class="CONTENEDORSERVICIOS1">
            <div className="CONTENEDORSERVICIOS2">
                <h4>PROYECTOS ELECTROMECÁNICOS</h4>
                <ul>
                <li>Cálculo, diseño, fabricación y montaje de equipos y estructuras electromecánicas.</li>
                <li>Programación y control de automatismos mediante electrónica aplicada.</li>
                <li>Instalaciones eléctricas, corrección de factor de potencia, eficiencia energética y análisis tarifario.</li>
                <li>Planos constructivos y de fabricación, lista de materiales, memorias de cálculo y documentación técnica.</li>
                <li>Estudios de factibilidad y análisis económico - financiero.</li>
                <li>Instalaciones edilicias (sanitarias, eléctricas y fuerza motriz).</li>
                </ul>
            </div>
            <div className="CONTENEDORSERVICIOS3">
                 <img src="imagenes/servicios/Electromecanicos/electromecanicos.jpg" alt=""/>
            </div>
        </div>
        <div class="CONTENEDORSERVICIOS1">
            <div class="CONTENEDORSERVICIOS2">
                <h4>SIMULACIÓN</h4>
                <ul>
                <li>Simulación por elementos finitos. Puntos críticos, solicitaciones mecánicas, diagrama de tensiones, concentración de tensiones.</li>
                <li>Simulación de instalaciones fotovoltaicas y solar térmica.</li>
                <li>Animaciones, análisis cinemático, evaluación de interferencias.</li>
                <li>Simulación de automatismos neumáticos e hidráulicos.</li>
                <li>Simulación de tensiones de origen térmico y electromagnético.</li>
                <li>Simulación de fluidos.</li>
                </ul>
            </div>
            <div className="CONTENEDORSERVICIOS3">
                 <img src="imagenes/servicios/Simulación/1 (1).jpg" alt=""/>
            </div>
        </div>
    </main>
</div>
        );
    }
    export default ServiciosPage;