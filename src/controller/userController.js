"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
// Repository is supposed to work with your entity objects. Find entities, insert, update, delete, etc.
// get All users from db
function userGetAllAction(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = typeorm_1.getManager().getRepository(User_1.User);
        const users = yield userRepository.find();
        context.body = users;
    });
}
exports.userGetAllAction = userGetAllAction;
function userSaveAction(context) {
    return __awaiter(this, void 0, void 0, function* () {
        // 将JSON转为对应实体
        const userRepository = typeorm_1.getManager().getRepository(User_1.User);
        const newUser = userRepository.create(context.request.body);
        yield userRepository.save(newUser);
        context.body = newUser;
    });
}
exports.userSaveAction = userSaveAction;
// 按照id查找
function userGetByIdAction(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = typeorm_1.getManager().getRepository(User_1.User);
        const id = context.params.id;
        //const id = (context as any).params.id;
        console.log("request body:", context.URL);
        console.log(context.params);
        console.log("param of id is :", id);
        const user = yield userRepository.findOne(id);
        context.body = user;
    });
}
exports.userGetByIdAction = userGetByIdAction;
