// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowNodeConfigurationShrinkRequest extends $dara.Model {
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
   * 节点执行人；省略保持，null恢复默认；与负责人、模型至少修改一项
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  executorShrink?: string;
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
   * 模型模式；quick归一化standard；省略保持，null恢复默认
   * 
   * @example
   * standard
   */
  model?: string;
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
   * 节点负责人用户ID列表，非空正整数数组；省略保持，null恢复默认
   * 
   * @example
   * [10001]
   */
  responsibleUserIdsShrink?: string;
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
      executorShrink: 'executor',
      expectedVersion: 'expectedVersion',
      instanceId: 'instanceId',
      model: 'model',
      nodeId: 'nodeId',
      responsibleUserIdsShrink: 'responsibleUserIds',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      executorShrink: 'string',
      expectedVersion: 'number',
      instanceId: 'string',
      model: 'string',
      nodeId: 'string',
      responsibleUserIdsShrink: 'string',
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

