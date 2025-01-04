import React from "react";
import Image from "next/image";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function SingleMeetupPage(props) {
  return (
    <>
      <Head>
        <title>{`Meetups | ${props.meetupData.title}`}</title>
      </Head>
      <MeetupDetails
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster"
  );

  const db = client.db();
  const collection = db.collection("test");

  const meetupData = await collection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking", // Consider using 'blocking' or 'true' if meetups are frequently updated.
    paths: meetupData.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster"
  );

  const db = client.db();
  const collection = db.collection("test");

  const meetupData = await collection.findOne({ _id: new ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        // Changed from `meetupsData` to `meetupData` for consistency
        id: meetupData._id.toString(),
        title: meetupData.title,
        address: meetupData.address,
        description: meetupData.description,
        image: meetupData.image, // Ensure `image` is available if used in the `MeetupDetails` component.
      },
    },
  };
}
