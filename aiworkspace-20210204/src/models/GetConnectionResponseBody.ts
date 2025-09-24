// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionResponseBodyModels extends $dara.Model {
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
   * Indicates whether a tool can be called by using ToolCall. Valid values:
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

export class GetConnectionResponseBodyResourceMeta extends $dara.Model {
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

export class GetConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource accessibility. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
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
   * The type of the connection. Valid values:
   * 
   * *   DashScopeConnection: Alibaba Cloud Model Studio connection.
   * *   OpenLLMConnection: Open source model connection.
   * *   MilvusConnection: Milvus connection.
   * *   OpenSearchConnection: OpenSearch connection.
   * *   LindormConnection: Lindorm connection.
   * *   ElasticsearchConnection: Elasticsearch connection.
   * *   HologresConnection: Hologres connection.
   * *   RDSConnection: RDS connection.
   * *   CustomConnection: Custom connection.
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
   * The connection description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the connection is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the connection is modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2025-03-07T07:54:56Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The models, which apply to model service connections.
   */
  models?: GetConnectionResponseBodyModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The instance resource information of the connection, which applies to database connections.
   */
  resourceMeta?: GetConnectionResponseBodyResourceMeta;
  /**
   * @remarks
   * The encrypted configuration, in key-value pairs. Examples: the database logon password and the key of the model connection.
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

