// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RerunWorkflowNodeRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间ID
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 重跑起始节点 key，包含固定规划节点和业务执行节点
   * 
   * This parameter is required.
   * 
   * @example
   * query.amount
   */
  nodeKey?: string;
  /**
   * @remarks
   * 工作项当前物理计划ID
   * 
   * This parameter is required.
   * 
   * @example
   * plan_v3
   */
  planId?: string;
  /**
   * @remarks
   * 租户ID，缺省使用调用方默认租户
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

