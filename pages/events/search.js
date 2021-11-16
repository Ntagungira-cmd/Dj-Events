import qs from "qs";
import Link from "next/link"
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function SearchPage({ events }) {
  const router = useRouter();
  //console.log(router);
  return (
    <Layout title="search results">
      <Link href="/events">Go Back</Link>
      <h1>Search results for {router.query.term}</h1>
      {events.length === 0 ? (
        <h3>No events to by the name  {router.query.term}</h3>
      ) : (
        events.map((evt) => <EventItem key={evt.id} evt={evt} />)
      )}
    </Layout>
  );
}
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { venue_contains: term },
        { perfomers_contains: term },
        { description_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  console.log(events);
  return {
    props: { events },
  };
}
