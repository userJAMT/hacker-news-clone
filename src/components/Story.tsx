import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { Link } from 'wouter'
import { storyLink, story, storyFooter, storyHeader, storyTitle, number } from './Story.css'
import { StoryLoader } from './StoryLoader'

export const Story = (props: {
  id: number
  index: number
}) => {
  const { id, index } = props
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <StoryLoader />
  }

  const { by, kids, score, time, title, url } = data
  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {}

  // TODO: create relative time

  return (
    <>
      <small className={number}>{index + 1}.</small>
      <article className={story}>
        <header className={storyHeader}>

          <a
            className={storyTitle}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >{title}
          </a>

          <a
            className={storyLink}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
          >({domain})
          </a>
        </header>

        <footer className={storyFooter}>
          <span>{score} points</span>
          <Link className={storyLink} href={`/article/${id}`}>
            by {by}
          </Link>
          <Link className={storyLink} href={`/article/${id}`}>
            6 hours ago
          </Link>
          <Link className={storyLink} href={`/article/${id}`}>
            {kids?.length ?? 0} comments
          </Link>
        </footer>

      </article>
    </>
  )
}
