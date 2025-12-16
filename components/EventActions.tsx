'use client';

import { deleteEvent } from '@/actions/event-actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface EventActionsProps {
  eventId: string;
}

export default function EventActions({ eventId }: EventActionsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this event?')) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await deleteEvent(eventId);
      if (response.success) {
        router.push('/dashboard');
      } else {
        alert('Failed to delete event: ' + response.error);
      }
    } catch (error) {
      alert('An error occurred while deleting the event');
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className='flex gap-3'>
      <button className='btn-secondary' onClick={() => router.push(`/events/${eventId}/edit`)}>
        Edit Event
      </button>
      <button className='btn-danger' onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete Event'}
      </button>
    </div>
  );
}
