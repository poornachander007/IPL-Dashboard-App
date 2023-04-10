// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <ul className="LatestMatch">
      <li className="first_container">
        <div className="fist_container_content">
          <p className="competingTeam">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="image_container">
          <img
            alt={`latest match ${competingTeam}`}
            className="logoCompeting"
            src={competingTeamLogo}
          />
        </div>
      </li>
      <hr />
      <li className="second_container">
        <label htmlFor="firstInnings">First Innings</label>
        <p id="firstInnings">{firstInnings}</p>
        <label htmlFor="secondInnings">Second Innings</label>
        <p id="secondInnings">{secondInnings}</p>
        <label htmlFor="manOfTheMatch">Man Of The Match</label>
        <p id="manOfTheMatch">{manOfTheMatch}</p>
        <label htmlFor="umpires">Umpires</label>
        <p id="umpires">{umpires}</p>
      </li>
    </ul>
  )
}

export default LatestMatch
