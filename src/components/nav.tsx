/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Flex, NavLink } from "theme-ui"
import ThemeSwitch from "./theme-switch"

const Nav = () => {
  return (
    <Box
      px={3}
      py={2}
      color="background"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 1000,
      }}
      bg="heading"
    >
      <Flex
        sx={{
          justifyContent: "flex-end",
        }}
        as="nav"
      >
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="/blog" p={2}>
          Blog
        </NavLink>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          This is not ready yet, come visit next week
        </Box>
        <ThemeSwitch />
      </Flex>
    </Box>
  )
}

export default Nav
