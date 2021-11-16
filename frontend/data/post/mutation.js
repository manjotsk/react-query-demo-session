import { useMutation } from "react-query";
import { createPost } from "../../services/posts";
import { queryClient } from "../../pages/_app";
export const useCreatePost = () => useMutation(createPost, {
    // onSuccess: (data, variables) => {
    //     console.log({ variables });
    //     queryClient.setQueryData("posts", (oldData) => {
    //         console.log("oldData", oldData);
    //         return {
    //             ...oldData,
    //             data: [...oldData.data, variables],
    //         };
    //     })
    // }
})