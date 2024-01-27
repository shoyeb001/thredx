import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
const Page = async () => {
    const user = await currentUser();
    const userInfo = {};
    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user?.name,
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl
    }
    return (
        <>
            <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
                <h1 className="head-text">Tredx</h1>
                <p className="mt-3 text-base-regular">
                    Complete your profile to use TreadX
                </p>
                <section className="mt-9 bg-dark-2 p-10">
                    <AccountProfile user={userData} btnTitle="Submit" />
                </section>
            </main>
        </>
    );
}

export default Page;