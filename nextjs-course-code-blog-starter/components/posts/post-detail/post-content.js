import ReactMarkdown from 'react-markdown'
import Image from 'next/dist/client/image'

import PostHeader from './post-header'
import classes from './post-content.module.css'

export default function PostContent(props) {
  const { post } = props
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      )
    },
  }

  return (
    <div className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
      Content
    </div>
  )
}
