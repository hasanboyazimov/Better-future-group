import ProductIcon1 from "../icons/productIcon1.svg"
import ProductIcon2 from "../icons/productIcon2.svg"
import ProductIcon3 from "../icons/productIcon3.svg"
import ProductIcon4 from "../icons/productIcon4.svg"
import Project1Name from "../icons/project1Name.svg"
import Project2Name from "../icons/project2Name.svg"
import './projects.css';


function Projects() {
  return (

    <div className='projectsBlog'>
        <div className='container'>
        <div className="projectCont">
        <h2 className="projectsTitle">Our projects</h2>
        <div className="projectsBox">
        <div className='projectBox'>
            <img className="ProductIcon" src={ProductIcon1} alt="" />
            <img src={Project1Name} alt="" />
            <p className="projectInfo">We help to ignite global change with our accelerator.</p>
            <a href="#">Go to website</a>
        </div>
        <div className='projectBox'>
            <img className="ProductIcon" src={ProductIcon2} alt="" />
            <img src={Project2Name} alt="" />
            <p className="projectInfo">We help to ignite global change with our accelerator.</p>
            <a href="#">Go to website</a>
        </div>
        <div className='projectBox'>
            <img className="ProductIcon growz" src={ProductIcon3} alt="" />
            <p className="projectInfo">We help to ignite global change with our accelerator.</p>
            <a href="#">Go to website</a>
        </div>
        <div className='projectBox'>
            <img className="ProductIcon trator" src={ProductIcon4} alt="" />
            <p className="projectInfo">We help to ignite global change with our accelerator.</p>
            <a href="#">Go to website</a>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;