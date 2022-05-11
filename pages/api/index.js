
import SearchData from '../../models/SearchData';
import dbConnect from './../../utils/dbConnect';

dbConnect();

// const database = client.db("projectSearch");
// const projectsCollection = database.collection("projects");

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                // const query = `/${req.body.query}/i`;
                // console.log(query)
                // const data = await SearchData.find({ name: { $regex: query } });
                const data = await SearchData.find({ name: { $regex: /sha/i } });
                res.status(200).json({ success: true, data });
            } catch (error) {
                res.status(400).json({ success: false })
            }
        case 'POST':
            try {
                const data = await SearchData.create(req.body);
                res.status(201).json({ success: true, data });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
    }

    res.json({ status: 200, message: "ok" })
}