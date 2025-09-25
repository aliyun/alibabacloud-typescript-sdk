// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class SseChatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-dDmF3jcdVf
   */
  appId?: string;
  /**
   * @example
   * TIMEOUT
   */
  command?: string;
  /**
   * @example
   * uid129312098593
   */
  senderId?: string;
  senderNick?: string;
  /**
   * @example
   * 15e04f27-acd7-489d-872f-1d68f7535e33
   */
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  utterance?: string;
  vendorParam?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-g7jspxljq8k909h3
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      command: 'Command',
      senderId: 'SenderId',
      senderNick: 'SenderNick',
      sessionId: 'SessionId',
      utterance: 'Utterance',
      vendorParam: 'VendorParam',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      command: 'string',
      senderId: 'string',
      senderNick: 'string',
      sessionId: 'string',
      utterance: 'string',
      vendorParam: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

