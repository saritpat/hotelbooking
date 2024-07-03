import fs from "fs";
import path from "path";

export default function AllHotel(req, res) {

    // data.json path 
    // (.join make path can use in window (/) & linux (\))
    // process.cwd return current working directory of Node.js process (root directory of project)
    const filePath = path.join(process.cwd(), "pages", "api", "data" , "data.json");

    // read data.json file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const allHotels = JSON.parse(fileContent);

    // Handle HTTP methods
    if (req.method === "GET") {
        res.status(200).json(allHotels);
    } else if (req.method === "POST") {
        res.status(200).json({ message: "POST request to /api/hotels" });
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
