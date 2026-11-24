// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LanguageDetected extends $dara.Model {
  type?: string;
  eventId?: string;
  sessionId?: string;
  segmentId?: string;
  direction?: string;
  sourceLanguage?: string;
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      sessionId: 'session_id',
      segmentId: 'segment_id',
      direction: 'direction',
      sourceLanguage: 'source_language',
      targetLanguage: 'target_language',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

