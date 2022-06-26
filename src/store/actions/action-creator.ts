import axios from "axios";
import { Dispatch } from "react";
import { Action } from ".";
import { post } from "../../models/modeltypes";
import ActionType from "./action-types";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: ActionType.GET_POST_REQUEST })
        const { data } = await axios.get<post[]>("https://my-json-server.typicode.com/leonidas131/JsonServer/posts")
        dispatch({ type: ActionType.GET_POST_SUCCESS, payload: data })
        if (data !== []) {
            dispatch({ type: ActionType.SELECT_POST_SUCCES, payload: data[0] })
        }
    } catch (error: any) {
        dispatch({ type: ActionType.GET_POST_FAIL, payload: error.message })
    }
}
export const selectPost = (postId: number) => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: ActionType.SELECT_POST_REQUEST })
        const { data } = await axios.get<post>('https://my-json-server.typicode.com/leonidas131/JsonServer/posts/' + postId)
        dispatch({ type: ActionType.SELECT_POST_SUCCES, payload: data })
    } catch (error: any) {
        dispatch({ type: ActionType.SELECT_POST_FAIL, payload: error.message })
    }
}