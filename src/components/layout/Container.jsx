import { Outlet } from 'react-router-dom';
import style from './Container.module.css';

function Container() {
  return (
    <main className={style.container}>
      <Outlet />
    </main>
  );
}
