import Image from "next/image"
import { profileTabs } from "@/constants"
import ThreadsTab from "@/components/shared/ThreadsTab"
import { currentUser } from "@clerk/nextjs"
import { fetchUser } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"
const page = async () => {
    const user = await currentUser();
    if (!user) return null;
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    //fetch users
    return (
        <section>
            <h1 className="head-text mb-10">Communities</h1>
        </section>
    )
}

export default page