import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Ensure required data is present
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "Invalid data provided!" });
    }

    const client = await MongoClient.connect(
      "mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("Connected to DB");

    const db = client.db();
    const meetupsCollection = db.collection("test");

    const response = await meetupsCollection.insertOne(data);

    console.log("Document Inserted:", response);

    await client.close(); // Ensure the connection is properly closed

    res
      .status(201)
      .json({ message: "Meetup Inserted!", id: response.insertedId });
  }
}

export default handler;
