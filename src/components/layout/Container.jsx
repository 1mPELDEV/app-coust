import { Outlet } from 'react-router-dom';
import styles from './Container.module.css';

function Container({customClass}) {
  return (
    <main className={`${styles.container} ${styles[customClass]}`}>
      <Outlet />
    </main>
  );
}

export default Container;