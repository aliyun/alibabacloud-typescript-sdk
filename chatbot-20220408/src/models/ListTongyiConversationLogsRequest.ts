// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTongyiConversationLogsRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  robotInstanceId?: string;
  /**
   * @remarks
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

