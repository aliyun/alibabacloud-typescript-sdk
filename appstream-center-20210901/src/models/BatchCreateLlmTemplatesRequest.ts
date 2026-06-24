// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateLlmTemplatesRequestLlmTemplateItems extends $dara.Model {
  /**
   * @remarks
   * The model configuration JSON object.
   * 
   * @example
   * {
   * 	"id": "qwen3.6-plus",
   * 	"cost": {
   * 		"input": 0,
   * 		"output": 0,
   * 		"cacheRead": 0,
   * 		"cacheWrite": 0
   * 	},
   * 	"name": "Qwen3.6-Plus",
   * 	"input": ["image", "text"],
   * 	"compat": {
   * 		"supportsUsageInStreaming": true
   * 	},
   * 	"maxTokens": 65536,
   * 	"reasoning": false,
   * 	"contextWindow": 1000000
   * }
   */
  config?: string;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * 千问Plus系列模型
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to set this model as the default model. Each model group can have at most one default model.
   * 
   * @example
   * false
   */
  isDefaultModel?: boolean;
  /**
   * @remarks
   * The model code, which must be unique within the same provider.
   * 
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3.6-Plus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      isDefaultModel: 'IsDefaultModel',
      llmCode: 'LlmCode',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      isDefaultModel: 'boolean',
      llmCode: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateLlmTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of model configurations to create.
   */
  llmTemplateItems?: BatchCreateLlmTemplatesRequestLlmTemplateItems[];
  /**
   * @remarks
   * The ID of the associated model group.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The ID of the model provider template to which the models belong.
   * 
   * This parameter is required.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      llmTemplateItems: 'LlmTemplateItems',
      modelTemplateId: 'ModelTemplateId',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmTemplateItems: { 'type': 'array', 'itemType': BatchCreateLlmTemplatesRequestLlmTemplateItems },
      modelTemplateId: 'string',
      providerTemplateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.llmTemplateItems)) {
      $dara.Model.validateArray(this.llmTemplateItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

