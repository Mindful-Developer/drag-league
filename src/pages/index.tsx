import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Drag League</title>
        <meta name="description" content="Fantasy League for drag tv shows" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>

      <Layout>
        <main className="flex flex-col items-center">
          <h1 className="text-4xl text-gray-300">Drag League</h1>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
