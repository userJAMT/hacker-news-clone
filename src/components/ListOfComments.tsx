import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { CommentLoader } from './CommentLoader'

export const Comment = (props: {
  id: number
}) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <CommentLoader />
  }

  const { by, text, time, kids } = data

  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span>.</span>
            <span>4 hours ago</span>
          </small>
        </summary>

        <p>{text}</p>
      </details>

      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  )
}

export const ListOfComments = (props: {
  ids: number[]
}) => {
  const { ids } = props
  return (
    <ul style={{ listStyle: 'none' }}>
      {
        ids?.map((id: number) => (
          <li key={id}>
            <Comment id={id} />
          </li>
        ))
      }
    </ul>
  )
}
