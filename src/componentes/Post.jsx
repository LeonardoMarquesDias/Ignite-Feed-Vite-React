import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          
          <img src="https://github.com/LeonardoMarquesDias.png" alt="" />
        
          <div className={styles.authorInfo}>
            <strong>Lenardo Dias</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado hà 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p><a href="">Leonardo.dias/developer</a></p>
        <p>
          <a href="">#newprojects </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat </a>
        </p>
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
    </article>
  )
}