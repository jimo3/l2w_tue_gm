import { fetchMetadata } from "frames.js/next";
import { Metadata } from "next";
import { appURL } from "app/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "change",
    other: {
      ...(await fetchMetadata(
        new URL("/frames", appURL())
      )),
    },
  };
}

export default async function Home() {
  return null; //nullは何も返さない
}
