// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetWorkflowNodeConfigurationRequest extends $dara.Model {
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
   * 读取接口返回的configVersion；非负整数；版本冲突须刷新
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  expectedVersion?: number;
  /**
   * @remarks
   * 当前物理计划ID（planId）
   * 
   * This parameter is required.
   * 
   * @example
   * inst_2081
   */
  instanceId?: string;
  /**
   * @remarks
   * 业务节点key（nodeKey）
   * 
   * This parameter is required.
   * 
   * @example
   * node_7f3a2c
   */
  nodeId?: string;
  /**
   * @remarks
   * 租户ID；缺省使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      expectedVersion: 'expectedVersion',
      instanceId: 'instanceId',
      nodeId: 'nodeId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      expectedVersion: 'number',
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

