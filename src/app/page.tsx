import MotionWrapper from "@/components/motionWrapper";

import { basePath } from "../../next.config";
const BASE_PATH = basePath ? basePath : "";

export default function Home() {
  return (
    <MotionWrapper>
      <main className="flex min-h-screen text-white flex-col items-center justify-between p-24 bg-[url('/BackGround.jpg')]">
        <div className="flex mb-3 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
          <h1 className={`mb-3 text-4xl font-semibold`}>Untitled Project!</h1>
        </div>

        <div className="flex mb-3 grid  lg:max-w-5xl lg:w-full lg:mb-40 lg:grid-cols-1 lg:text-left">
          <p className="mb-3 text-2xl font-semibold">The Digital Club.</p>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black hover:bg-black"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              About for Untitled Project.
            </p>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black hover:bg-black"
            rel="noopener noreferrer"
          >
            <s>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Blog{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                The Blog of member.(Now prepairing...)
              </p>
            </s>
          </a>

          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-black hover:bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <s>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Projects{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore our projects.
              </p>
            </s>
          </a>
        </div>
      </main>
      <footer className="bg-black">
        <div>
          <span className="text-white">
            (c)Untitled Project 2023, Other Credit are
            <a href="./credit"> Here</a>
          </span>
        </div>
      </footer>
    </MotionWrapper>
  );
}
