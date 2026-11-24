// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InputAudioBufferSpeechStarted extends $dara.Model {
  type?: string;
  eventId?: string;
  audioStartMs?: number;
  itemId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      audioStartMs: 'audio_start_ms',
      itemId: 'item_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      audioStartMs: 'number',
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

