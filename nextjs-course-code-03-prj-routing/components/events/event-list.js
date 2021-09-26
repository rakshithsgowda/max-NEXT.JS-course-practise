import EventItem from './event-item'
import classes from './event-list.module.css'

export default function EventList(props) {
  // const [dataloaded, setdataloaded] = useState(events)

  const { events } = props

  if (events === undefined) {
    return <h1>Problem contacting the database</h1>
  }
  if (events) {
    return (
      <ul className={classes.list}>
        {events.map((event) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    )
  }
}

// export default EventList
