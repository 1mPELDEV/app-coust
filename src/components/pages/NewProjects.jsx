import ProjectForm from "../project/ProjectForm";

function NewProjects() {
  return (
    <div>
    <h1>NewProjects</h1>
    <p>Formulário para criação de projetos</p>
    <ProjectForm btnText="Criar Projeto"/>
    </div>

  );
}

export default NewProjects;