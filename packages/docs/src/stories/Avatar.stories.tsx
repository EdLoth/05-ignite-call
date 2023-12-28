import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps, Box } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/brunobecoski.png',
    alt: 'Bruno Becoski',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
