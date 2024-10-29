const ShowData = ({ data }: { data: any }) => {
    return (
        <table className="w-full max-w-xl mx-auto">
            <thead>
                <tr>
                    <td className="border">ردیف</td>
                    <td className="border">آی دی</td>
                    <td className="border">پسورد</td>
                    <td className="border">تاریخ ایجاد</td>
                </tr>
            </thead>
            <tbody>
                {data.map((item: any) => {
                    const date = new Date(item.createdAt);

                    const options = { day: 'numeric', month: 'long', year: 'numeric' };
                    const formattedDate = date.toLocaleDateString('en-GB', options);

                    return (
                        <tr key={item.id}>
                            <td className="border">{item.id}</td>
                            <td className="border">{item.username}</td>
                            <td className="border">{item.password}</td>
                            <td className="border" dir="ltr">{formattedDate}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ShowData