import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { Navbar } from "../ui/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarModal } from "./CalendarModal";
import { CalendarEvent } from "./CalendarEvent";

import { messages } from "../../helpers/calendar-messages-es";
import "moment/locale/es";

moment.locale("es");
const localizer = momentLocalizer(moment);
const events = [
	{
		title: "Cumnpleanos mio",
		start: moment().toDate(),
		end: moment().add(2, "hours").toDate(),
		bgcolor: "#fafafa",
		notes: "Comprar cake",
		user: {
			_id: "123",
			name: "Daniel",
		},
	},
];

export const CalendarScreen = () => {
	const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");

	const onDoubleClick = (e) => {
		console.log(e);
	};

	const onSelectEvent = (e) => {
		console.log(e);
	};

	const onViewChange = (e) => {
		setLastView(e);
		localStorage.setItem("lastView", e);
	};

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: "#367CF7",
			borderRadius: "0px",
			opacity: "0.8",
			display: "block",
			color: "white",
		};

		return {
			style,
		};
	};

	return (
		<div className='calendar-screen'>
			<Navbar />
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				messages={messages}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelectEvent}
				eventPropGetter={eventStyleGetter}
				onView={onViewChange}
				view={lastView}
				components={{
					event: CalendarEvent,
				}}
			/>

			<CalendarModal />
		</div>
	);
};
