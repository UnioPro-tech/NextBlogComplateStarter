import { getAllSpecials } from "@/lib/api";

export async function getStaticPaths() {
  const posts = getAllSpecials(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
