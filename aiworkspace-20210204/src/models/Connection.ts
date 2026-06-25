// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConnectionModels extends $dara.Model {
  /**
   * @remarks
   * The model\\"s display name.
   * 
   * @example
   * BGE model deploy.
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
   * - LLM (large language model)
   * 
   * - Embedding (Embedding model)
   * 
   * - ReRank (ReRank model)
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * Indicates whether tool calling is supported. Valid values:
   * 
   * - true: Supported
   * 
   * - false: Not supported
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
  /**
   * @remarks
   * Extra configuration information.
   * 
   * @example
   * {"vpcId":"vpc-xxxx"}
   */
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
   * 
   * @example
   * lindorm-xxxxxxx
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
   * The workspace visibility. Valid values:
   * 
   * - PRIVATE (default): The connection is visible only to you and administrators in the workspace.
   * 
   * - PUBLIC: The connection is visible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The connection configurations.
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
   * The name of the connection.
   * 
   * @example
   * lindorm-connection
   */
  connectionName?: string;
  /**
   * @remarks
   * The connection type. Valid values:
   * 
   * - DashScopeConnection: A service connection to Alibaba Cloud Model Studio.
   * 
   * - OpenLLMConnection: An open source model connection.
   * 
   * - MilvusConnection: A Milvus connection.
   * 
   * - OpenSearchConnection: An OpenSearch connection.
   * 
   * - LindormConnection: A Lindorm connection.
   * 
   * - ElasticsearchConnection: An Elasticsearch connection.
   * 
   * - HologresConnection: A Hologres connection.
   * 
   * - RDSConnection: An RDS connection.
   * 
   * - CustomConnection: A custom connection.
   * 
   * @example
   * ElasticsearchConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The creator of the connection.
   * 
   * @example
   * 20925961****557803
   */
  creator?: string;
  /**
   * @remarks
   * The connection description.
   * 
   * @example
   * This is a description of a database connection.
   */
  description?: string;
  /**
   * @remarks
   * The time when the connection was created. The time is in UTC and follows the ISO 8601 format.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the connection was last modified. The time is in UTC and follows the ISO 8601 format.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The model list.
   */
  models?: ConnectionModels[];
  /**
   * @remarks
   * The resource information for the connection. This usually applies to database connection configurations.
   */
  resourceMeta?: ConnectionResourceMeta;
  /**
   * @remarks
   * The key-value configurations to encrypt, such as database logon passwords and model connection keys.
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

