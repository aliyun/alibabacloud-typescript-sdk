// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The key of the starting node for the rerun, which includes fixed planning nodes and business execution nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * query.amount
   */
  nodeKey?: string;
  /**
   * @remarks
   * The current physical plan ID after the rerun. Rerunning a fixed planning node may generate a new plan. Use this value for subsequent queries.
   * 
   * This parameter is required.
   * 
   * @example
   * plan_v3
   */
  planId?: string;
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
      nodeKey: 'nodeKey',
      planId: 'planId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      nodeKey: 'string',
      planId: 'string',
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

