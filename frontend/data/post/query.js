import { useQuery } from "react-query";
import { getPosts } from "../../services/posts";


export const usePosts = () => useQuery(
    "posts",
    getPosts,
    {
        refetchOnWindowFocus: true,

    }
)