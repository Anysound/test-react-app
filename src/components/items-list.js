import React from 'react';
import Feed from './Feed';
import FeedPink from './Feed--pink';
import FeedDisabled from './Feed--disabled';

function ItemsList() {
  return (
    <div className="feeds__wrapper">
      <Feed />
      <FeedPink/>
      <FeedDisabled/>
    </div>
  )
}

export default ItemsList;
