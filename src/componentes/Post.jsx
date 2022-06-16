import { useState} from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import enGB from 'date-fns/locale/en-GB';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([
    1,
    2,
  ])

  const publishDateFormatted = format(publishedAt, "d'th' LLLL 'at' HH:mm'h'", {
    locale: enGB,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enGB,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault() 

    setComments([...comments, comments.length + 1]);
  }
 
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          
          <Avatar src={author.avatarUrl} />
        
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>;
          }
        })}
      </div> 

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Your feedback</strong>

        <textarea
          placeholder="Your comment"
        />

        <footer>
          <button type="submit">Publication</button>
        </footer>
      </form>

      <dic className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </dic>
    </article>
  );
}