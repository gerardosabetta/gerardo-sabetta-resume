/** @jsx jsx */
import { jsx } from "theme-ui"

type ContentProps = {
  children: React.ReactNode
  className?: string
}

const Content = ({ children, className = `` }: ContentProps) => (
  <div
    sx={{
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      position: `relative`,
      zIndex: 50,
    }}
    className={className}
  >
    {children}
  </div>
)

export default Content
