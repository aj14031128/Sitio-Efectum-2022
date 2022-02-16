import Carousel from 'react-bootstrap/Carousel'

const HomePage=(props)=>{
    return(
<div>
<h1>HOME</h1>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="imagenes/home/1 (1).jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>INNOVACIÓN</h3>
      <p>Conocimiento, experiencia y creatividad combinados para un desarrollo a medida.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="imagenes/home/1 (2).jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>PERSONALIZACIÓN</h3>
      <p>Brindamos la solución adecuada para cada situación, según tus necesidades.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="imagenes/home/1 (3).jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>COMPROMISO</h3>
      <p>Responsabilidad y confianza garantizada en cada proyecto.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        );
    }
    export default HomePage;