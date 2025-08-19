//Hooks
import {useState , useEffect} from 'react';
//styles
import styles from './ProjectForm.module.css';
//components
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ btnText}) {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/categories' , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
        setCategories(data)
    })
      .catch((err) => console.log(err))   
    }, []);
    


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
            options={categories}
        />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;
