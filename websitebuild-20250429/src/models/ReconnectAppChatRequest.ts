// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReconnectAppChatRequest extends $dara.Model {
  /**
   * @remarks
   * The chat record ID.
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
   * 5b7105a2-2999-430b-ba23-ba09149d5434
   */
  conversationId?: string;
  /**
   * @remarks
   * The ID of the last event.
   * 
   * @example
   * 1
   */
  lastEventId?: number;
  /**
   * @remarks
   * The creation time of the latest message.
   * 
   * @example
   * 2025-08-28 10:25:41
   */
  latestMessageCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      lastEventId: 'LastEventId',
      latestMessageCreateTime: 'LatestMessageCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      conversationId: 'string',
      lastEventId: 'number',
      latestMessageCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

