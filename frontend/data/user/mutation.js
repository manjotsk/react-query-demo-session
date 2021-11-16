import { useMutation } from "react-query";
import { createUser } from "../../services/user";

export const useCreateUser = () => useMutation(createUser)