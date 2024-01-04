import Image from "next/image";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="background"></div>
      <div className="wrapper">
        <div className="topLinks">
          <a
            href="https://github.com/ireneairyn/my-new-years-resolutions"
            className="logo-link"
            target="_blank"
          >
            <Image
              src="/github-mark-white.png"
              alt="github logo"
              width={35}
              height={35}
            />
          </a>{" "}
          <a
            href="/form"
            className="emoji-link"
            target="_blank"
          >
            🖊️
          </a>
        </div>
        <div className="header">
          <Link href="/" className="title-link">
            <h1>New Year&apos;s Resolutions</h1>
          </Link>
        </div>
        <Component {...pageProps} />
        <div className="footer">
          <span>
            <Link href="/about">About |</Link>
          </span>
          <span>
            <a href="https://github.com/ireneairyn/my-new-years-resolutions" target="_blank">
            &nbsp;Github
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
