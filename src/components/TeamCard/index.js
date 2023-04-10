// Write your code here
// id,teamImageUrl,name,TeamCard
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, teamImageUrl, name} = details

  return (
    <Link to={`/team-matches/${id}`} className="link_compoForListItem">
      <li className="li_container">
        <img alt={name} className="img_teamCard" src={teamImageUrl} />
        <p className="heading_teamCardName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
