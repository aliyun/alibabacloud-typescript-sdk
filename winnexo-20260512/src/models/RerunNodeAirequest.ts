// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunNodeAIRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The physical workflow instance ID (planId).
   * 
   * This parameter is required.
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The key of the failed node (nodeKey).
   * 
   * This parameter is required.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      instanceId: 'instanceId',
      nodeId: 'nodeId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      instanceId: 'string',
      nodeId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

