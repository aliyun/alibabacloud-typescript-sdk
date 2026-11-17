// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkItemRunSummariesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The node key.
   * 
   * @example
   * query.amount
   */
  nodeKey?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the work item.
   * 
   * This parameter is required.
   * 
   * @example
   * wi_0123456789ab4cde
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      nodeKey: 'nodeKey',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      nodeKey: 'string',
      tenantId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

