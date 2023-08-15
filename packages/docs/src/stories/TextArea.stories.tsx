import { StoryObj, Meta } from "@storybook/react";
import { Box, TextArea, TextAreaProps, Text } from "@ignite-ui/react";

export default {
  title: "Form/TextArea",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations here...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
