import React from 'react';
import {connect} from 'react-redux';
import {
  bindActionCreators,
  Dispatch
} from 'redux';

function makeTestComponent<RS,E>() {
  type Props = {entity: E | undefined};
  class TestComponent extends React.Component<Props> {
    render() {
      return null;
    }
  }
  return connect(
    (_state:RS) => ({entity: undefined}),
    (dispatch:Dispatch) => bindActionCreators({}, dispatch)
  )(TestComponent);
}
export const tc = makeTestComponent();
