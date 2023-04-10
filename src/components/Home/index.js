// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

const iplLogo = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png'

// 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, teamCards: []}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()
    const items = data.teams

    console.log(items, '************Before****************')
    const convertedData = items.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    console.log(convertedData, '************AFTER****************')
    this.setState({isLoading: false, teamCards: convertedData})
  }

  render() {
    const {isLoading, teamCards} = this.state
    return (
      <div className="Home">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" width={80} height={80} />
          </div>
        ) : (
          <div className="content_container_80width">
            <div className="iplLogoAndHeading_container">
              <img alt="ipl logo" className="iplLogo" src={iplLogo} />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="ul_container_teamCards">
              {teamCards.map(card => (
                <TeamCard key={card.id} details={card} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
