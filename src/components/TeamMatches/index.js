// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

// 'https://apis.ccbp.in/ipl/:id'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
  }

  componentDidMount() {
    console.log('entered into ComponentDidMount.........................')
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    console.log('entered into getTeamMatches.........................')
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    console.log(response.status, '***************************************')

    const latestMatchDetails = data.latest_match_details
    const convertedLatestMatchDetails = this.getConvertedMatchDetails(
      latestMatchDetails,
    )

    const recentMatches = data.recent_matches
    const convertedRecentMatches = recentMatches.map(eachData =>
      this.getConvertedMatchDetails(eachData),
    )

    this.setState({
      isLoading: false,
      latestMatchDetails: convertedLatestMatchDetails,
      recentMatches: convertedRecentMatches,
      teamBannerUrl: data.team_banner_url,
    })
  }

  getConvertedMatchDetails = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  render() {
    console.log('entered into Render.........................')
    const {
      isLoading,
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
    } = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" width={80} height={80} />
          </div>
        ) : (
          <div className="TeamMatches">
            <img alt="team banner" className="teamBanner" src={teamBannerUrl} />
            <p className="latestMatchesPara">Latest Matches</p>
            <LatestMatch
              key={latestMatchDetails.id}
              details={latestMatchDetails}
            />
            <ul className="ul_matchCard_container">
              {recentMatches.map(item => (
                <MatchCard key={item.id} details={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
