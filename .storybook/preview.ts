import type { Preview } from "@storybook/react";
import '../src/index.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options:{
      storySort:{
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
