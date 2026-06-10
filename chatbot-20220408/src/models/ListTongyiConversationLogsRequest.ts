// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTongyiConversationLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If omitted, the default business space is used. You can find this key on the Business Management page of your root account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the chatbot instance.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  robotInstanceId?: string;
  /**
   * @remarks
   * The ID of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c3cec23cc8940bc9db4a318c8f4f0aa
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      robotInstanceId: 'RobotInstanceId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      robotInstanceId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

