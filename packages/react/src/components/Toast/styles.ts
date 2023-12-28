import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  zIndex: 100,

  boxSizing: 'border-box',
  width: 360,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '$3 $5',

  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
  backgroundColor: '$gray800',

  strong: {
    display: 'block',
    marginBottom: '$2',
    fontSize: '$xl',
    color: '$white',
  },

  span: {
    display: 'block',
    fontSize: '$sm',
    color: '$gray200',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifycontent: 'center',
    padding: 0,

    position: 'absolute',
    top: 16,
    right: 16,

    border: 0,
    color: '$gray200',
    cursor: 'pointer',
    width: 20,
    height: 20,
    backgroundColor: 'transparent',

    '&:hover': {
      color: '$white',
    },
  },
})
