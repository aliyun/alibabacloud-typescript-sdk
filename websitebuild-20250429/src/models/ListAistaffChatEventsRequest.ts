// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatEventsRequest extends $dara.Model {
  /**
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @example
   * 20833ba4-d189-4c50-9a44-a6bcbda2c93b
   */
  chatId?: string;
  /**
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  /**
   * @example
   * event-71ece53b7d474e01b755a9b5fa5305e6
   */
  lastEventId?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      lastEventId: 'LastEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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

