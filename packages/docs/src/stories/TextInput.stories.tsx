import { StoryObj, Meta } from "@storybook/react";
import { Box, TextInput, TextInputProps, Text } from "@ignite-ui/react";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Enter your email",
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
    placeholder: "username",
  },
};
