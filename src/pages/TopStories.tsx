import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStories () {
  const { data, isLoading, size, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 5)
    }
  )

  const stories = data?.flat()

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {isLoading && <li>Loading...</li>}
        {stories?.map((id: number, index: number) => (
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

      <button onClick={() => { setSize(size + 1) }}>
        Load more
      </button>
    </>
  )
}
