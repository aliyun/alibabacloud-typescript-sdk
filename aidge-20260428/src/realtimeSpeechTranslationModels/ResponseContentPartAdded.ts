// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponseContentPartAddedPart extends $dara.Model {
  type?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class ResponseContentPartAdded extends $dara.Model {
  type?: string;
  eventId?: string;
  responseId?: string;
  itemId?: string;
  outputIndex?: number;
  contentIndex?: number;
  part?: ResponseContentPartAddedPart;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      responseId: 'response_id',
      itemId: 'item_id',
      outputIndex: 'output_index',
      contentIndex: 'content_index',
      part: 'part',
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
      part: ResponseContentPartAddedPart,
    };
  }

  validate() {
    if(this.part && typeof (this.part as any).validate === 'function') {
      (this.part as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

