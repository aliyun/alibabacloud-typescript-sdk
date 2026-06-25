// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionRequestModels extends $dara.Model {
  /**
   * @remarks
   * The display name of the model.
   * 
   * @example
   * Language model
   */
  displayName?: string;
  /**
   * @remarks
   * The context length.
   * 
   * @example
   * 4096
   */
  maxModelLength?: number;
  /**
   * @remarks
   * The model identifier. This value corresponds to the `model` parameter in an OpenAI API request.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * Specifies whether the model supports deep reasoning and can output the reasoning process as `reasoning_content`.
   * 
   * @example
   * true
   */
  supportReasoning?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports structured output in the OpenAI API\\"s JSON Schema format.
   * 
   * @example
   * true
   */
  supportResponseSchema?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports visual understanding.
   * 
   * @example
   * false
   */
  supportVision?: boolean;
  /**
   * @remarks
   * Specifies whether the model supports tool calling.
   * 
   * @example
   * true
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

export class CreateConnectionRequestResourceMeta extends $dara.Model {
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
   * ld-uf69****9nqjjes
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

export class CreateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The visibility of the workspace. The default value is `PRIVATE`.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Configuration properties for the connection, provided as key-value pairs. The required keys depend on the connection type. For details, see the supplementary parameter information.
   * 
   * This parameter is required.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The name of the connection.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-connection
   */
  connectionName?: string;
  /**
   * @remarks
   * The type of the connection.
   * 
   * @example
   * DashScopeConnection
   */
  connectionType?: string;
  /**
   * @remarks
   * The description of the connection.
   * 
   * @example
   * Open-source LLM service connection.
   */
  description?: string;
  /**
   * @remarks
   * A list of models. This parameter applies to model service connections.
   */
  models?: CreateConnectionRequestModels[];
  /**
   * @remarks
   * Resource metadata for the connection. This parameter is typically used for database connection types.
   */
  resourceMeta?: CreateConnectionRequestResourceMeta;
  /**
   * @remarks
   * Sensitive connection properties that require encryption, such as database credentials or an API key for a model service.
   */
  secrets?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the workspace. To get this ID, call the [`ListWorkspaces`](https://help.aliyun.com/document_detail/449124.html) operation.
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

