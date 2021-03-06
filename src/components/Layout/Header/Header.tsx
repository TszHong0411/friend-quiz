import {
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  Paper,
  Transition,
} from '@mantine/core'
import { useBooleanToggle, useScrollLock } from '@mantine/hooks'
import { useRouter } from 'next/router'
import React from 'react'

import { useStyles } from '@/components/Layout/Header/Header.styles'
import HeaderLogo from '@/components/Layout/Header/HeaderLogo'
import LanguageSwitch from '@/components/Layout/Header/LanguageSwitch'
import { links } from '@/components/Layout/Header/links'
import ThemeSwitch from '@/components/Layout/Header/ThemeSwitch'

export const HEADER_HEIGHT = 56

export default function Header() {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [scrollLocked, setScrollLocked] = useScrollLock()
  const { classes, cx } = useStyles()
  const router = useRouter()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: router.asPath === link.link,
      })}
    >
      {link.label}
    </a>
  ))

  return (
    <>
      <MantineHeader height={HEADER_HEIGHT} sx={{ position: 'relative' }}>
        <Container className={classes.inner}>
          <Burger
            opened={opened}
            onClick={() => {
              toggleOpened()
              setScrollLocked(!scrollLocked)
            }}
            size='sm'
            className={classes.burger}
          />
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <HeaderLogo />

          <Group spacing={8} className={classes.social} position='right' noWrap>
            <LanguageSwitch />
            <ThemeSwitch />
          </Group>
        </Container>
      </MantineHeader>
      <Transition transition='slide-right' duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            {items}
          </Paper>
        )}
      </Transition>
    </>
  )
}
