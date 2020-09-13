import React from 'react';

export default class FeedPink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseLeaved: false,
      mouseClicked: false
    }
  }

  toggleLeaved() {
    this.setState({mouseLeaved: !this.state.mouseLeaved})
  }

  toggleClicked() {
    this.setState({mouseClicked: !this.state.mouseClicked})
  }

  render() {
    let classes = ["card", "card--pink"];

    if (this.state.mouseLeaved) {
      classes.push("card--mouseleaved");
    }

    if (this.state.mouseClicked) {
      classes.push("card--checked")
    }

    return (
      <div className="feed">
        <div className={classes.join(' ')} onMouseLeave={this.toggleLeaved.bind(this)} onClick={this.toggleClicked.bind(this)}>
          <p className="card__preview">Сказочное заморское яство</p>
          <h2 className="card__title">Нямушка <p className="card__title card__title--small">с рыбой</p> </h2>
          <p className="card__features">40 порций <br/>две мыши в подарок</p>
          <p className="card__added-in-basket">Добавлено в корзину!</p>
          <div className="card__amount quantity">
            <p className="quantity__count">2</p>
            <p className="quantity__unit">кг</p>
          </div>
        </div>
        <p className="feed__subtitle">Головы щучьи с чесноком да свежайшая сёмгушка.</p>
    </div>
    )
  }
}


