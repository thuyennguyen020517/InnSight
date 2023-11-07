import { all } from 'redux-saga/effects'
import HomeSaga from './home/saga'
import AuthSaga from './auth/saga'
import BookingSaga from './booking/saga'
export default function* rootSaga() {
    yield all([
        HomeSaga(),
        AuthSaga(),
        BookingSaga(),
    ])
}
