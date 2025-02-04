import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="This is the about page" />
      </Head>

      <h2>Introductions</h2>
            <p>Hello there! 👋 I'm 4M1D0N, an enthusiastic information security student currently navigating the exciting world of cybersecurity while pursuing my master's
                 degree. My passion for all things cyber led me to engage in Capture The Flag (CTF) challenges regularly, where I not only conquer obstacles but also share my 
                 triumphs here through detailed writeups and engaging video walkthroughs on my <a href="https://www.youtube.com/channel/UCnW2Qt8tnhdQy_sq88fuO5g" target="_blank">YouTube channel</a>.
            </p>
            <p>Whether it's unraveling the mysteries of a CTF challenge or delving into personal and school projects related to cybersecurity, I'm always eager to document
                 and share my journey with the cyber community. Currently on the path to conquer the OSCP exam, I'm determined to level up my skills and contribute to making
                  the digital realm a safer space for everyone.
            </p>
            <p>You can catch me almost every day on <a href="https://www.twitch.tv/4m1d0n" target="_blank">Twitch</a>, where I love to share my experiences, chat about all 
            things cybersecurity, and have a great time with the community. 

            </p>
            <p>Join me on this thrilling cyber adventure, and let's make the digital world a safer place together! 🚀💻
            </p>
    </Layout>
  );
}