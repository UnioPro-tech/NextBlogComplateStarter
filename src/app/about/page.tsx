//import Image from "next/image";

import { basePath } from "../../../next.config";
const BASE_PATH = basePath ? basePath : "";
import MotionWrapper from "@/components/motionWrapper";

export default function Home() {
  return (
    <MotionWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-100">
        <div className="space-y-4 flex mb-3 grid text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h1 className={`mb-3 text-4xl font-semibold`}>About</h1>
          <h2 className={`mb-3 text-3xl font-semibold`}>
            What's Untitled Project?
          </h2>
          <p>
            Untitled Project is the Digital Club started by Yuito Akatsuki in
            2023. The club is on Internet.
          </p>
          <h2 className={`mb-3 text-3xl font-semibold`}>What They doing?</h2>
          <p>
            We have just started our activities. Because these are future
            activities planned. Our activities are all of about digital such
            as...
          </p>
          <ul className="list-disc max-w-md space-y-1 list-inside">
            <li>Programming</li>
            <li>Creating Games</li>
            <li>Graphics</li>
            <li>Creating Sounds</li>
          </ul>
          {/*<h2 className="mb-3 text-3xl font-semibold">Join us!!</h2>
          If you want to join us, please look this page.
          <a
            href="/Join_us"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Join us{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              You want to join? The page is wrote about how to join us.
            </p>
  </a>*/}
        </div>
      </main>
    </MotionWrapper>
  );
}
