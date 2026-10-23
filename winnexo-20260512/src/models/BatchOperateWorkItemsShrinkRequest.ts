// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchOperateWorkItemsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch action.
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  action?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The idempotency key.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  idempotencyKey?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The IDs of the target work items. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  workItemIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      collaborationGroupId: 'collaborationGroupId',
      idempotencyKey: 'idempotencyKey',
      tenantId: 'tenantId',
      workItemIdsShrink: 'workItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      collaborationGroupId: 'string',
      idempotencyKey: 'string',
      tenantId: 'string',
      workItemIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

