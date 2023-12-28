import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

import { ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  onClose: () => void
}

export function Toast({ title, description, onClose }: ToastProps) {
  return (
    <ToastContainer>
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <button onClick={onClose} title="Close">
        <X size={20} />
      </button>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
