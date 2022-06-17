import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css'

export function Comment({ content, OnDeleteComment }) {

  function handleDeleteComment() {
    OnDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/LeonardoMarquesDias.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo <span>.</span></strong>
              <time title="04 de Junho de 2022 às 22:00" dateTime="2022-06-04T22:00:00">1 hour ago</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}