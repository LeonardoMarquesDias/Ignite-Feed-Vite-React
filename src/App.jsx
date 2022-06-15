import { Header } from "./componentes/Header";
import { Sidebar } from "./componentes/Siderbar";
import { Post } from './componentes/Post';

import styles from "./App.module.css";

import './global.css';


export function App() {

  const posts = [
    { 
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png', 
        name: 'Diego Fernandes', 
        role:'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Hello Guys',},
        { type: 'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',},
        { type: 'link', content: 'diego.fernandes/frontend'},
      ],
      publishDate: new Date('2022-06-13 15:00:00'),
    },
    { 
      id: 2,
      author: {
        avatarUrl: 'https://github.com/LeonardoMarquesDias.png', 
        name: 'Leonardo Dias', 
        role:'React Developer'
      },
      content: [
        { type: 'paragraph', content: 'Hello Guys',},
        { type: 'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',},
        { type: 'link', content: 'leonardo.dias/frontend'},
      ],
      publishDate: new Date('2022-06-010 15:30:00'),
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishDate={post.publishDate}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
