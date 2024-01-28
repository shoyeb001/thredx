import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter } from "next/font/google";
import '../globals.css';

export const metadata = {
    title: "Thredx - Connect with people and share your thoughts",
    description: "Thredx is a social media application which allows people to connect with each others and build community"
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ClerkProvider>
                <html lang="en">
                    <body className={`${inter.className}  bg-dark-1`}>
                        <div className="w-full flex justify-center items-center min-h-screen">
                            {children}

                        </div>
                    </body>
                </html>
            </ClerkProvider>
        </>
    )
}