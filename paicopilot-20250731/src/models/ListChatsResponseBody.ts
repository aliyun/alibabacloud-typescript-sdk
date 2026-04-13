// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Chat } from "./Chat";


export class ListChatsResponseBody extends $dara.Model {
  chats?: Chat[];
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chats: 'Chats',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chats: { 'type': 'array', 'itemType': Chat },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chats)) {
      $dara.Model.validateArray(this.chats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

