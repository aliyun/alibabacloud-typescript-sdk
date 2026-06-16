// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIStaffChatEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * The chat ID. This parameter is optional. If not specified, the latest chat ID is used.
   * 
   * @example
   * 20833ba4-d189-4c50-9a44-a6bcbda2c93b
   */
  chatId?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  /**
   * @remarks
   * The ID of the last event, used for incremental retrieval.
   * 
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

