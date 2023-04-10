// Write your code here
import './index.css'

const MatchCard = props => {
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
    <div className="MatchCard">
      <img
        alt={`competing team ${competingTeam}`}
        className="competingTeamLogo"
        src={competingTeamLogo}
      />
      <p className="competingTeam">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`matchStatus ${matchStatus === 'Won' ? 'green' : 'red'}`}>
        {matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
