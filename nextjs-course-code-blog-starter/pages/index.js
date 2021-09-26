import FeaturedPosts from '../components/homepage/featured-posts'
import Hero from '../components/homepage/hero'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
