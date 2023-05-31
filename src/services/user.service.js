import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import errors from "../errors/index.errors.js";
import userRepository from "../repositories/user.repository.js";

async function signUp({ email, password, username, picture }) {
  const hashedPassword = await bcrypt.hash(password, 10);
  await userRepository.createUser({ email, password: hashedPassword, username, picture });
}

async function signIn({ email, password }) {
  const { rowCount: emailExists, rows } = await userRepository.findUserByEmail({ email });
  if (!emailExists) throw errors.unauthorized();

  const foundUser = rows[0];
  const isValidPassword = await bcrypt.compare(password, foundUser.password);
  if (!isValidPassword) throw errors.unauthorized();

  const token = uuid();
  const { rowCount: sessionCreated } = await userRepository.createSession({ userId: foundUser.id, token });
  if (sessionCreated) {
    return { token };
  } else {
    throw errors.unauthorized();
  }
}

async function signOut({ userId, token }) {
  await userRepository.signOutUser({ userId, token })
}

const userService = { signUp, signIn, signOut };
export default userService;