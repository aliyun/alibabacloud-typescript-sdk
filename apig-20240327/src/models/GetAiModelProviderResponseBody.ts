// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInfo } from "./ServiceInfo";


export class GetAiModelProviderResponseBodyDataModelCardsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The model invocation path. The maximum length is 2048 characters.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type corresponding to the path. The maximum length is 64 characters.
   * 
   * @example
   * OpenAICompatible
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelProviderResponseBodyDataModelCardsCredit extends $dara.Model {
  /**
   * @remarks
   * The cost of cache-hit tokens, in Credits per million tokens.
   * 
   * @example
   * 0.5
   */
  cacheCost?: number;
  /**
   * @remarks
   * The cost of input tokens, in Credits per million tokens.
   * 
   * @example
   * 1.5
   */
  inputCost?: number;
  /**
   * @remarks
   * The cost of output tokens, in Credits per million tokens.
   * 
   * @example
   * 3
   */
  outputCost?: number;
  /**
   * @remarks
   * The billing type. Only fixed is supported.
   * 
   * @example
   * fixed
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cacheCost: 'cacheCost',
      inputCost: 'inputCost',
      outputCost: 'outputCost',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheCost: 'number',
      inputCost: 'number',
      outputCost: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelProviderResponseBodyDataModelCardsMeta extends $dara.Model {
  /**
   * @remarks
   * The maximum number of input tokens supported by the model. The value is greater than or equal to 0.
   * 
   * @example
   * 131072
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The maximum number of output tokens supported by the model. The value is greater than or equal to 0.
   * 
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum total number of context tokens supported by the model. The value is greater than or equal to 0.
   * 
   * @example
   * 131072
   */
  maxTokens?: number;
  /**
   * @remarks
   * The list of input modalities supported by the model. The list contains a maximum of 16 items, and each item cannot be empty.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The list of output modalities supported by the model. The list contains a maximum of 16 items, and each item cannot be empty.
   */
  supportedOutputModalities?: string[];
  static names(): { [key: string]: string } {
    return {
      maxInputTokens: 'maxInputTokens',
      maxOutputTokens: 'maxOutputTokens',
      maxTokens: 'maxTokens',
      supportedInputModalities: 'supportedInputModalities',
      supportedOutputModalities: 'supportedOutputModalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxInputTokens: 'number',
      maxOutputTokens: 'number',
      maxTokens: 'number',
      supportedInputModalities: { 'type': 'array', 'itemType': 'string' },
      supportedOutputModalities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInputModalities)) {
      $dara.Model.validateArray(this.supportedInputModalities);
    }
    if(Array.isArray(this.supportedOutputModalities)) {
      $dara.Model.validateArray(this.supportedOutputModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelProviderResponseBodyDataModelCards extends $dara.Model {
  /**
   * @remarks
   * The list of invocation paths supported by the model. Each item contains both path and type.
   */
  availablePaths?: GetAiModelProviderResponseBodyDataModelCardsAvailablePaths[];
  /**
   * @remarks
   * The credit billing information of the model. The unit is Credits per million tokens.
   */
  credit?: GetAiModelProviderResponseBodyDataModelCardsCredit;
  /**
   * @remarks
   * The model capability switches. Keys are model capability names supported by the API gateway, and values are Boolean.
   * 
   * @example
   * {"functionCalling":true,"toolChoice":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the AI gateway instance to which the model card belongs.
   * 
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The token limits and input/output modality information of the model.
   */
  meta?: GetAiModelProviderResponseBodyDataModelCardsMeta;
  /**
   * @remarks
   * The model card ID. Generated by the system and starts with mc-.
   * 
   * @example
   * mc-8c13d2b4f8a1
   */
  modelCardId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider identifier.
   * 
   * @example
   * qwen
   */
  modelProvider?: string;
  /**
   * @remarks
   * The source of the model card. Instance-level model cards return user.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The URL of the model metadata.
   * 
   * @example
   * http://https://dashscope-intl.aliyuncs.com
   */
  sourceURL?: string;
  /**
   * @remarks
   * The last update time of the model card, in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-07-14 18:30:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availablePaths: 'availablePaths',
      credit: 'credit',
      features: 'features',
      gatewayId: 'gatewayId',
      meta: 'meta',
      modelCardId: 'modelCardId',
      modelName: 'modelName',
      modelProvider: 'modelProvider',
      source: 'source',
      sourceURL: 'sourceURL',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': GetAiModelProviderResponseBodyDataModelCardsAvailablePaths },
      credit: GetAiModelProviderResponseBodyDataModelCardsCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: GetAiModelProviderResponseBodyDataModelCardsMeta,
      modelCardId: 'string',
      modelName: 'string',
      modelProvider: 'string',
      source: 'string',
      sourceURL: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availablePaths)) {
      $dara.Model.validateArray(this.availablePaths);
    }
    if(this.credit && typeof (this.credit as any).validate === 'function') {
      (this.credit as any).validate();
    }
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of AI service summaries currently bound to this model provider.
   */
  boundServices?: ServiceInfo[];
  /**
   * @remarks
   * The display name of the model provider. The maximum length is 128 characters.
   * 
   * @example
   * Qwen Cloud / Alibaba Cloud Bailian.
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the AI gateway instance to which the model provider belongs.
   * 
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of model cards currently associated with this model provider.
   */
  modelCards?: GetAiModelProviderResponseBodyDataModelCards[];
  /**
   * @remarks
   * The number of model cards currently associated with this model provider.
   * 
   * @example
   * 2
   */
  modelCount?: number;
  /**
   * @remarks
   * The model provider ID. Generated by the system and starts with mp-.
   * 
   * @example
   * mp-8c13d2b4f8a1
   */
  modelProviderId?: string;
  /**
   * @remarks
   * The stable model provider identifier. The maximum length is 128 characters.
   * 
   * @example
   * qwen
   */
  provider?: string;
  /**
   * @remarks
   * The source of the model provider. Valid values: user and builtin.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The last update time of the model provider, in the format of yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-07-14 18:30:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      boundServices: 'boundServices',
      displayName: 'displayName',
      gatewayId: 'gatewayId',
      modelCards: 'modelCards',
      modelCount: 'modelCount',
      modelProviderId: 'modelProviderId',
      provider: 'provider',
      source: 'source',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundServices: { 'type': 'array', 'itemType': ServiceInfo },
      displayName: 'string',
      gatewayId: 'string',
      modelCards: { 'type': 'array', 'itemType': GetAiModelProviderResponseBodyDataModelCards },
      modelCount: 'number',
      modelProviderId: 'string',
      provider: 'string',
      source: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boundServices)) {
      $dara.Model.validateArray(this.boundServices);
    }
    if(Array.isArray(this.modelCards)) {
      $dara.Model.validateArray(this.modelCards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiModelProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Ok is returned for successful requests.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAiModelProviderResponseBodyData;
  /**
   * @remarks
   * The response message. success is returned for successful requests.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is generated by the system for troubleshooting purposes.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAiModelProviderResponseBodyData,
      message: 'string',
      requestId: 'string',
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

