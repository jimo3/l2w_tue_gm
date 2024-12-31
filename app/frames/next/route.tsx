import { Button } from "frames.js/next";
import { frames } from "app/frames/frames";
import { appURL } from "app/utils";

const handleRequest = frames(async (ctx) => {
  let error: string | null = null;
  let isLoading = false;
  const fetchUserData = async (fid: string) => {
    isLoading = true;
    try {
      const airstackUrl = `${appURL()}/api?userId=${encodeURIComponent(fid)}`;
      const airstackResponse = await fetch(airstackUrl);
      if (!airstackResponse.ok) {
        throw new Error(`Airstack HTTP error! status: ${airstackResponse.status}`);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      error = (err as Error).message;
    } finally {
      isLoading = false;
    }
  };

  let fid: string | null = null;
  if (ctx.message?.requesterFid) {
    fid = ctx.message.requesterFid.toString();
    console.log("Using requester FID:", fid);
  } else {
    console.log("No ctx.url available");
  }
  console.log("Final FID used:", fid);

  if (fid) {
    await Promise.all([fetchUserData(fid)]);
  }

  return {
    image: `${appURL()}/02.png`,
    buttons: [
      <Button action="post" target="/">
        Have a great day!
      </Button>,
    ],
  };

});

export const GET = handleRequest;
export const POST = handleRequest;
