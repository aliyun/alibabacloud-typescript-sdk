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
   * Indicates whether tool calling is supported. Valid values:
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

export class UpdateConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configuration. The connection configuration is in the key-value format. The keys configured for different connection types are different. For more information, see the supplementary description of the request parameters in CreateConnection.
   */
  configs?: { [key: string]: string };
  /**
   * @remarks
   * The connection description.
   */
  description?: string;
  /**
   * @remarks
   * The models.
   */
  models?: UpdateConnectionRequestModels[];
  /**
   * @remarks
   * The key-value configuration to be encrypted, such as the database logon password and the key for model connection.
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

