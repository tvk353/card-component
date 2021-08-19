import Card from './components/Card'

import './App.css'

const cardDataList = [
  {
    image:
      'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/08/24/a0/us-hiking-trails_ss_001.rend.hgtvcom.966.725.suffix/1491580965291.jpeg',
    title: '25 Outstanding Scenic Hikes',
    subtitle:
      'If hiking for you is all about the breathtaking scenery, try these gorgeous day hikes',
    tags: '#dayhikes',
    postTime: '2 hours ago',
  },
]

const App = () => (
  <div className="cards-container">
    {cardDataList.map(eachItem => (
      <Card cardData={eachItem} />
    ))}
  </div>
)

export default App
