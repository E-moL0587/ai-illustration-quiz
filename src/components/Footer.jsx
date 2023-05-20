import Image from 'next/image'
import styles from './Footer.module.css'

export  function Footer() {
  return (
    <div className={styles.videoContainer}>
    <video autoPlay loop muted className={styles.backgroundVideo}>
      <source src="/image/back.mp4" type="video/mp4" />
    </video>
    

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
