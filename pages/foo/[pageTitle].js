export default function Foo({ pageTitle, pageContent }) {
  return (
    <main>
      <h2>{pageTitle}</h2>
      <article>{pageContent}</article>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      pageTitle: params.pageTitle,
      pageContent: "Hello",
    },
  };
}
