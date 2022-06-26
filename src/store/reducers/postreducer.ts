import { post } from '../../models/modeltypes'
import { Action } from '../actions'
import ActionType from '../actions/action-types'

interface PostState {
    loading: boolean
    error: string | null
    posts: post[] | null
    selectedPost: post | null
}
const initialState = {
    loading: false,
    error: null,
    posts: null,
    selectedPost: null,
}

const postreducer = (state: PostState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_POST_REQUEST:
            return { loading: true, error: null, posts: null, selectedPost: null }
        case ActionType.GET_POST_SUCCESS:
            return { loading: false, error: null, posts: action.payload, selectedPost: null }
        case ActionType.GET_POST_FAIL:
            return { loading: false, error: action.payload, posts: null, selectedPost: null }
        case ActionType.SELECT_POST_REQUEST:
            return { loading: true, error: null, posts: state.posts, selectedPost: state.selectedPost }
        case ActionType.SELECT_POST_SUCCES:
            return { loading: false, error: null, posts: state.posts, selectedPost: action.payload }
        case ActionType.SELECT_POST_FAIL:
            return { loading: false, error: action.payload, posts: state.posts, selectedPost: state.selectedPost }
        default:
            return state
    }
}
export default postreducer