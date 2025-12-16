import EventActions from '@/components/EventActions';
import { auth } from '@/lib/auth';
import { Event } from '@/lib/model';
import { notFound } from 'next/navigation';

export default async function EventPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = await params;

  const session = await auth();

  const eventResponse = await fetch(`http://localhost:3000/api/events/${eventId}`, {
    cache: 'no-store',
  });

  if (!eventResponse.ok) {
    return notFound();
  }

  const event = (await eventResponse.json()) as Event;

  const isOwner = session?.user?.id === event.userId;

  return (
    <div className='max-w-4xl mx-auto space-y-8'>
      {/* Event Header */}
      <div className='card p-8'>
        <div className='flex items-start justify-between mb-6'>
          <div>
            <h1 className='text-4xl font-bold text-foreground mb-4'>{event.title}</h1>
            <p className='text-xl text-muted mb-6'>{event.description}</p>
          </div>
          {isOwner && <EventActions eventId={eventId} />}
        </div>
      </div>
    </div>
  );
}
