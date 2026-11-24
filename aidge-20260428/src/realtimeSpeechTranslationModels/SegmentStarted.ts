// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SegmentStarted extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  segmentId?: string;
  startMs?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      segmentId: 'segment_id',
      startMs: 'start_ms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      segmentId: 'string',
      startMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

