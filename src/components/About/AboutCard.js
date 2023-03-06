//card que descreve quem sou eu
import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, meu nome é<span className="purple"> Rudieri </span>
            e sou uma pessoa muito curiosa<span className="purple"> e em constante evolução.</span>
            <br />Gosto de estar sempre aprendendo coisas novas e aprimorando minhas habilidades, principalmente em programação front-end. 
            <br />
            <br />
            Essa área é uma paixão para mim, pois adoro criar interfaces e experiências únicas para os usuários.Gosto de me manter atualizado sobre as tecnologias mais recentes, como HTML, CSS, JavaScript, React e Angular, para poder desenvolver soluções criativas e inovadoras.
          </p>
         

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
