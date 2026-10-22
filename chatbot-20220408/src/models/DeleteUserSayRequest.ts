// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserSayRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not set, the default business space is accessed. You can obtain the key value on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 343df2sdf23
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5564564546
   */
  intentId?: number;
  /**
   * @remarks
   * The utterance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4562121234
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
      userSayId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

