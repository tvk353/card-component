import './index.css'

const Card = props => {
  const {cardData} = props
  const {image, title, subtitle, tags, postTime} = cardData

  return (
    <div className="container">
      <div className="card-container">
        <img src={image} className="img" alt=" " />
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        <p className="post-time">{postTime}</p>
        <hr />
        <div className="tags-container">
          <p className="tags">{tags}</p>
          <button className="button" type="button">
            share
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
