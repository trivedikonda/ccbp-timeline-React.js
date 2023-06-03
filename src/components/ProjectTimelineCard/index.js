// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectTimelineDetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectTimelineDetails

  return (
    <div>
      <img width="100%" src={imageUrl} alt="project" />
      <div className="heading-and-duration">
        <h1>{projectTitle}</h1>
        <div className="react-icon-and-duration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a className="link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
