import { createStyles } from '@mantine/core'

export const useStyles = createStyles(
  (theme, { opened }: { opened: boolean }) => ({
    control: {
      width: 60,
      height: 34,
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[3]
            : theme.colors.gray[0],
      },
    },

    label: {
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
    },

    icon: {
      transition: 'transform 150ms ease',
      transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    },
  })
)
