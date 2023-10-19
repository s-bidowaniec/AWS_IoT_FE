'use client';
import TestAwsIoT from "@/components/AwsIoT";
import TestFetch from "@/components/TestFetch";

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../app/aws-exports';
Amplify.configure(awsExports);

/* pages/index.js */
import Head from "next/head";
//import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

//type Breeds = []


export default function Home() {
  return (
    <Authenticator>
    <div className="c1">
      <Head>
        <title>Amplify Hosting Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="c2">
        <h1 className="text-3xl">Amplify Hosting Test App</h1>
        <br />
        <TestFetch></TestFetch>
        <br />
        <TestAwsIoT></TestAwsIoT>
        
      </main>
    </div>
    </Authenticator>
  );
}
