import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function SearchPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 ? (
        <h3>No events to by the name</h3>
      ) : (
        events.map((evt) => <EventItem key={evt.id} evt={evt} />)
      )}
    </Layout>
  );
}
export async function getServerSideProps({ query: { term } }) {
  const res = await fetch(`${API_URL}/events?name_contains=date:${term}`);
  const events = await res.json();
  //console.log(events);
  return {
    props: { events },
  };
}
