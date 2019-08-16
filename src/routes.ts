import * as UserController from "./controller/userController";

/**
 * All application routes.
 */
export const AppRoutes = [
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
