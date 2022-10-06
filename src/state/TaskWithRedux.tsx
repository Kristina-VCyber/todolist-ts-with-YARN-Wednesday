import React, { ChangeEvent, memo } from "react";
import { Checkbox, IconButton } from "@material-ui/core";

import { Delete } from "@material-ui/icons";
import { TaskType } from "../TodolistWithRedux";
import { EditableSpan } from "../EditableSpan";
import { useDispatch } from "react-redux";
import { changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from "./tasks-reducer";


type TaskPropsType = {
    task: TaskType
    todolistId: string
}
export const TaskWithRedux = memo(({
                                       task,
                                       todolistId
                                   }: TaskPropsType) => {
    console.log("TaskWithRedux")
const {id,isDone, title} = {...task}
    const dispatch = useDispatch()
    const onClickHandler = () => dispatch(removeTaskAC(id, todolistId))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(id, newIsDoneValue, todolistId));
    }
    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(id, newValue, todolistId));
    }

    return (
        <div>
            <div key={id} className={isDone ? "is-done" : ""}>
                <Checkbox
                    checked={isDone}
                    color="primary"
                    onChange={onChangeHandler}
                />

                <EditableSpan value={title} onChange={onTitleChangeHandler}/>
                <IconButton onClick={onClickHandler}>
                    <Delete/>
                </IconButton>
            </div>
        </div>
    )
})