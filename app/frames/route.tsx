import { Button } from "frames.js/next";
import { frames } from "app/frames/frames"; // 追記
import { appURL } from "app/utils";

const handleRequest = frames(async (ctx) => {
  return {
    image: `${appURL()}/01.png`,
    buttons: [
      <Button action="post" target="/next">
        GM
      </Button>
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
