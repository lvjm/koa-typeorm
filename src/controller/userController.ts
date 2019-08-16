import { Context } from "koa";
import { getManager } from "typeorm";
import { User } from "../entity/User";

// Repository is supposed to work with your entity objects. Find entities, insert, update, delete, etc.
// get All users from db
export async function userGetAllAction(context: Context) {
  const userRepository = getManager().getRepository(User);
  const users = await userRepository.find();
  context.body = users;
}

export async function userSaveAction(context: Context) {
  // 将JSON转为对应实体
  const userRepository = getManager().getRepository(User);
  const newUser = userRepository.create(context.request.body);
  await userRepository.save(newUser);
  context.body = newUser;
}

// 按照id查找
export async function userGetByIdAction(context: Context) {
  const userRepository = getManager().getRepository(User);
  const id = context.params.id;
  //const id = (context as any).params.id;
  console.log("request body:", context.URL);
  console.log(context.params);
  console.log("param of id is :", id);
  const user = await userRepository.findOne(id);
  context.body = user;
}
