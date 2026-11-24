// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationItemInputAudioTranscriptionFailedError extends $dara.Model {
  code?: string;
  message?: string;
  param?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      param: 'param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      param: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConversationItemInputAudioTranscriptionFailed extends $dara.Model {
  type?: string;
  eventId?: string;
  itemId?: string;
  contentIndex?: number;
  error?: ConversationItemInputAudioTranscriptionFailedError;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      itemId: 'item_id',
      contentIndex: 'content_index',
      error: 'error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      itemId: 'string',
      contentIndex: 'number',
      error: ConversationItemInputAudioTranscriptionFailedError,
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

