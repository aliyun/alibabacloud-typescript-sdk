// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGroupChatMessagesResponseBodyDataMessages } from "./ListGroupChatMessagesResponseBodyDataMessages";


export class ListGroupChatMessagesResponseBodyData extends $dara.Model {
  messages?: ListGroupChatMessagesResponseBodyDataMessages[];
  /**
   * @example
   * 54d1a616d95a4a01ba58967a9115b649
   */
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      nextPageToken: 'NextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ListGroupChatMessagesResponseBodyDataMessages },
      nextPageToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

