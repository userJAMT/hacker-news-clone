import useSWR from 'swr'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStories () {
  const { data, isLoading } = useSWR('stories', () => getTopStories(1, 10))

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {isLoading && <li>Loading...</li>}
        {data?.map((id: number, index: number) => (
          <li
            key={id} style={{
              display: 'flex',
              marginBottom: '8px',
              padding: '5px 10px'
            }}
          >
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
    </>
  )
}
