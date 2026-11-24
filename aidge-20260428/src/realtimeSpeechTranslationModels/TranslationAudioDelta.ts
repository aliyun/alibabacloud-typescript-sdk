// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslationAudioDelta extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  segmentId?: string;
  direction?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  audio?: string;
  sequence?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      segmentId: 'segment_id',
      direction: 'direction',
      sourceLanguage: 'source_language',
      targetLanguage: 'target_language',
      audio: 'audio',
      sequence: 'sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      sessionId: 'string',
      segmentId: 'string',
      direction: 'string',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      audio: 'string',
      sequence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

