// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndAttachPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of target resource IDs to attach.
   * 
   * This parameter is required.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * The type of the target resource to attach.
   * 
   * This parameter is required.
   * 
   * @example
   * GatewayRoute
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * This parameter is required.
   * 
   * @example
   * AiFallback
   */
  className?: string;
  /**
   * @remarks
   * The policy configuration content (JSON string).
   * 
   * This parameter is required.
   * 
   * @example
   * {"serviceConfigs":[...]}
   */
  config?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 主路由失败时回退
   */
  description?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-test
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * my-fallback-policy
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      className: 'className',
      config: 'config',
      description: 'description',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      className: 'string',
      config: 'string',
      description: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

