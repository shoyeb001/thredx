import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { redirect } from "next/navigation"
import { fetchUser } from '@/lib/actions/user.actions'
import PostThread from '@/components/forms/PostThread'

interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string
    },
    btnTitle: string
}
const page = async () => {
    const user = await currentUser();
    if (!user) return null;
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');


    return (

        <>
            <h1 className='head-text'>Create Thred</h1>
            <PostThread userId={userInfo._id} />
        </>

    )
}

export default page