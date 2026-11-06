// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProviderLlmCodesResponseBodyDataLlmInfoListCreditMultiplier extends $dara.Model {
  /**
   * @remarks
   * The upper limit of the multiplier. An empty value indicates no upper limit. For example, if the minimum multiplier is 1 and the maximum multiplier is empty, it is displayed as starting from 1x.
   * 
   * @example
   * 2
   */
  max?: number;
  /**
   * @remarks
   * The lower limit of the multiplier. If this value is equal to the maximum multiplier, it is a fixed multiplier. For example, if both the minimum and maximum multipliers are 2, it is displayed as 2x.
   * 
   * @example
   * 2
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

export class ListModelProviderLlmCodesResponseBodyDataLlmInfoListInferenceMetadata extends $dara.Model {
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

export class ListModelProviderLlmCodesResponseBodyDataLlmInfoListPricesPrices extends $dara.Model {
  /**
   * @remarks
   * The price in string format, such as 0.2.
   * 
   * @example
   * 0.2
   */
  price?: string;
  /**
   * @remarks
   * The name of the price item, such as input, output, or image generation.
   * 
   * @example
   * Input
   */
  priceName?: string;
  /**
   * @remarks
   * The price unit, such as per image or per 1,000 tokens.
   * 
   * @example
   * Per image
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

export class ListModelProviderLlmCodesResponseBodyDataLlmInfoListPrices extends $dara.Model {
  /**
   * @remarks
   * The list of prices within the range.
   */
  prices?: ListModelProviderLlmCodesResponseBodyDataLlmInfoListPricesPrices[];
  /**
   * @remarks
   * The name of the range, such as Default or 0-1M tokens.
   * 
   * @example
   * Default
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
      prices: { 'type': 'array', 'itemType': ListModelProviderLlmCodesResponseBodyDataLlmInfoListPricesPrices },
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

export class ListModelProviderLlmCodesResponseBodyDataLlmInfoList extends $dara.Model {
  /**
   * @remarks
   * The credit consumption multiplier. An empty value indicates that the model does not participate in credit billing.
   */
  creditMultiplier?: ListModelProviderLlmCodesResponseBodyDataLlmInfoListCreditMultiplier;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * Qwen image generation model that supports text-to-image and image editing capabilities
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
  inferenceMetadata?: ListModelProviderLlmCodesResponseBodyDataLlmInfoListInferenceMetadata;
  /**
   * @remarks
   * The LLM code, such as qwen-image-2.0.
   * 
   * @example
   * qwen-image-2.0
   */
  llmCode?: string;
  /**
   * @remarks
   * The model brand, such as Qwen, Wanx, or DeepSeek. This parameter is returned only for models annotated in the platform-side model pool.
   * 
   * @example
   * qwen
   */
  modelBrand?: string;
  /**
   * @remarks
   * The model information, such as the context window size and the maximum number of input/output tokens.
   * 
   * @example
   * {"contextWindow":1000000,"maxInputTokens":991808,"maxReasoningTokens":262144,"reasoningMaxInputTokens":983616,"maxOutputTokens":131072,"reasoningMaxOutputTokens":131072}
   */
  modelInfo?: { [key: string]: any };
  /**
   * @remarks
   * The model series, such as Qwen-Max or DeepSeek. This parameter is returned only for the wuying-credit provider.
   * 
   * @example
   * Qwen-Max
   */
  modelSeries?: string;
  /**
   * @remarks
   * The model name, such as Qwen-Image-2.0.
   * 
   * @example
   * Qwen-Image-2.0
   */
  name?: string;
  /**
   * @remarks
   * The list of price information.
   */
  prices?: ListModelProviderLlmCodesResponseBodyDataLlmInfoListPrices[];
  /**
   * @remarks
   * The time when the model was published, in ISO 8601 format, such as 2026-03-04T06:25:17.000+00:00.
   * 
   * @example
   * 2026-03-04T06:25:17.000+00:00
   */
  publishedTime?: string;
  /**
   * @remarks
   * Indicates whether the model is recommended. Valid values: true (recommended), false (explicitly not recommended), and null (not applicable, such as non-Bailian or unannotated models).
   */
  recommended?: boolean;
  /**
   * @remarks
   * The model risk type. This parameter is returned only when includeRiskInfo is set to true.
   * 
   * @example
   * Normal
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      creditMultiplier: 'CreditMultiplier',
      description: 'Description',
      features: 'Features',
      inferenceMetadata: 'InferenceMetadata',
      llmCode: 'LlmCode',
      modelBrand: 'ModelBrand',
      modelInfo: 'ModelInfo',
      modelSeries: 'ModelSeries',
      name: 'Name',
      prices: 'Prices',
      publishedTime: 'PublishedTime',
      recommended: 'Recommended',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditMultiplier: ListModelProviderLlmCodesResponseBodyDataLlmInfoListCreditMultiplier,
      description: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      inferenceMetadata: ListModelProviderLlmCodesResponseBodyDataLlmInfoListInferenceMetadata,
      llmCode: 'string',
      modelBrand: 'string',
      modelInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelSeries: 'string',
      name: 'string',
      prices: { 'type': 'array', 'itemType': ListModelProviderLlmCodesResponseBodyDataLlmInfoListPrices },
      publishedTime: 'string',
      recommended: 'boolean',
      riskType: 'string',
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

export class ListModelProviderLlmCodesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of LLM information.
   */
  llmInfoList?: ListModelProviderLlmCodesResponseBodyDataLlmInfoList[];
  static names(): { [key: string]: string } {
    return {
      llmInfoList: 'LlmInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmInfoList: { 'type': 'array', 'itemType': ListModelProviderLlmCodesResponseBodyDataLlmInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.llmInfoList)) {
      $dara.Model.validateArray(this.llmInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProviderLlmCodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated data object that contains the list of LLM information.
   */
  data?: ListModelProviderLlmCodesResponseBodyData;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records after filtering.
   * 
   * @example
   * 128
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
      data: ListModelProviderLlmCodesResponseBodyData,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

