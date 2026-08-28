// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TongyiChatDebugInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. Obtain the key value from the business management page of the primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-7QuUfaqMQe
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the response message in the current session.
   * 
   * This parameter is required.
   * 
   * @example
   * 396E74B3-D84B-46CE-9E51-91C06AD22E31
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

