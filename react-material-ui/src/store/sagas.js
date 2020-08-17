import { put,call, takeLatest , all,fork } from 'redux-saga/effects';
import {getList,getListSuccess,getListError} from './reducers';
import getItemsApi from './api';

function *fetchItems(){
    yield put(getList())
    try{
        console.log('inside try')
        const data = yield call(getItemsApi)
        //console.log(data)
        yield put(getListSuccess(data))
    }catch(err){
        if(err){
            yield put(getListError())
        }
    }
}
function *helloSaga(){
    console.log('In root Saga of Items');
}

function *watchGetItemsAsync(){
    yield takeLatest('ITEMS_REQUESTED',fetchItems)
}

export default function* itemsRootSaga(){
    yield all([fork(helloSaga),fork(watchGetItemsAsync)])
}