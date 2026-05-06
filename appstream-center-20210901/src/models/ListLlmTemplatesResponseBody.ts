// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesResponseBodyData extends $dara.Model {
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
   * true
   */
  isDefaultModel?: boolean;
  /**
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @example
   * llmt-xxxx
   */
  llmTemplateId?: string;
  /**
   * @example
   * Qwen3.6-Plus
   */
  name?: string;
  /**
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      isDefaultModel: 'IsDefaultModel',
      llmCode: 'LlmCode',
      llmTemplateId: 'LlmTemplateId',
      name: 'Name',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      isDefaultModel: 'boolean',
      llmCode: 'string',
      llmTemplateId: 'string',
      name: 'string',
      providerTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmTemplatesResponseBody extends $dara.Model {
  data?: ListLlmTemplatesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListLlmTemplatesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

