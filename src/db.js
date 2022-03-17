import { connect } from 'mongoose';
import { MONGODB_URL } from './config';

export const connectDB = async () => {
    try {
        await connect(MONGODB_URL)
        console.log("connect to db")
    } catch (error) {
        console.error(error);
    }
}