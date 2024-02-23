import Giscus from '@giscus/react';

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="UniPro-tech/unipro-tech.github.io"
      repoId="R_kgDOKxaUsQ"
      category="Giscus Comments"
      categoryId="DIC_kwDOKxaUsc4CdcsK"
      mapping="title"
      term="コメント..."
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      lang="ja"
      strict="1"
      theme="light"
      loading="lazy"
    />
  );
}