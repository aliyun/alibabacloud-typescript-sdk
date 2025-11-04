// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageChatTextRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The mode of message sending. Valid values:
   * - online
   * - offline
   * 
   * Default value: offline.
   * 
   * @example
   * online
   */
  mode?: string;
  /**
   * @remarks
   * Specifies whether to archive chat records. Default value: true.
   * 
   * @example
   * true
   */
  needArchiving?: boolean;
  /**
   * @remarks
   * The ID of the user who receives the message. The ID can be up to 64 bytes in length and can contain letters and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * 60000042053
   */
  receiverId?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  sessionId?: string;
  /**
   * @remarks
   * The content of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello
   */
  text?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * - announcement: notification.
   * - custom: custom message.
   * 
   * This parameter is required.
   * 
   * @example
   * announcement
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      mode: 'Mode',
      needArchiving: 'NeedArchiving',
      receiverId: 'ReceiverId',
      sessionId: 'SessionId',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      mode: 'string',
      needArchiving: 'boolean',
      receiverId: 'string',
      sessionId: 'string',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

