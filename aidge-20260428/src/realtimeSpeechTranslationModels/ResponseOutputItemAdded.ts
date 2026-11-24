// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResponseOutputItemAddedItemContent extends $dara.Model {
  type?: string;
  text?: string;
  transcript?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      text: 'text',
      transcript: 'transcript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      text: 'string',
      transcript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseOutputItemAddedItem extends $dara.Model {
  id?: string;
  object?: string;
  type?: string;
  status?: string;
  role?: string;
  content?: ResponseOutputItemAddedItemContent[];
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      object: 'object',
      type: 'type',
      status: 'status',
      role: 'role',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      object: 'string',
      type: 'string',
      status: 'string',
      role: 'string',
      content: { 'type': 'array', 'itemType': ResponseOutputItemAddedItemContent },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResponseOutputItemAdded extends $dara.Model {
  type?: string;
  eventId?: string;
  responseId?: string;
  outputIndex?: number;
  item?: ResponseOutputItemAddedItem;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      responseId: 'response_id',
      outputIndex: 'output_index',
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      responseId: 'string',
      outputIndex: 'number',
      item: ResponseOutputItemAddedItem,
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

