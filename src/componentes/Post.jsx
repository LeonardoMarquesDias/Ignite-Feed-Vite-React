import { useState} from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import enGB from 'date-fns/locale/en-GB';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([
    'Nice Post, woOooOoowwWww!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishDateFormatted = format(publishedAt, "d'th' LLLL 'at' HH:mm'h'", {
    locale: enGB,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enGB,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault() 

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeleteOne);
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div> 

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Your feedback</strong>

        <textarea
          placeholder="Your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publication</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment}
              OnDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}