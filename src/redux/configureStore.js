import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import doctorsReducer from './doctors/doctors';
import appointmentReducer from './appointments/appointments';
import loginReducer from './login/login';
import registerReducer from './register/register';

const rootReducer = combineReducers({
  doctorsReducer,
  appointmentReducer,
  loginReducer,
  registerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
