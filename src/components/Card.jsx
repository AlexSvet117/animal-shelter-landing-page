import propTypes from 'prop-types'

function Card({src, titleName, text, longText}) {
  return (
    <div className="col-sm-6 col-md-3 m-1">
        <div className="card">
            <img className="card-img-top" src={src} alt="Image" />
            <div className="card-body">
                <h5 className="card-title fw-bolder">{titleName}</h5>
                <p className="card-text fw-semibold">{text}</p>
                <hr></hr>
                <p className="text">{longText}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-primary">Take Home</button>
            </div>
        </div>
    </div>
  )
}

Card.defaultProps = {
    titleName: 'Default',
    text: 'Default',
}

Card.propTypes = {
    titleName: propTypes.string
}

export default Card