// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchOperateWorkItemsRequest extends $dara.Model {
  /**
   * @remarks
   * 批量动作
   * 
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  action?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 幂等键
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  idempotencyKey?: string;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 目标工作项 ID 列表（1~100 个）
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  workItemIds?: string[];
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      collaborationGroupId: 'collaborationGroupId',
      idempotencyKey: 'idempotencyKey',
      tenantId: 'tenantId',
      workItemIds: 'workItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      collaborationGroupId: 'string',
      idempotencyKey: 'string',
      tenantId: 'string',
      workItemIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.workItemIds)) {
      $dara.Model.validateArray(this.workItemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

