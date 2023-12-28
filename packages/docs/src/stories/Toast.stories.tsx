import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    onClose: () => {},
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
