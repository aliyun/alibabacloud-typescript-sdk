// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDSEntityValueRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the workspace. If this parameter is not specified, the default workspace is accessed. You can obtain the key on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 345346223452
   */
  entityId?: number;
  /**
   * @remarks
   * The entity member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3453453452
   */
  entityValueId?: number;
  /**
   * @remarks
   * The robot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      entityValueId: 'number',
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

