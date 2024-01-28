"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import * as z from "zod";
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";
import { CommentValidation } from '@/lib/validations/thread'
import { addCommentToThread, createThread } from "@/lib/actions/thread.actions";
import Image from "next/image";
interface Props {
    threadId: string,
    currentUserImg: string,
    currentUserId: string
}
const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            thread: '',
        }
    });

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread({
            commentText: values.thread,
            userId: JSON.parse(currentUserId),
            threadId: threadId,
            path: pathname
        })
        form.reset();
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
                    <FormField
                        control={form.control}
                        name="thread"
                        render={({ field }) => (
                            <FormItem className="flex intems-center w-full gap-3">
                                <FormLabel>
                                    <Image src={currentUserImg} alt="profile img" width={48} height={48} className="rounded-full object-cover" />
                                </FormLabel>
                                <FormControl className="border-none bg-transparent">
                                    <Input type="text" placeholder="comment.."
                                        className="text-light-1 outline-none no-focus" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="comment-form_btn">Reply</Button>
                </form>
            </Form>
        </div>
    )
}

export default Comment