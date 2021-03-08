/** @jsx jsx */
import {
  jsx,
  useThemeUI,
  Box,
  IconButton,
  Flex,
  Link,
  useColorMode,
} from "theme-ui"
import Inner from "../elements/inner"
import { BiMoon, BiSun } from "react-icons/bi"

const ThemeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode()
  const { theme } = useThemeUI()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <div>
      <IconButton
        sx={{ height: "3rem", width: "3rem", fontSize: "1.5rem" }}
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
      >
        {isDark ? <BiSun /> : <BiMoon />}
      </IconButton>
    </div>
  )
}

export default ThemeSwitch
