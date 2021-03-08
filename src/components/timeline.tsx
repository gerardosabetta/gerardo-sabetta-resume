/** @jsx jsx */
import { jsx, Styled, Text, Box } from "theme-ui"
import Content from "../elements/content"
import Inner from "../elements/inner"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

const mockedExperiences = [
  {
    period: "March 2020 - June 2020",
    company: "Globant",
    position: "Web UI developer",
    description: `TBD`,
    color: "blue",
  },
  {
    period: "March 2020 - June 2020",
    company: "Endava",
    position: "Web UI developer",
    description: `TBD`,
    color: "red",
  },
  {
    period: "March 2020 - June 2020",
    company: "Endaeva",
    position: "Web UI developer",
    description: `TBD`,
    color: "orange",
  },
]

const Timeline = () => {
  return (
    <Content className="timeline">
      <Inner>
        <Styled.h2 sx={{ marginBottom: "1rem" }}>
          Work experience timeline
        </Styled.h2>
        <VerticalTimeline animate={false}>
          {mockedExperiences.map(experience => (
            <VerticalTimelineElement
              key={experience.company}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              date={
                <Box
                  sx={{
                    color: [
                      "darkText",
                      "darkText",
                      "darkText",
                      "darkText",
                      "text",
                    ],
                  }}
                >
                  {experience.period}
                </Box>
              }
            >
              <Text sx={{ marginBottom: "1rem" }}>
                <Styled.h3
                  sx={{
                    color: "darkText",
                  }}
                >
                  {experience.company} - {experience.position}
                </Styled.h3>
                <Styled.p
                  sx={{
                    color: "darkText",
                  }}
                >
                  {experience.description}
                </Styled.p>
              </Text>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Inner>
    </Content>
  )
}

export default Timeline
