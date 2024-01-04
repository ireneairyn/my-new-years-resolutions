import Head from 'next/head';
import React from 'react';

function AboutPage() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <title>New Year&apos;s Resolutions</title>
      </Head>
      <div className='aboutContent'>
        <h1>About</h1>
        <p>
        This page is your canvas for charting your aspirations and goals for the coming year. 
        </p>
        <p>
        Share your resolutions here, whether they&apos;re about personal growth, health, career, relationships, or anything else important to you. 
        </p>
        <p>
        It&apos;s your space to inspire and be inspired. !
        </p>
        <p>
        Let&apos;s make this year one of progress and achievement together
        </p>
      </div>
    </>
  );
}

export default AboutPage;
