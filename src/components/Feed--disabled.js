import React from 'react';

export default class FeedDisabled extends React.Component {
  render() {
    let classes = ["card", "card--disabled"]
    return (
      <div className="feed">
        <div className={classes.join(' ')}>
          <p className="card__preview">Сказочное заморское яство</p>
          <h2 className="card__title">Нямушка <p className="card__title card__title--small">с курой</p> </h2>
          <p className="card__features">100 порций <br/> 5 мышей в подарок <br/> заказчик доволен</p>
          <div className="card__amount quantity">
            <p className="quantity__count">5</p>
            <p className="quantity__unit">кг</p>
          </div>
        </div>
        <p className="feed__subtitle feed__subtitle--yellow">Печалька, с курой закончился.</p>
    </div>
    )
  }
}


