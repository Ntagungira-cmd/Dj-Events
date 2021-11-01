import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  const [eventImage] = evt.image;
//   console.log(eventImage.formats.thumbnail.url);
//   console.log(evt);
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image src={eventImage ? eventImage.formats.thumbnail.url:'/images/event-default.png'} height={140} width={180}/>
      </div>
      <div className={styles.info}>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
}
