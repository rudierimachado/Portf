import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoComplete from "../../Assets/Projects/api-cepcomplete.png";
import ApiGpt from "../../Assets/Projects/api-gpt.png";
import calculadoraSimples from "../../Assets/Projects/calculadorra-simples.png";
import tabuada from "../../Assets/Projects/tabuada.png";
import miniportf from "../../Assets/Projects/miniportf.jpeg"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projetos <strong className="purple"></strong>
        </h1>
        <p style={{ color: "white" }}>
          Estes sao alguns projetos voltados aos meus estudos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoComplete}
              isBlog={false}
              title="API cep autocomplete"
              description="Api que completa os campos apartir do cep"
              ghLink="https://github.com/rudierimachado/API_Autocomplete"
              demoLink="https://rudierimachado.github.io/API_Autocomplete/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniportf}
              isBlog={false}
              title="desafios"
              description="pagina com desafios comcluidos"
              ghLink="https://github.com/rudierimachado/repositorios-de-desafios"
              demoLink="https://rudierimachado.github.io/repositorios-de-desafios/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ApiGpt}
              isBlog={false}
              title="Api do chat GPT"
              description="Integração com o chat GPT"
              ghLink="https://github.com/rudierimachado/API_openAI"
              demoLink="https://rudierimachado.github.io/API_openAI/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculadoraSimples}
              isBlog={false}
              title="calculadora"
              description="Uma simples calculadora"
              ghLink="https://github.com/rudierimachado/calculadoraSimples"
              demoLink="https://rudierimachado.github.io/calculadoraSimples/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tabuada}
              isBlog={false}
              title="Tabuada"
              description="Ferramenta de uso de tabuada"
              ghLink="https://github.com/rudierimachado/calculadoraSimples"
              demoLink="https://rudierimachado.github.io/Tabuada/"
            />
          </Col>

         

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
