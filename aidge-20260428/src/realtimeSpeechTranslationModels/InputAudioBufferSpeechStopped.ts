// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputAudioBufferSpeechStopped extends $dara.Model {
  type?: string;
  eventId?: string;
  audioEndMs?: number;
  itemId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      audioEndMs: 'audio_end_ms',
      itemId: 'item_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      audioEndMs: 'number',
      itemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

