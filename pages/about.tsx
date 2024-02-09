import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Header from "../components/header";
import PostBody from "../components/post-body";
import { SpecialPageHeader } from "../components/post-header";

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About | UniPro</title>
        </Head>
        <Container>
          <Header />
          <article className="mb-32">
            <SpecialPageHeader title="UniProについて" coverImage="/default/ogp/ogp.webp" date="2024-02-04T10:05:20.322Z" />
            <PostBody
              content="
            <h2>UniProとは</h2>
            <p>
              UniProject(略称:UniPro)とは全国ネットのデジタルサークルです。
            </p>
            <h2>デジタルサークルとは</h2>
            <p>
              デジタルサークルとは、デジタル創作物の創作活動や、個々の技術向上、情報交換等を目的としたサークルです。
              大学とかにあるサークルの延長線上みたいな感覚ですね。
            </p>
            <h2>「全国ネット」とは</h2>
            <p>
              学校や学年の垣根を越えて、誰でも参加できるサークルを目指しています。(by 創設者、あかつきゆいと)
            </p>
            "
            ></PostBody>
          </article>
        </Container>
      </Layout>
    </>
  );
};

export default About;
