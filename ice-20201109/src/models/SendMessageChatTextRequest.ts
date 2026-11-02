// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageChatTextRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The sending mode. Valid values:
   * 
   * - online: online message
   * 
   * - offline: offline message
   * 
   * Default value: offline.
   * 
   * @example
   * online
   */
  mode?: string;
  /**
   * @remarks
   * Specifies whether to archive the chat history. Default value: true.
   * 
   * @example
   * true
   */
  needArchiving?: boolean;
  /**
   * @remarks
   * The ID of the user who receives the message. The ID can contain uppercase and lowercase letters and digits and must not exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 60000042053
   */
  receiverId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  sessionId?: string;
  /**
   * @remarks
   * The text content to send.
   * 
   * This parameter is required.
   * 
   * @example
   * hello
   */
  text?: string;
  /**
   * @remarks
   * The type of the message to send. Valid values:
   * 
   * - announcement: proactive notification text
   * 
   * - custom: custom message
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

