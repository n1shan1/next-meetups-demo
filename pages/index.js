import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups | Home</title>
        <meta content="Find your Nearby meetups near you area!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster"
  );
  const db = client.db();
  const collection = db.collection("test");
  const data = await collection.find().toArray();
  client.close();

  return {
    props: {
      meetups: data.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res
//   //only runs on the server
//   return{
//     props{
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }
