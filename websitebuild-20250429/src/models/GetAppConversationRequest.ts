// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppConversationRequest extends $dara.Model {
  /**
   * @remarks
   * Bot ID
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      conversationId: 'ConversationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      conversationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

