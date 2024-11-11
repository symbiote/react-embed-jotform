import type { Meta, StoryObj } from '@storybook/react';
import { JotForm } from './JotForm';

const meta: Meta<typeof JotForm> = {
  title: 'Components/JotForm',
  component: JotForm,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof JotForm>;

export const Default: Story = {
  args: {
    formId: '242938485732872', // example form
    className: 'custom-form',
    style: {
      width: '500px',
    },
  },
};
