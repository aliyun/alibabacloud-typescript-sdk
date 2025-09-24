// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequestModels extends $dara.Model {
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
   * Specifies whether a tool can be called by using ToolCall. Valid values:
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

export class CreateConnectionRequestResourceMeta extends $dara.Model {
  extra?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-uf69****9nqjjes
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

export class CreateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the workspace. Valid values:
   * 
   * *   PRIVATE: The workspace is accessible only to you and the administrator of the workspace. This is the default value.
   * *   PUBLIC: The workspace is accessible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The connection configurations, in key-value pairs. The key varies based on the connection type. For more information, see the supplementary notes below the request parameters.
   * 
   * This parameter is required.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The connection name.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-connection
   */
  connectionName?: string;
  /**
   * @remarks
   * The connection type. Valid values:
   * 
   * *   DashScopeConnection: Alibaba Cloud Model Studio connection
   * *   OpenLLMConnection: open source model connection
   * *   MilvusConnection: Milvus connection
   * *   OpenSearchConnection: OpenSearch connection
   * *   LindormConnection: Lindorm connection
   * *   ElasticsearchConnection: Elasticsearch connection
   * *   HologresConnection: Hologres connection
   * *   RDSConnection: RDS connection
   * *   CustomConnection: custom connection
   * 
   * @example
   * DashScopeConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The connection description.
   */
  description?: string;
  /**
   * @remarks
   * The models, which apply to model service connections.
   */
  models?: CreateConnectionRequestModels[];
  /**
   * @remarks
   * The instance resource information of the connection, which applies to database connections.
   */
  resourceMeta?: CreateConnectionRequestResourceMeta;
  /**
   * @remarks
   * The configuration to be encrypted. Examples: the database logon account and password and the key of the model service.
   */
  secrets?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 123**45
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      configs: 'Configs',
      connectionName: 'ConnectionName',
      connectionType: 'ConnectionType',
      description: 'Description',
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
      connectionName: 'string',
      connectionType: 'string',
      description: 'string',
      models: { 'type': 'array', 'itemType': CreateConnectionRequestModels },
      resourceMeta: CreateConnectionRequestResourceMeta,
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

