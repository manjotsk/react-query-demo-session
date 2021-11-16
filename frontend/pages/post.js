import React, { useState } from 'react'
import { useCreatePost } from '../data/post/mutation'
import { usePosts } from '../data/post/query'
import Link from 'next/link'

const post = () => {
    // get posts
    const posts = usePosts()

    // create post
    const createPost = useCreatePost()

    // dispatch create post


    const [data, setData] = useState({})

    return (
        <div>
            {
                posts.isFetching &&
                (
                    <div style={{ background: 'red' }}>Fetching...</div>
                )
            }
            Hi Welcome to post page
            {/* title input */}
            <br />
            <input type="text" placeholder="title" onChange={e => {
                setData({ ...data, title: e.target.value })
            }} />
            {/* content input */}
            <br />
            <input type="text" placeholder="content"
                onChange={e => {
                    setData({ ...data, body: e.target.value })
                }} />

            <button onClick={() => {
                createPost.mutateAsync({
                    title: data.title,
                    body: data.body,
                    author: 'manjot',
                    id: posts.data.data.length + 1
                }).then(() => {
                    posts.refetch()
                })
            }}>Create Post</button>
            {
                createPost.isLoading &&
                (
                    <div>Creating Post...</div>
                )
            }

            {
                // loader
                posts.isLoading ? <div>Loading...</div> : null
            }

            {/* list of posts */}
            {Array.isArray(posts.data?.data) && posts.data?.data?.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}

            {/* navigte to home page */}
            <Link href="/" as="/">Go to Home page</Link>
        </div>
    )
}

export default post
