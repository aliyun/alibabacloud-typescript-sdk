// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConnectionModels extends $dara.Model {
  /**
   * @remarks
   * 模型展示名称
   */
  displayName?: string;
  /**
   * @remarks
   * 最大上下文长度
   */
  maxModelLength?: number;
  /**
   * @remarks
   * 模型名
   */
  model?: string;
  /**
   * @remarks
   * 模型类型
   */
  modelType?: string;
  /**
   * @remarks
   * 是否支持Reasoning
   */
  supportReasoning?: boolean;
  /**
   * @remarks
   * 是否支持输出Schema
   */
  supportResponseSchema?: boolean;
  /**
   * @remarks
   * 是否支持Vision
   */
  supportVision?: boolean;
  /**
   * @remarks
   * 是否支持ToolCall
   */
  toolCall?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      maxModelLength: 'MaxModelLength',
      model: 'Model',
      modelType: 'ModelType',
      supportReasoning: 'SupportReasoning',
      supportResponseSchema: 'SupportResponseSchema',
      supportVision: 'SupportVision',
      toolCall: 'ToolCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      maxModelLength: 'number',
      model: 'string',
      modelType: 'string',
      supportReasoning: 'boolean',
      supportResponseSchema: 'boolean',
      supportVision: 'boolean',
      toolCall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionResourceMeta extends $dara.Model {
  /**
   * @remarks
   * 资源实例ID
   */
  instanceId?: string;
  /**
   * @remarks
   * 资源实例名称
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Connection extends $dara.Model {
  accessibility?: string;
  configs?: { [key: string]: string };
  connectionId?: string;
  connectionName?: string;
  connectionType?: string;
  creator?: string;
  customType?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  models?: ConnectionModels[];
  resourceMeta?: ConnectionResourceMeta;
  secrets?: { [key: string]: string };
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      configs: 'Configs',
      connectionId: 'ConnectionId',
      connectionName: 'ConnectionName',
      connectionType: 'ConnectionType',
      creator: 'Creator',
      customType: 'CustomType',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      models: 'Models',
      resourceMeta: 'ResourceMeta',
      secrets: 'Secrets',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      connectionId: 'string',
      connectionName: 'string',
      connectionType: 'string',
      creator: 'string',
      customType: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      models: { 'type': 'array', 'itemType': ConnectionModels },
      resourceMeta: ConnectionResourceMeta,
      secrets: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    if(this.resourceMeta && typeof (this.resourceMeta as any).validate === 'function') {
      (this.resourceMeta as any).validate();
    }
    if(this.secrets) {
      $dara.Model.validateMap(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

