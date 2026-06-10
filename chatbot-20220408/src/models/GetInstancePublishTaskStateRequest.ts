// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancePublishTaskStateRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you do not specify this parameter, the default business space is used. You can find the key on the Business Management page of your main account.
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
   * The unique identifier of the bot instance.
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

