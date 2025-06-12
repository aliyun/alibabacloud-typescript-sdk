// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWaitingChatsResponseBodyDataMessages extends $dara.Model {
  content?: string;
  /**
   * @example
   * c361765f-******-4e07-b81c-4b5d9183fac6
   */
  senderId?: string;
  senderType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      senderId: 'SenderId',
      senderType: 'SenderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      senderId: 'string',
      senderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

