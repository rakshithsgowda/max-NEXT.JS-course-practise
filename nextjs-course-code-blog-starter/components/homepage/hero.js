import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/site-profile.jpg'
          alt='An image showing max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Raksh</h1>
      <p>
        I blog about the web development - especially frontend frameworks like
        angular or react ....
      </p>
    </section>
  )
}

export default Hero
