// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLlmTemplatesResponseBodyDataCreditMultiplier extends $dara.Model {
  /**
   * @remarks
   * The maximum multiplier. A null value indicates no upper limit. For example, Min=1 with Max as null is displayed as 1x and above.
   */
  max?: number;
  /**
   * @remarks
   * The minimum multiplier. When equal to Max, it represents a fixed multiplier. For example, Min=Max=2 is displayed as 2x.
   */
  min?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmTemplatesResponseBodyDataInferenceMetadata extends $dara.Model {
  /**
   * @remarks
   * The list of request modalities, such as Text, Image, and Audio.
   */
  requestModality?: string[];
  /**
   * @remarks
   * The list of response modalities, such as Text, Image, and Audio.
   */
  responseModality?: string[];
  static names(): { [key: string]: string } {
    return {
      requestModality: 'RequestModality',
      responseModality: 'ResponseModality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestModality: { 'type': 'array', 'itemType': 'string' },
      responseModality: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requestModality)) {
      $dara.Model.validateArray(this.requestModality);
    }
    if(Array.isArray(this.responseModality)) {
      $dara.Model.validateArray(this.responseModality);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmTemplatesResponseBodyDataPricesPrices extends $dara.Model {
  /**
   * @remarks
   * The price in string format, such as 0.2.
   */
  price?: string;
  /**
   * @remarks
   * The price name, such as Input, Output, or Image Generation.
   */
  priceName?: string;
  /**
   * @remarks
   * The price unit, such as per image or per thousand tokens.
   */
  priceUnit?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
      priceName: 'PriceName',
      priceUnit: 'PriceUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'string',
      priceName: 'string',
      priceUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmTemplatesResponseBodyDataPrices extends $dara.Model {
  /**
   * @remarks
   * The list of prices within the range.
   */
  prices?: ListLlmTemplatesResponseBodyDataPricesPrices[];
  /**
   * @remarks
   * The range name, such as Default or 0-1M tokens.
   */
  rangeName?: string;
  static names(): { [key: string]: string } {
    return {
      prices: 'Prices',
      rangeName: 'RangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prices: { 'type': 'array', 'itemType': ListLlmTemplatesResponseBodyDataPricesPrices },
      rangeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prices)) {
      $dara.Model.validateArray(this.prices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmTemplatesResponseBodyData extends $dara.Model {
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
   * The credit consumption multiplier (rate). A null value indicates that the model does not participate in credit-based billing.
   */
  creditMultiplier?: ListLlmTemplatesResponseBodyDataCreditMultiplier;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Qwen Plus series models
   */
  description?: string;
  /**
   * @remarks
   * The list of model features, such as function-calling, web-search, and structured-outputs.
   */
  features?: string[];
  /**
   * @remarks
   * The inference metadata, including request and response modalities.
   */
  inferenceMetadata?: ListLlmTemplatesResponseBodyDataInferenceMetadata;
  /**
   * @remarks
   * Indicates whether this is the default model under the associated model group.
   * 
   * @example
   * true
   */
  isDefaultModel?: boolean;
  /**
   * @remarks
   * The model code.
   * 
   * @example
   * qwen3.6-plus
   */
  llmCode?: string;
  /**
   * @remarks
   * The model template ID.
   * 
   * @example
   * llmt-xxxx
   */
  llmTemplateId?: string;
  /**
   * @remarks
   * The model information, including context window size and maximum input/output tokens.
   */
  modelInfo?: { [key: string]: any };
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Qwen3.6-Plus
   */
  name?: string;
  /**
   * @remarks
   * The list of price information.
   */
  prices?: ListLlmTemplatesResponseBodyDataPrices[];
  /**
   * @remarks
   * The ID of the model provider template.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  /**
   * @remarks
   * The publish time in ISO 8601 format, such as 2026-03-04T06:25:17.000+00:00.
   */
  publishedTime?: string;
  /**
   * @remarks
   * The authorization scope of the associated model group. Valid values: ALL_USER (all users), USER_MIXED (specified users and user groups), RESOURCE_MIXED (specified resources). Returned only when SmartModel is set to true.
   */
  refScope?: string;
  /**
   * @remarks
   * The number of route policies configured under this model tier. Returned only when SmartModel is set to true. Returns 0 for tiers without configured policies.
   */
  routePolicyCount?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      creditMultiplier: 'CreditMultiplier',
      description: 'Description',
      features: 'Features',
      inferenceMetadata: 'InferenceMetadata',
      isDefaultModel: 'IsDefaultModel',
      llmCode: 'LlmCode',
      llmTemplateId: 'LlmTemplateId',
      modelInfo: 'ModelInfo',
      name: 'Name',
      prices: 'Prices',
      providerTemplateId: 'ProviderTemplateId',
      publishedTime: 'PublishedTime',
      refScope: 'RefScope',
      routePolicyCount: 'RoutePolicyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      creditMultiplier: ListLlmTemplatesResponseBodyDataCreditMultiplier,
      description: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      inferenceMetadata: ListLlmTemplatesResponseBodyDataInferenceMetadata,
      isDefaultModel: 'boolean',
      llmCode: 'string',
      llmTemplateId: 'string',
      modelInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      prices: { 'type': 'array', 'itemType': ListLlmTemplatesResponseBodyDataPrices },
      providerTemplateId: 'string',
      publishedTime: 'string',
      refScope: 'string',
      routePolicyCount: 'number',
    };
  }

  validate() {
    if(this.creditMultiplier && typeof (this.creditMultiplier as any).validate === 'function') {
      (this.creditMultiplier as any).validate();
    }
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(this.inferenceMetadata && typeof (this.inferenceMetadata as any).validate === 'function') {
      (this.inferenceMetadata as any).validate();
    }
    if(this.modelInfo) {
      $dara.Model.validateMap(this.modelInfo);
    }
    if(Array.isArray(this.prices)) {
      $dara.Model.validateArray(this.prices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLlmTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data objects.
   */
  data?: ListLlmTemplatesResponseBodyData[];
  /**
   * @remarks
   * The current page number of the query results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
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

