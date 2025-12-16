export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  maxAttendees: number;
  userId: string;
  user: {
    name: string;
    email: string;
  };
}
