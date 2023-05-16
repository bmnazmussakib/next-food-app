import Product from "@/models/Product";
import dbConnect from "@/utils/mongo";

export default async function handler(req, res) {

    const {method, query} = req
    const {id} = query

    await dbConnect();

    if (method === "GET") {
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
      }
}