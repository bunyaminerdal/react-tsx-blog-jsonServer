import { post } from '../../models/modeltypes'
import { Action } from '../actions'
import ActionType from '../actions/action-types'

interface PostState {
    loading: boolean
    error: string | null
    posts: post[] | null
    selectedPost: post | null
    postAdding: boolean | null
}
const initialState = {
    loading: false,
    error: null,
    posts: null,
    selectedPost: null,
    postAdding: false,
}

const postreducer = (state: PostState = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.GET_POST_REQUEST:
            return { ...state, loading: true, error: null, posts: null, selectedPost: null }
        case ActionType.GET_POST_SUCCESS:
            return { ...state, loading: false, error: null, posts: action.payload, selectedPost: null }
        case ActionType.GET_POST_FAIL:
            return { ...state, loading: false, error: action.payload, posts: null, selectedPost: null }
        case ActionType.SELECT_POST_REQUEST:
            return { ...state, loading: true, error: null, posts: state.posts, selectedPost: state.selectedPost }
        case ActionType.SELECT_POST_SUCCESS:
            return { ...state, loading: false, error: null, posts: state.posts, selectedPost: action.payload }
        case ActionType.SELECT_POST_FAIL:
            return { ...state, loading: false, error: action.payload, posts: state.posts, selectedPost: state.selectedPost }
        case ActionType.POST_ADDING:
            return { ...state, postAdding: action.payload }
        case ActionType.ADD_POST_REQUEST:
            return { ...state, loading: true }
        case ActionType.ADD_POST_SUCCESS:
            return { ...state, loading: false, error: null, posts: state.posts ? [...state.posts, action.payload] : [action.payload], selectedPost: action.payload, postAdding: false }
        case ActionType.ADD_POST_FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}
export default postreducer