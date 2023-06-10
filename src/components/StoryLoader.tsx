import ContentLoader from 'react-content-loader'

export const StoryLoader = () => (
  <ContentLoader
    speed={1}
    width={400}
    height={38}
    viewBox='0 0 400 38'
    backgroundColor='#f6f6ef'
    foregroundColor='#e8e8e3'
  >
    <rect x='9' y='4' rx='0' ry='0' width='380' height='18' />
    <rect x='18' y='14' rx='0' ry='0' width='303' height='6' />
    <rect x='11' y='33' rx='0' ry='0' width='108' height='13' />
    <rect x='129' y='33' rx='0' ry='0' width='60' height='13' />
    <rect x='196' y='33' rx='0' ry='0' width='60' height='13' />
  </ContentLoader>
)

StoryLoader.metadata = {
  name: 'Justin Irabor',
  github: 'vunderkind',
  description: 'A loading skeleton for your HackerNews clone.',
  filename: 'HackerNewsLoader'
}
