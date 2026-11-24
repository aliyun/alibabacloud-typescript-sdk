// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationItemInputAudioTranscriptionText extends $dara.Model {
  type?: string;
  eventId?: string;
  itemId?: string;
  contentIndex?: number;
  text?: string;
  stash?: string;
  language?: string;
  emotion?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      itemId: 'item_id',
      contentIndex: 'content_index',
      text: 'text',
      stash: 'stash',
      language: 'language',
      emotion: 'emotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      itemId: 'string',
      contentIndex: 'number',
      text: 'string',
      stash: 'string',
      language: 'string',
      emotion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

