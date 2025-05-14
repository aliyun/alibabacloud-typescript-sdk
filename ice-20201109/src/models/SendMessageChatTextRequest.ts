// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageChatTextRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  AIAgentId?: string;
  /**
   * @example
   * online
   */
  mode?: string;
  /**
   * @example
   * true
   */
  needArchiving?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60000042053
   */
  receiverId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  /**
   * @remarks
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

