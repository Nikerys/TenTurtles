import React from 'react';
import _ from 'underscore';
import PairingListEntry from './pairingListEntry.jsx'

class PairingList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pairings = _.zip(this.props.pairs.finalRecipes, this.props.pairs.finalWines)
    console.log('pairings: ', pairings)
    return (
      <div>
      {
        pairings.map(pair => {
          return <PairingListEntry pair={pair} />
        })
      }
      </div>
    )
  }
}

export default PairingList;