// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)

  const filteredCourseViews = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )

  console.log(filteredCourseViews)

  const filteredProjectViews = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )

  console.log(filteredProjectViews)

  return (
    <div className="chrono-container" style={{width: '800px', height: '950px'}}>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {filteredCourseViews.map(eachCourseTimelineObj => (
          <div>
            <CourseTimelineCard
              courseTimelineDetails={eachCourseTimelineObj}
              key={eachCourseTimelineObj.id}
            />
          </div>
        ))}

        {filteredProjectViews.map(eachProjectTimelineObj => (
          <div>
            <ProjectTimelineCard
              projectTimelineDetails={eachProjectTimelineObj}
              key={eachProjectTimelineObj.id}
            />
          </div>
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
