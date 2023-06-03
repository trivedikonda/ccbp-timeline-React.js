// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineDetails
  return (
    <div>
      <div className="heading-and-duration">
        <h1>{courseTitle}</h1>
        <div className="react-icon-and-duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tags-list">
        {tagsList.map(eachTag => (
          <p className="tag-name" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
