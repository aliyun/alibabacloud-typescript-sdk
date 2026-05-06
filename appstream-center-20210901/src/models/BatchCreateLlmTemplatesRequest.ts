// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateLlmTemplatesRequestLlmTemplateItems extends $dara.Model {
  /**
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
  description?: string;
  /**
   * @example
   * false
   */
  isDefaultModel?: boolean;
  /**
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
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
  llmTemplateItems?: BatchCreateLlmTemplatesRequestLlmTemplateItems[];
  /**
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
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

