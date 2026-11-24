// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputAudioBufferCommitted extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  segmentId?: string;
  causedBy?: string;
  audioDurationMs?: number;
  itemId?: string;
  previousItemId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      segmentId: 'segment_id',
      causedBy: 'caused_by',
      audioDurationMs: 'audio_duration_ms',
      itemId: 'item_id',
      previousItemId: 'previous_item_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      segmentId: 'string',
      causedBy: 'string',
      audioDurationMs: 'number',
      itemId: 'string',
      previousItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

