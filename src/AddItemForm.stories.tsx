import { AddItemForm } from "./AddItemForm";
import { action } from "@storybook/addon-actions";
import React from "react";

export default {
    title: "AddItemForm Component",
    component: AddItemForm
}
const callback = action("Button 'add' was pressed inside the form");
export const AddItemFormExample = (props: any) => {
    return <AddItemForm addItem={callback}/>
}