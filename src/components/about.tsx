/** @jsx jsx */
import { jsx } from "theme-ui"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = () => (
  <div sx={{ position: "relative" }}>
    <UpDown>
      <SVG
        icon="box"
        hiddenMobile
        width={6}
        color="icon_blue"
        left="5%"
        top="75%"
      />
      <SVG
        icon="upDown"
        hiddenMobile
        width={8}
        color="icon_darkest"
        left="70%"
        top="20%"
      />
      <SVG
        icon="react"
        width={8}
        stroke
        color="icon_darkest"
        left="25%"
        top="5%"
      />
      <SVG
        icon="upDown"
        hiddenMobile
        width={24}
        color="icon_orange"
        left="80%"
        top="80%"
      />
    </UpDown>
    <UpDownWide>
      <SVG
        icon="arrowUp"
        hiddenMobile
        width={16}
        color="icon_purple"
        left="5%"
        top="80%"
      />
      <SVG
        icon="react"
        width={12}
        stroke
        color="icon_brightest"
        hiddenMobile
        left="75%"
        top="50%"
      />
      <SVG
        icon="vue"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="85%"
        top="15%"
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
      width={6}
      color="icon_brightest"
      left="4%"
      top="20%"
    />
    <SVG icon="vue" width={12} color="icon_darkest" left="70%" top="60%" />
    <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
    <SVG icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
    <SVG
      icon="node"
      width={8}
      stroke
      color="icon_darkest"
      left="80%"
      top="70%"
    />
    <Content>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About
