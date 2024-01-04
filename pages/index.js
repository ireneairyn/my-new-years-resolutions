import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>New Year&apos;s Resolutions</title>
      </Head>

      <div className="content">
        <Link href="/form" className="image-container">
          <Image
            src="/startNotebook.png"
            alt="notebook"
            width={800}
            height={800}
          />
        </Link>
      </div>
    </>
  );
}

export default HomePage;
