import { style } from '@vanilla-extract/css'

export const header = style({
  alignItems: 'center',
  borderBottom: '1px solid #eee',
  display: 'flex',
  gap: ' 16px',
  padding: '12px 32px',
  backgroundColor: 'orange'
})

export const link = style({
  color: '#374151',
  fontSize: '18px',
  margin: '0',
  textDecoration: 'none'
})

export const img = style({
  width: '25px',
  height: '25px',
  border: 'white 1px solid'
})
