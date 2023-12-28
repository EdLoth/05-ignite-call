import { ComponentProps } from 'react'

import { styled } from '../styles'

export const Tooltip = styled('div', {
  zIndex: 100,

  width: 'fit-content',
  position: 'relative',
  padding: '$3 $4',

  color: '$gray100',
  borderRadius: '$xs',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$medium',
  fontFamily: '$default',
  backgroundColor: '$gray900',

  '&::after': {
    content: `''`,
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: -8,

    border: '8px solid transparent',
    borderTopColor: '$gray900',
  },
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Tooltip'
