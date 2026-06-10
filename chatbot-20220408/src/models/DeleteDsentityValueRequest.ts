// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDSEntityValueRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent key. If omitted, the system uses the default Agent. You can get this key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique identifier of the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 345346223452
   */
  entityId?: number;
  /**
   * @remarks
   * The unique identifier of the entity value.
   * 
   * This parameter is required.
   * 
   * @example
   * 3453453452
   */
  entityValueId?: number;
  /**
   * @remarks
   * The unique identifier of the instance.
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

