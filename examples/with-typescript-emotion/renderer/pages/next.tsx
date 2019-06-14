import React from 'react';
import Head from 'next/head';
import { BasicCard } from '../components/BasicCard';
import { TitleCard } from '../components/TitleCard';
import { bounce, AnimatedCard } from '../components/AnimatedCard';
import Link from 'next/link';

export default () => {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-emotion)</title>
      </Head>
      <div>
        <TitleCard>Nextron with Emotion</TitleCard>
        <BasicCard>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </BasicCard>
        <AnimatedCard animation={bounce}>Let's bounce.</AnimatedCard>
      </div>
    </React.Fragment>
  );
};
