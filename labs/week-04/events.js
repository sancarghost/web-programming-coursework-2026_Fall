const events = [
  { title: "Robotics night", category: "technology", capacity: 80, registered: 62, featured: true },
  { title: "Campus orchestra", category: "arts", capacity: 120, registered: 120, featured: false },
  { title: "Sustainable gardens", category: "community", capacity: 40, registered: 18, featured: true },
];

// TODO 1: write seatsRemaining(event).
function seatsRemaining(event){
  return event.capacity-event.registered; }

// TODO 2: write eventStatus(event).
function eventStatus(event){
  const remaining= seatsRemaining(event);
  if(remainig===0) return "full";
  if(remaining <=10) return "almost full";
  return "available";  }
// TODO 3: write filterEvents(allEvents, category).
function filterEvents(allEvents, category){
  if(!category || category === "all"){
    return allEvents;
  }
  return allEvents.filter((event) => event.category ===category);
// TODO 4: write summarizeEvents(allEvents).
function summarizeEvents(allEvents){
  return allEvents.map((event) => ({
    title: event.category,
    remaining: seatsRemaining(event)
      status: eventStatus(event),
    }));
console.table(events);
