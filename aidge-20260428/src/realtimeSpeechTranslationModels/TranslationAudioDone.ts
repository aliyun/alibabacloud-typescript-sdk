// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslationAudioDone extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  segmentId?: string;
  direction?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  finishReason?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      segmentId: 'segment_id',
      direction: 'direction',
      sourceLanguage: 'source_language',
      targetLanguage: 'target_language',
      finishReason: 'finish_reason',
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
      finishReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

