import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL, PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";

export default function EventsPage({ events, page, totalEventCountRes }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 ? (
        <h3>No events to show</h3>
      ) : (
        events.map((evt) => <EventItem key={evt.id} evt={evt} />)
      )}
      <Pagination page={page} totalEventCountRes={totalEventCountRes} />
    </Layout>
  );
}
export async function getServerSideProps({ query: { page = 1 } }) {
  //Starting point of other pages
  const start = parseInt(page) === 1 ? 0 : (parseInt(page, 10) - 1) * PER_PAGE;
  //total events count
  const total = await fetch(`${API_URL}/events/count`);
  const totalEventCountRes = await total.json();
  //events request
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();
  //console.log(totalEventCountRes);
  return {
    props: { events, page: parseInt(page), totalEventCountRes },
  };
}
