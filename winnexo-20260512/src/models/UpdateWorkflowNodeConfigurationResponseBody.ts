// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowNodeConfigurationResponseBodyDefaultExecutor extends $dara.Model {
  /**
   * @remarks
   * USER 为正整数平台用户ID字符串；AGENT 为空间数字员工技术名称
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * USER 真人、AGENT 数字员工或历史 SYSTEM 系统执行人；SYSTEM仅用于响应
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

export class UpdateWorkflowNodeConfigurationResponseBodyEffectiveExecutor extends $dara.Model {
  /**
   * @remarks
   * USER 为正整数平台用户ID字符串；AGENT 为空间数字员工技术名称
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * USER 真人、AGENT 数字员工或历史 SYSTEM 系统执行人；SYSTEM仅用于响应
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

export class UpdateWorkflowNodeConfigurationResponseBodyOverridesExecutor extends $dara.Model {
  /**
   * @remarks
   * USER 为正整数平台用户ID字符串；AGENT 为空间数字员工技术名称
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * USER 真人、AGENT 数字员工或历史 SYSTEM 系统执行人；SYSTEM仅用于响应
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

export class UpdateWorkflowNodeConfigurationResponseBodyOverrides extends $dara.Model {
  /**
   * @remarks
   * 覆盖执行主体；null为默认
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  executor?: UpdateWorkflowNodeConfigurationResponseBodyOverridesExecutor;
  /**
   * @remarks
   * 覆盖模型运行档；null为默认
   * 
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @remarks
   * 覆盖负责人ID列表；null为默认
   * 
   * @example
   * [10001]
   */
  responsibleUserIds?: number[];
  static names(): { [key: string]: string } {
    return {
      executor: 'executor',
      model: 'model',
      responsibleUserIds: 'responsibleUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executor: UpdateWorkflowNodeConfigurationResponseBodyOverridesExecutor,
      model: 'string',
      responsibleUserIds: { 'type': 'array', 'itemType': 'number' },
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

export class UpdateWorkflowNodeConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * 当前用户是否可编辑此节点
   * 
   * @example
   * true
   */
  canEdit?: boolean;
  /**
   * @remarks
   * 公共业务状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 配置版本；更新或恢复时作为expectedVersion
   * 
   * @example
   * 3
   */
  configVersion?: number;
  /**
   * @remarks
   * 模板默认执行主体
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  defaultExecutor?: UpdateWorkflowNodeConfigurationResponseBodyDefaultExecutor;
  /**
   * @remarks
   * 模板默认模型运行档
   * 
   * @example
   * qwen-max
   */
  defaultModel?: string;
  /**
   * @remarks
   * 模板默认负责人用户ID列表
   * 
   * @example
   * [10001]
   */
  defaultResponsibleUserIds?: string[];
  /**
   * @remarks
   * 当前生效的执行主体
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  effectiveExecutor?: UpdateWorkflowNodeConfigurationResponseBodyEffectiveExecutor;
  /**
   * @remarks
   * 当前生效的模型运行档
   * 
   * @example
   * qwen-max-plus
   */
  effectiveModel?: string;
  /**
   * @remarks
   * 当前生效的负责人用户ID列表
   * 
   * @example
   * [10001]
   */
  effectiveResponsibleUserIds?: string[];
  /**
   * @remarks
   * 当前物理计划ID
   * 
   * @example
   * inst_2081
   */
  instanceId?: string;
  /**
   * @remarks
   * 公共错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 业务节点key
   * 
   * @example
   * node_7f3a2c
   */
  nodeId?: string;
  /**
   * @remarks
   * 实例覆盖值；字段为null时使用模板默认值
   * 
   * @example
   * {"model":"qwen-max-plus"}
   */
  overrides?: UpdateWorkflowNodeConfigurationResponseBodyOverrides;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 状态刷新游标，不能作为配置版本
   * 
   * @example
   * 8
   */
  stateVersion?: number;
  /**
   * @remarks
   * 最后配置更新时间ISO8601；从未更新时为空
   * 
   * @example
   * 2026-11-05T08:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * 最后更新配置的平台用户ID；从未更新时为空
   * 
   * @example
   * 10001
   */
  updatedBy?: number;
  static names(): { [key: string]: string } {
    return {
      canEdit: 'canEdit',
      code: 'code',
      configVersion: 'configVersion',
      defaultExecutor: 'defaultExecutor',
      defaultModel: 'defaultModel',
      defaultResponsibleUserIds: 'defaultResponsibleUserIds',
      effectiveExecutor: 'effectiveExecutor',
      effectiveModel: 'effectiveModel',
      effectiveResponsibleUserIds: 'effectiveResponsibleUserIds',
      instanceId: 'instanceId',
      message: 'message',
      nodeId: 'nodeId',
      overrides: 'overrides',
      requestId: 'requestId',
      stateVersion: 'stateVersion',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canEdit: 'boolean',
      code: 'string',
      configVersion: 'number',
      defaultExecutor: UpdateWorkflowNodeConfigurationResponseBodyDefaultExecutor,
      defaultModel: 'string',
      defaultResponsibleUserIds: { 'type': 'array', 'itemType': 'string' },
      effectiveExecutor: UpdateWorkflowNodeConfigurationResponseBodyEffectiveExecutor,
      effectiveModel: 'string',
      effectiveResponsibleUserIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      message: 'string',
      nodeId: 'string',
      overrides: UpdateWorkflowNodeConfigurationResponseBodyOverrides,
      requestId: 'string',
      stateVersion: 'number',
      updatedAt: 'string',
      updatedBy: 'number',
    };
  }

  validate() {
    if(this.defaultExecutor && typeof (this.defaultExecutor as any).validate === 'function') {
      (this.defaultExecutor as any).validate();
    }
    if(Array.isArray(this.defaultResponsibleUserIds)) {
      $dara.Model.validateArray(this.defaultResponsibleUserIds);
    }
    if(this.effectiveExecutor && typeof (this.effectiveExecutor as any).validate === 'function') {
      (this.effectiveExecutor as any).validate();
    }
    if(Array.isArray(this.effectiveResponsibleUserIds)) {
      $dara.Model.validateArray(this.effectiveResponsibleUserIds);
    }
    if(this.overrides && typeof (this.overrides as any).validate === 'function') {
      (this.overrides as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

