import ContentLoader from 'react-content-loader'

export const CommentLoader = () => (
  <ContentLoader
    speed={2}
    width='100%'
    height={200}
    viewBox='0 0 80% 200'
    backgroundColor='#f6f6ef'
    foregroundColor='#e8e8e3'
  >
    <rect x='17' y='1' rx='3' ry='3' width='140' height='11' />
    <rect x='17' y='21' rx='3' ry='3' width='80%' height='53' />
  </ContentLoader>
)
