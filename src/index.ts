import { createAction } from "@reduxjs/toolkit";

const action = createAction("action/test");
console.log(action());
