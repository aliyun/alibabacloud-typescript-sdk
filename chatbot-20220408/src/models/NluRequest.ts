// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NluRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique identifier of the chatbot.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  /**
   * @remarks
   * The user utterance.
   * 
   * @example
   * How is the weather in Beijing
   */
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      utterance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

