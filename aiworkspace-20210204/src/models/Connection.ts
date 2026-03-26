// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConnectionModels extends $dara.Model {
  /**
   * @remarks
   * The display name of the model.
   */
  displayName?: string;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * *   LLM
   * *   Embedding
   * *   ReRank
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * Indicates whether tool calling was supported. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  toolCall?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      model: 'Model',
      modelType: 'ModelType',
      toolCall: 'ToolCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      model: 'string',
      modelType: 'string',
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
  extra?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-2vc1***v1zaqgzol
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
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
  /**
   * @remarks
   * The workspace accessibility. Valid values:
   * 
   * *   PRIVATE (default): accessible only to you and the administrator of the workspace.
   * *   PUBLIC: accessible to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The connection configuration.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * conn-pai9m***mi47
   */
  connectionId?: string;
  /**
   * @remarks
   * The connection name.
   */
  connectionName?: string;
  /**
   * @remarks
   * The connection type. Valid values:
   * 
   * *   DashScopeConnection
   * *   OpenLLMConnection
   * *   MilvusConnection
   * *   OpenSearchConnection
   * *   LindormConnection
   * *   ElasticsearchConnection
   * *   HologresConnection
   * *   RDSConnection
   * *   CustomConnection
   * 
   * @example
   * ElasticsearchConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The connection creator.
   * 
   * @example
   * 20925961****557803
   */
  creator?: string;
  /**
   * @remarks
   * The connection description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the connection was modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the connection was modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The models.
   */
  models?: ConnectionModels[];
  /**
   * @remarks
   * The connection resource. This parameter is used for the connection configuration of the database type.
   */
  resourceMeta?: ConnectionResourceMeta;
  /**
   * @remarks
   * The key-value configuration to be encrypted, such as the database logon password and the key for model connection.
   */
  secrets?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 228**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      configs: 'Configs',
      connectionId: 'ConnectionId',
      connectionName: 'ConnectionName',
      connectionType: 'ConnectionType',
      creator: 'Creator',
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

