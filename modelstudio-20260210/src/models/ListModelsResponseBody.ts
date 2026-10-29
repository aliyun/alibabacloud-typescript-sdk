// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsResponseBodyModelsInferenceMetadata extends $dara.Model {
  /**
   * @remarks
   * The input modality. Valid values: Text, Image, Audio, and Video.
   */
  requestModality?: string[];
  /**
   * @remarks
   * The output modality. Valid values: Text, Image, Audio, and Video.
   */
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
   * @remarks
   * The context length.
   * 
   * @example
   * 10
   */
  contextWindow?: number;
  /**
   * @remarks
   * The maximum input length.
   * 
   * @example
   * 10
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The maximum output length.
   * 
   * @example
   * 10
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum chain-of-thought length.
   * 
   * @example
   * 10
   */
  maxReasoningTokens?: number;
  /**
   * @remarks
   * The maximum input length in thinking mode.
   * 
   * @example
   * 10
   */
  reasoningMaxInputTokens?: number;
  /**
   * @remarks
   * The maximum output length in thinking mode.
   * 
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
   * @remarks
   * The price. The currency unit depends on the account type: ￥ for accounts in the Chinese mainland and $ for international accounts.
   * 
   * @example
   * 12
   */
  price?: string;
  /**
   * @remarks
   * The price type.
   * 
   * @example
   * input
   */
  priceName?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Per 1M tokens
   */
  priceUnit?: string;
  /**
   * @remarks
   * The time band. Valid values:
   * - peak: Peak hours.
   * - offpeak: Off-peak hours.
   * - standard: No time-based tiering.
   * 
   * @example
   * standard
   */
  timeBand?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      priceName: 'priceName',
      priceUnit: 'priceUnit',
      timeBand: 'timeBand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'string',
      priceName: 'string',
      priceUnit: 'string',
      timeBand: 'string',
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
  /**
   * @remarks
   * The model pricing.
   */
  prices?: ListModelsResponseBodyModelsPricesPrices[];
  /**
   * @remarks
   * The tier name. If tiered pricing is not used, the value is Default.
   * 
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
  /**
   * @remarks
   * The model type.
   */
  capabilities?: string[];
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * provided by qwen
   */
  description?: string;
  /**
   * @remarks
   * The list of model capabilities.
   */
  features?: string[];
  /**
   * @remarks
   * The modality type.
   */
  inferenceMetadata?: ListModelsResponseBodyModelsInferenceMetadata;
  /**
   * @remarks
   * The model name for exact match.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The model information, including various context lengths.
   */
  modelInfo?: ListModelsResponseBodyModelsModelInfo;
  /**
   * @remarks
   * The model name for fuzzy match.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  /**
   * @remarks
   * The list of model pricing.
   */
  prices?: ListModelsResponseBodyModelsPrices[];
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * qwen
   */
  provider?: string;
  /**
   * @remarks
   * The release time.
   * 
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
   * @remarks
   * The error code. This field is empty when the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message. This field is empty when the call is successful.
   * 
   * @example
   * The specified parameter is invalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The maximum number of records returned per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of models.
   */
  models?: ListModelsResponseBodyModels[];
  /**
   * @remarks
   * The token for the next request.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 36045E0A-551D-592D-B1BC-4C56596CE59E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
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

