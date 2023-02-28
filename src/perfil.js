export {Perfil, Bio, LinkLinKedin};

function Perfil(props) {

    const tituloPagina = <h1>Olá! Agora irei apresentar a minha biografia para vocês:<br />{props.meuNome}!</h1>;
    const minhaTagFoto = <img src={props.imgperfil} className="inline_img"></img>;
  
    const perfilContent = (
      <div>
        <div className="nome">
          {tituloPagina}
        </div>
        <div>
          {minhaTagFoto}
        </div>
      </div>);
  
    return perfilContent;
}

function Bio() {
    const minibio = <div className="minibio">
      <h3>Adriela Kari, especialista em inovação,
      há 2 anos vem transformando suas ideias em comportamentos extraordinários
      de fácil utilizacão e linguagem acessível.<br /><br />
      Tem na diversidade a sua maior bandeira e por isso que durante toda sua jornada
      sempre fez questão de compartilhar seus aprendizados fazendo com que papai e mamãe fiquem 
      felizes ao ver o seu desenvolvimento corporal com suas descobertas.</h3>
    </div>;
    return minibio;
}

function LinkLinKedin() {
    return (
      <div className="linkedin">
        <a href='https://google.com' target='_blank'>Linkedin</a>
      </div>);
}
