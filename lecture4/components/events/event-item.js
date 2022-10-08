import classes from './event-item.module.css';
import Button from "../ui/button";
import DateIcon from "../../public/icons/date-icon";
import AddressIcon from "../../public/icons/address-icon";
import ArrowRightIcon from "../../public/icons/arrow-right-icon";

const EventItem = (props) => {
  const {title, image, date, location, id} = props;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formatedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return   <li className={classes.item}>
    <img src={`/${image}`} alt={id}/>
    <div className={classes.content}>
      <div className={classes.summary}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon/>
          <time>{date}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon/>
          <address>{formatedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink} >
          <span>Explore Event</span>
          <span className={classes.icon}><ArrowRightIcon/></span>
        </Button>
      </div>
    </div>
  </li>
}

export default EventItem;
