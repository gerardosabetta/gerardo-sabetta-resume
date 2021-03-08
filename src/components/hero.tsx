/** @jsx jsx */
import { jsx } from "theme-ui"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import Intro from "../sections/intro.mdx"
import { UpDown, UpDownWide } from "../styles/animations"
import Nav from "./nav"

const Hero = () => (
  <header>
    <UpDown>
      <SVG
        icon="react"
        hiddenMobile
        width={48}
        color="icon_blue"
        left="10%"
        top="20%"
      />
      <SVG
        icon="node"
        width={48}
        color="icon_red"
        left="60%"
        top="70%"
        hiddenMobile
      />
      <SVG icon="box" width={6} color="icon_green" left="60%" top="15%" />
    </UpDown>
    <UpDownWide>
      <SVG
        icon="arrowUp"
        hiddenMobile
        width={16}
        color="icon_blue"
        left="80%"
        top="10%"
      />
      <SVG
        icon="react"
        width={12}
        color="icon_brightest"
        left="90%"
        hiddenMobile
        top="50%"
      />
      <SVG
        icon="vue"
        stroke
        width={16}
        color="icon_green"
        left="70%"
        top="70%"
      />
      <SVG icon="react" width={16} color="icon_darkest" left="30%" top="65%" />
      <SVG icon="cross" width={16} color="icon_pink" left="28%" top="15%" />
      <SVG
        icon="vue"
        stroke
        width={6}
        color="icon_darkest"
        left="75%"
        top="10%"
      />
      <SVG
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_darkest"
        left="45%"
        top="10%"
      />
    </UpDownWide>
    <SVG
      icon="vue"
      hiddenMobile
      width={24}
      color="icon_green"
      left="5%"
      top="70%"
    />
    <SVG icon="vue" stroke width={6} color="icon_green" left="4%" top="20%" />
    <SVG
      icon="vue"
      stroke
      width={12}
      color="icon_darkest"
      left="50%"
      top="60%"
    />
    <SVG
      icon="upDown"
      width={8}
      color="icon_darkest"
      hiddenMobile
      left="85%"
      top="90%"
    />
    <SVG
      icon="upDown"
      hiddenMobile
      width={24}
      color="icon_green"
      left="40%"
      top="80%"
    />
    <Content sx={{ height: "100vh", variant: `texts.bigger` }}>
      <Inner>
        <SVG icon="react" width={8} color="icon_green" left="25%" top="5%" />
        <SVG
          icon="box"
          hiddenMobile
          width={34}
          color="icon_purple"
          left="5%"
          top="60%"
        />
        <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
        <SVG
          icon="node"
          width={16}
          color="icon_green"
          hiddenMobile
          left="70%"
          top="50%"
        />
        <SVG icon="node" width={8} color="icon_green" left="80%" top="70%" />
        <div css={{ position: "relative", zIndex: 10 }}>
          <Intro />
        </div>
      </Inner>
    </Content>
  </header>
)

export default Hero
