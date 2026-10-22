// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppChatRequest extends $dara.Model {
  /**
   * @remarks
   * The bot ID.
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * The chat ID passed in to resume a conversation after execution is interrupted.
   * 
   * @example
   * 3b465fe1-6f06-4899-af9f-d43d9338df25
   */
  chatId?: string;
  /**
   * @remarks
   * The conversation ID. This parameter is required from the second round onward in multi-turn conversation scenarios.
   * 
   * @example
   * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
   */
  conversationId?: string;
  /**
   * @remarks
   * The list of conversation messages in JSON array format.
   * 
   * @example
   * [\\r\\n  {\\r\\n    \\"role\\": \\"user\\",\\r\\n    \\"content\\": \\"Prove that there are only five platonic solids, namely the tetrahedron, octahedron, icosahedron, cube, and dodecahedron.\\"\\r\\n  }\\r\\n]
   */
  messages?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 857240041851344
   */
  siteId?: string;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      chatId: 'ChatId',
      conversationId: 'ConversationId',
      messages: 'Messages',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      chatId: 'string',
      conversationId: 'string',
      messages: 'string',
      siteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

