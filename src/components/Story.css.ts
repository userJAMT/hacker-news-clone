import { style } from '@vanilla-extract/css'

export const story = style({
  color: '#374151'
})

export const storyHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '2px',
  lineHeight: '18px'
})

export const storyFooter = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  lineHeight: '12px',
  fontSize: '12px'
})

export const storyLink = style({
  color: '#888',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const storyTitle = style({
  textDecoration: 'none',
  color: '#111',
  fontSize: '18px'
})

export const number = style({
  width: '2%'
})
