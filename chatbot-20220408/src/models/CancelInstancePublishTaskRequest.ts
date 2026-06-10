// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelInstancePublishTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. You can obtain the key from the Business Management page of your Alibaba Cloud account. If you omit this parameter, the default business space is used.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8521
   */
  id?: number;
  /**
   * @remarks
   * The unique ID of the chatbot.
   * 
   * @example
   * chatbot-cn-mp90s2lrk00050
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

