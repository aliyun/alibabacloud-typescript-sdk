// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVisitorChatMessagesResponseBodyDataMessages } from "./ListVisitorChatMessagesResponseBodyDataMessages";


export class ListVisitorChatMessagesResponseBodyData extends $dara.Model {
  messages?: ListVisitorChatMessagesResponseBodyDataMessages[];
  /**
   * @example
   * 1737193352340::7463707254.EAUNIT
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
      messages: { 'type': 'array', 'itemType': ListVisitorChatMessagesResponseBodyDataMessages },
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

