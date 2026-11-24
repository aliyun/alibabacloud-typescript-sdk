// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConversationItemCreatedItemContent extends $dara.Model {
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

export class ConversationItemCreatedItem extends $dara.Model {
  id?: string;
  object?: string;
  type?: string;
  status?: string;
  role?: string;
  content?: ConversationItemCreatedItemContent[];
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
      content: { 'type': 'array', 'itemType': ConversationItemCreatedItemContent },
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

export class ConversationItemCreated extends $dara.Model {
  type?: string;
  eventId?: string;
  previousItemId?: string;
  item?: ConversationItemCreatedItem;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      eventId: 'event_id',
      previousItemId: 'previous_item_id',
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      eventId: 'string',
      previousItemId: 'string',
      item: ConversationItemCreatedItem,
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

