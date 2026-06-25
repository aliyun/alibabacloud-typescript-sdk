// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionResponseBodyModels extends $dara.Model {
  /**
   * @remarks
   * The display name of the model.
   * 
   * @example
   * 测试语言模型。
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
   * - LLM: A large language model (LLM).
   * 
   * - Embedding: An embedding model.
   * 
   * - ReRank: A reranking model.
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * Indicates whether tool calling is supported. Valid values:
   * 
   * - true: Tool calling is supported.
   * 
   * - false: Tool calling is not supported.
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

export class GetConnectionResponseBodyResourceMeta extends $dara.Model {
  /**
   * @remarks
   * Additional configuration information.
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
   * Test instance.
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

export class GetConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the resource. Valid values:
   * 
   * - PUBLIC: All members in the current workspace can access the resource.
   * 
   * - PRIVATE: Only the creator can access the resource.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The configuration information of the connection.
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
   * Database connection
   */
  connectionName?: string;
  /**
   * @remarks
   * The type of the connection. Valid values:
   * 
   * - DashScopeConnection: A connection to a Model Studio service.
   * 
   * - OpenLLMConnection: A connection to an open-source model.
   * 
   * - MilvusConnection: A connection to Milvus.
   * 
   * - OpenSearchConnection: A connection to OpenSearch.
   * 
   * - LindormConnection: A connection to Lindorm.
   * 
   * - ElasticsearchConnection: A connection to Elasticsearch.
   * 
   * - HologresConnection: A connection to Hologres.
   * 
   * - RDSConnection: A connection to RDS.
   * 
   * - CustomConnection: A custom connection.
   * 
   * @example
   * OpenSearchConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The creator of the connection.
   * 
   * @example
   * 28632***898231
   */
  creator?: string;
  /**
   * @remarks
   * The description of the connection.
   * 
   * @example
   * 用于数据集检索。
   */
  description?: string;
  /**
   * @remarks
   * The UTC time when the connection was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The UTC time when the connection was last modified. The time is in the ISO 8601 format.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The list of models. This parameter is applicable to connections of the model service type.
   */
  models?: GetConnectionResponseBodyModels[];
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The instance resource information of the connection. This parameter is typically used for database connections.
   */
  resourceMeta?: GetConnectionResponseBodyResourceMeta;
  /**
   * @remarks
   * The key-value pairs that need to be encrypted. Examples include the logon password for a database and the key for a model connection.
   */
  secrets?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 11**43
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
      requestId: 'RequestId',
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
      models: { 'type': 'array', 'itemType': GetConnectionResponseBodyModels },
      requestId: 'string',
      resourceMeta: GetConnectionResponseBodyResourceMeta,
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

