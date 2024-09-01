import dbConnect from "@/lib/dbConnect";
import { About } from '@/model/about';

export default async function handler(req, res) {
	await dbConnect();

	try {
		const data = await About.find();
		console.log(data,"data");
		res.status(200).json(data);
	} catch (error) {
		console.error(error)
	}

}