import { useRouter } from 'next/router'
import EventList from '../../components/events/event-list';
import { getFeaturedEvents } from '../../dummy-data';


const FilteredEventsPage = () => {
    const router = useRouter();

    const filterData = router.query.slug;
    if (!filterData) {
        return <p className='center' >Loading...</p>
    }
    const filteredYear = filterData[0]
    const filteredMonth = filterData[1];

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p>Invalid filter please adjust your values</p>
    }
    const filteredEvents = getFeaturedEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter!</p>
    }

    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventsPage
