import { format, formatDistanceToNow } from 'date-fns';
import enGB from 'date-fns/locale/en-GB';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, publishedAt}) {
  const publishDateFormatted = format(publishedAt, "d'th' LLLL 'at' HH:mm'h'", {
    locale: enGB,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enGB,
    addSuffix: true,
  })
 
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
        {author.content}
      </div> 

      <form className={styles.commentForm}>
        <strong>Your feedback</strong>

        <textarea
          placeholder="Your comment"
        />

        <footer>
          <button type="submit">Publication</button>
        </footer>
      </form>

      <dic className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </dic>
    </article>
  );
}