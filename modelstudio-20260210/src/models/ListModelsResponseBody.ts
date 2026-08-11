// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsResponseBodyModelsInferenceMetadata extends $dara.Model {
  requestModality?: string[];
  responseModality?: string[];
  static names(): { [key: string]: string } {
    return {
      requestModality: 'requestModality',
      responseModality: 'responseModality',
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

export class ListModelsResponseBodyModelsModelInfo extends $dara.Model {
  /**
   * @example
   * 10
   */
  contextWindow?: number;
  /**
   * @example
   * 10
   */
  maxInputTokens?: number;
  /**
   * @example
   * 10
   */
  maxOutputTokens?: number;
  /**
   * @example
   * 10
   */
  maxReasoningTokens?: number;
  /**
   * @example
   * 10
   */
  reasoningMaxInputTokens?: number;
  /**
   * @example
   * 10
   */
  reasoningMaxOutputTokens?: number;
  static names(): { [key: string]: string } {
    return {
      contextWindow: 'contextWindow',
      maxInputTokens: 'maxInputTokens',
      maxOutputTokens: 'maxOutputTokens',
      maxReasoningTokens: 'maxReasoningTokens',
      reasoningMaxInputTokens: 'reasoningMaxInputTokens',
      reasoningMaxOutputTokens: 'reasoningMaxOutputTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextWindow: 'number',
      maxInputTokens: 'number',
      maxOutputTokens: 'number',
      maxReasoningTokens: 'number',
      reasoningMaxInputTokens: 'number',
      reasoningMaxOutputTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyModelsPricesPrices extends $dara.Model {
  /**
   * @example
   * 12
   */
  price?: string;
  /**
   * @example
   * input
   */
  priceName?: string;
  /**
   * @example
   * Per 1M tokens
   */
  priceUnit?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      priceName: 'priceName',
      priceUnit: 'priceUnit',
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

export class ListModelsResponseBodyModelsPrices extends $dara.Model {
  prices?: ListModelsResponseBodyModelsPricesPrices[];
  /**
   * @example
   * Default
   */
  rangeName?: string;
  static names(): { [key: string]: string } {
    return {
      prices: 'prices',
      rangeName: 'rangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prices: { 'type': 'array', 'itemType': ListModelsResponseBodyModelsPricesPrices },
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

export class ListModelsResponseBodyModels extends $dara.Model {
  capabilities?: string[];
  /**
   * @example
   * provided by qwen
   */
  description?: string;
  features?: string[];
  inferenceMetadata?: ListModelsResponseBodyModelsInferenceMetadata;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  modelInfo?: ListModelsResponseBodyModelsModelInfo;
  /**
   * @example
   * qwen-plus
   */
  name?: string;
  prices?: ListModelsResponseBodyModelsPrices[];
  /**
   * @example
   * qwen
   */
  provider?: string;
  /**
   * @example
   * 1779268196000
   */
  publishedTime?: number;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      description: 'description',
      features: 'features',
      inferenceMetadata: 'inferenceMetadata',
      model: 'model',
      modelInfo: 'modelInfo',
      name: 'name',
      prices: 'prices',
      provider: 'provider',
      publishedTime: 'publishedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      features: { 'type': 'array', 'itemType': 'string' },
      inferenceMetadata: ListModelsResponseBodyModelsInferenceMetadata,
      model: 'string',
      modelInfo: ListModelsResponseBodyModelsModelInfo,
      name: 'string',
      prices: { 'type': 'array', 'itemType': ListModelsResponseBodyModelsPrices },
      provider: 'string',
      publishedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
    }
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(this.inferenceMetadata && typeof (this.inferenceMetadata as any).validate === 'function') {
      (this.inferenceMetadata as any).validate();
    }
    if(this.modelInfo && typeof (this.modelInfo as any).validate === 'function') {
      (this.modelInfo as any).validate();
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

export class ListModelsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * The specified parameter is invalid
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  models?: ListModelsResponseBodyModels[];
  /**
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @example
   * 36045E0A-551D-592D-B1BC-4C56596CE59E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      errorMessage: 'errorMessage',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      models: 'models',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      models: { 'type': 'array', 'itemType': ListModelsResponseBodyModels },
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

