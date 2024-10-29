import { db } from "@/database/db"
import ShowData from "../_components/ShowData"

const AdminPage = async () => {
    const instagramData = await db.formData.findMany();

    return (
        <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-3xl text-center mb-4">
                لیست آی دی های اینستاگرام
            </h1>

            <ShowData data={instagramData} />
        </div>
    )
}

export default AdminPage