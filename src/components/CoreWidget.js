/** Do not rename this file **/
import React from 'react';

import { compliments } from './complimentList';

export default class complimentsWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'compliments';
  static widgetName = 'Compliments';
  static sizes = [[2, 1]];

  componentWillMount() {
    this.getComp();
  }

  getComp() {
    const index = Math.floor(Math.random() * compliments.length);

    this.props.settings.set('compliment', compliments[index]);
  }

  render() {
    return (
      <div className="uk-container uk-text-center uk-margin-top">
        <h2 className="uk-h2">
          {
            this.props.settings.get('compliment', 'You\'re so awesome you broke this widget!!!!')
          }
        </h2>
      </div>
    );
  }
}
