const EventPage = () => {
  return <h1>Single Event</h1>;
};

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("data/data.json");
  const eventData = allEvents.filter((ev) => id === ev.id);
  return {
    props: {},
  };
}
