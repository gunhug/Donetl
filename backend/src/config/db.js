import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    //làm việc với hàm async(bất đồng bộ) thì phải dùng try catch để bắt lỗi
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(
            "Liên kết cơ sở dữ liệu thành công!"
        )
    } catch (error) { 
        console.log("Liên kết cơ sở dữ liệu thất bại!", error)
        process.exit(1) //dừng việc chạy chương trình khi kết nối thất bại
    }
}
