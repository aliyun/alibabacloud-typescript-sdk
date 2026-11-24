// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponseTextDone extends $dara.Model {
  type?: string;
  eventId?: string;
  responseId?: string;
  itemId?: string;
  outputIndex?: number;
  contentIndex?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      responseId: 'response_id',
      itemId: 'item_id',
      outputIndex: 'output_index',
      contentIndex: 'content_index',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      responseId: 'string',
      itemId: 'string',
      outputIndex: 'number',
      contentIndex: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

