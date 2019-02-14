import {connect} from 'react-redux';
import {
  bindActionCreators,
  Dispatch
} from 'redux';

function makeTestComponent<RS,E>() {
  type Props = {entity: E | undefined};
  const TestComponent = (_props:Props) => null;
  return connect(
    (_state:RS) => ({entity: undefined}),
    (dispatch:Dispatch) => bindActionCreators({}, dispatch)
  )(TestComponent);
}
export const tc = makeTestComponent();
