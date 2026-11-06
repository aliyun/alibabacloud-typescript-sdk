// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowNodeConfigurationRequestExecutor extends $dara.Model {
  /**
   * @remarks
   * USER 为正整数平台用户ID字符串；AGENT 为空间数字员工技术名称
   * 
   * This parameter is required.
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * USER 真人或 AGENT 数字员工
   * 
   * This parameter is required.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowNodeConfigurationRequest extends $dara.Model {
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
  executor?: UpdateWorkflowNodeConfigurationRequestExecutor;
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
  responsibleUserIds?: number[];
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
      executor: 'executor',
      expectedVersion: 'expectedVersion',
      instanceId: 'instanceId',
      model: 'model',
      nodeId: 'nodeId',
      responsibleUserIds: 'responsibleUserIds',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      executor: UpdateWorkflowNodeConfigurationRequestExecutor,
      expectedVersion: 'number',
      instanceId: 'string',
      model: 'string',
      nodeId: 'string',
      responsibleUserIds: { 'type': 'array', 'itemType': 'number' },
      tenantId: 'string',
    };
  }

  validate() {
    if(this.executor && typeof (this.executor as any).validate === 'function') {
      (this.executor as any).validate();
    }
    if(Array.isArray(this.responsibleUserIds)) {
      $dara.Model.validateArray(this.responsibleUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

