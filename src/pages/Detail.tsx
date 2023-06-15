import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { ListOfComments } from '../components/ListOfComments'
import { useEffect } from 'react'

export default function Detail (props: {
  params: {
    id: string
  }
}) {
  const { params: { id } } = props
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(Number(id)))
  const { title, kids }: { title: string, kids: number[] } = data
  const commentIds = kids?.slice(0, 10) ?? []

  useEffect(() => {
    document.title = `Hacker News Clone - ${title}`
  }, [title])

  return (
    <div>
      {
        !isLoading && <ListOfComments ids={commentIds} />
      }
    </div>
  )
}
