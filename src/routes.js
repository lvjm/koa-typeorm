"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController = require("./controller/userController");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: UserController.userGetAllAction
    },
    {
        path: "/users/:id",
        method: "get",
        action: UserController.userGetByIdAction
    },
    {
        path: "/users",
        method: "post",
        action: UserController.userSaveAction
    }
];
