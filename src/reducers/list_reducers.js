import types from '../actions/types';

const DEFAULT_STATE =  {
    all: null,
    single: []
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_ALL_TO_DOS:
            console.log('get all action:', action );
            return {...state, all: action.payload.data.tools };
        default:
            return state;
    }
}