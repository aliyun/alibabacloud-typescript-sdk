// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReconnectAppChatRequest extends $dara.Model {
  /**
   * @example
   * 20833ba4-d189-4c50-9a44-a6bcbda2c93b
   */
  chatId?: string;
  /**
   * @example
   * 5b7105a2-2999-430b-ba23-ba09149d5434
   */
  conversationId?: string;
  /**
   * @example
   * event-71ece53b7d474e01b755a9b5fa5305e6
   */
  lastEventId?: number;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      lastEventId: 'LastEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      conversationId: 'string',
      lastEventId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

