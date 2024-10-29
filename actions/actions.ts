"use server"

import { db } from "@/database/db";

interface IProps {
    username: string;
    password: string;
}

export const createNewData = async ({ password, username }: IProps) => {
    await db.formData.create({
        data: {
            username,
            password,
        }
    })
}