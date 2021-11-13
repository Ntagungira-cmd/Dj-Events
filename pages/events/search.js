import qs from 'qs';
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function SearchPage({ events }) {
  return (
    <Layout title="search results">
      <h1>Search results</h1>
      {events.length === 0 ? (
        <h3>No events to by the name</h3>
      ) : (
        events.map((evt) => <EventItem key={evt.id} evt={evt} />)
      )}
    </Layout>
  );
}
export async function getServerSideProps({ query: { term } }) {
  const query=qs.stringify({
    _where:{
      _or:[
        {name_contains:term},
        {venue_contains:term},
        {perfomers_contains:term},
        {description_contains:term},
      ]
    }
  })
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();
  //console.log(events);
  return {
    props: { events },
  };
}
