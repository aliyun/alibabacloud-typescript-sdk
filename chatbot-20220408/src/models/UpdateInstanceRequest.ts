// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
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
   * The remarks of the chatbot to update.
   * 
   * @example
   * A chatbot for consumer Q&A
   */
  introduction?: string;
  /**
   * @remarks
   * The name of the chatbot to update. The name can be up to 50 characters in length.
   * 
   * @example
   * Intelligent-Customer-Service-C
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      introduction: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

