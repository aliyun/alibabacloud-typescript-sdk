// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectionRequestModels extends $dara.Model {
  /**
   * @remarks
   * The display name of the model.
   * 
   * @example
   * car_tag
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
   * - LLM
   * 
   * - Embedding
   * 
   * - ReRank
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

export class UpdateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the connection, specified as key-value pairs. The keys in the Configs parameter vary based on the connection type. For more information, see the request parameters in the CreateConnection topic.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The description of the connection.
   * 
   * @example
   * Connection for data labeling.
   */
  description?: string;
  /**
   * @remarks
   * A list of model information.
   */
  models?: UpdateConnectionRequestModels[];
  /**
   * @remarks
   * Key-value pairs that require encryption, such as database logon passwords and keys for model connections.
   */
  secrets?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      description: 'Description',
      models: 'Models',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      models: { 'type': 'array', 'itemType': UpdateConnectionRequestModels },
      secrets: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.configs) {
      $dara.Model.validateMap(this.configs);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
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

