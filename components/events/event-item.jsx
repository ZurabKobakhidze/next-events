import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const HumanReadableDate = new Date(date).toLocaleTimeString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summaty}>
          <h2>{title} </h2>
          <div className={classes.date}>
            <time>{HumanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
         <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
