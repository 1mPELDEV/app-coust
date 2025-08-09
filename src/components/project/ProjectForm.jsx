import styles from './ProjectForm.module.css';

function ProjectForm(){
    return(
        <form className="newproject_container">
            <div>
                <input type="text" placeholder="insira onome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="insira o valor do projeto" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="criar projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm;