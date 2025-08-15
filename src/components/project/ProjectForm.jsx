import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ btnText}) {
    return (
        <form className={styles.form}>
        <Input 
            type="text"
            placeholder="nome do projeto"
             text="nome do projeto" 
        />
            <Input
            type="number"
            placeholder="inisra o valor do projeto" 
            text="valor do projeto" 
        />
              <Select
            name="category_id"
            text="Selecione a categoria"
        />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;
