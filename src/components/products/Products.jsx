import "./products.css";
import productIcon1 from "../icons/productIcon1.svg"
import project1Name from "../icons/project1Name.svg"

function CarouselDemo() {
  return (
    <div className="container">
      <div className="carousel-blog">
      <h1>Our products</h1>
      <div className="carousel-box">
      <div className="info-blog">
      <div className="product-info">
      <h4>
        Build nor highlights indicators way feltworks. Sorry back harvest
        reinvent illustration. Hiring diligence shift low view decisions race
        impact latest. Anomalies focus picture let long got.
      </h4>
      <button className="learn-more">Learn More</button>
      </div>
      </div>
      <div className="product-imgBox">
         <div className="blog-item">
         <img src={productIcon1} alt="" />
         <img src={project1Name} alt="" />
         </div>
      </div>
      </div>
      </div>

    </div>
  );
}

export default CarouselDemo;
