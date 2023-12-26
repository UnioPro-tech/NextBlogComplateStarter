{
  /* */
}
import MotionWrapper from "@/components/motionWrapper";

import { basePath } from "../../../next.config";
const BASE_PATH = basePath ? basePath : "";

export default function Home() {
  return (
    <MotionWrapper>
      <main className="min-h-screen text-white flex-col items-center justify-between p-24 bg-gray-500">
        <div className="flex mb-3 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          <h1 className={`mb-3 text-4xl font-semibold`}>Credit...</h1>
          {"("}./{")"}
        </div>
        BackGround:
        <a href="https://jp.freepik.com/free-photo/3d-render-of-an-network-communications-background-with-rainbow-coloured-plexus-design_22134664.htm#query=digital&position=6&from_view=keyword&track=sph&uuid=ec3fdd83-9e10-42f6-880c-0c4463865581">
          著作者:kjpargeter{"("}Link{")"}
        </a>
        /出典:Freepik
      </main>
      <footer className="bg-black">
        <div>
          <span className="text-white">
            (c)Untitled Project 2023 All rights reserved.
          </span>
        </div>
      </footer>
    </MotionWrapper>
  );
}
