import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Resolutions from "/components/Resolutions";
import { useState } from "react";
import Link from "next/link";


function ResolutionsPage() {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Resolutions</title>
      </Head>
      <div className="formContent">
        <Resolutions
          name={query.name}
          year={query.year}
          family={query.family}
          partner={query.partner}
          friends={query.friends}
          sports={query.sports}
          leisure={query.leisure}
          academics={query.academics}
          travel={query.travel}
          work={query.work}
          finance={query.finance}
          other={query.other}
        />
        <ShareButton />
        <Link href="/form" className="makeList">
            <p>📋️ Make a new list! 🖋️</p>
          </Link>
      </div>
    </>
  );
}

function ShareButton() {
  const [isCopied, setIsCopied] = useState(false);

  function handleShareClick() {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Hide the message after 2 seconds
  }

  return (
    <>
      <button onClick={handleShareClick}>{isCopied ? "copied!" : "Share"}</button>
    </>
  );
}

export default ResolutionsPage;
