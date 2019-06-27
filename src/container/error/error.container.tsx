import ErrorComponent from 'components/error';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import {
  AppState,
  errorActions,
  errorReducerActions,
  ErrorResponse,
} from 'store';

export interface ErrorProps {
  onError: boolean;
  code: number;
  message: string;
  name: string;
}

export interface ErrorMethod {
  setError: (payload: ErrorResponse) => void;
  resetError: () => void;
}

const mapStateToProps = ({ error }: AppState) => ({
  onError: error.onError,
  code: error.code,
  message: error.message,
  name: error.name,
});

const mapDispatchToProps = (dispatch: Dispatch<errorReducerActions>) => ({
  setError: bindActionCreators(errorActions.setError, dispatch),
  resetError: bindActionCreators(errorActions.resetError, dispatch),
});

const ErrorContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ErrorComponent),
);

export default ErrorContainer;