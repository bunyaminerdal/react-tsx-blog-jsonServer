import { post } from "../../models/modeltypes";
import ActionType from "./action-types";

type GetPostRequestAction = {
    type: ActionType.GET_POST_REQUEST
}

type GetPostSuccesAction = {
    type: ActionType.GET_POST_SUCCESS,
    payload: post[]
}
type GetPostFailAction = {
    type: ActionType.GET_POST_FAIL,
    payload: string
}
type SelectPostRequestAction = {
    type: ActionType.SELECT_POST_REQUEST,
}
type SelectPostSuccessAction = {
    type: ActionType.SELECT_POST_SUCCES,
    payload: post
}
type SelectPostFailAction = {
    type: ActionType.SELECT_POST_FAIL,
    payload: string
}

export type Action = GetPostRequestAction | GetPostFailAction | GetPostSuccesAction | SelectPostFailAction | SelectPostRequestAction | SelectPostSuccessAction