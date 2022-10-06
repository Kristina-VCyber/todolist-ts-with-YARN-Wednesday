import { EditableSpan } from "./EditableSpan";
import { action } from "@storybook/addon-actions";
import React from "react";

export default {
    title: "EditableSpan Component",
    component: EditableSpan
}
const onSpanChange = action("Value has been changed")
export const EditableSpanExample = () => {
    return <EditableSpan value={"Print here"} onChange={onSpanChange}/>

}
