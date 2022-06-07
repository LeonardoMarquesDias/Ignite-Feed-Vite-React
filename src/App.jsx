import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Siderbar";
import { Post } from './Post';

import styles from "./App.module.css";

import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
