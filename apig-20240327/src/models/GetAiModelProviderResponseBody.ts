// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInfo } from "./ServiceInfo";


export class GetAiModelProviderResponseBodyDataModelCardsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The model invocation path. The length cannot exceed 2,048 characters.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type corresponding to the path. The length cannot exceed 64 characters.
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
   * The cache hit token cost. The unit is Credits per million tokens.
   * 
   * @example
   * 0.5
   */
  cacheCost?: number;
  /**
   * @remarks
   * The input token cost. The unit is Credits per million tokens.
   * 
   * @example
   * 1.5
   */
  inputCost?: number;
  /**
   * @remarks
   * The output token cost. The unit is Credits per million tokens.
   * 
   * @example
   * 3
   */
  outputCost?: number;
  /**
   * @remarks
   * The billing type. Currently, only fixed is supported.
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
   * The maximum number of input tokens supported by the model. The value must be greater than or equal to 0.
   * 
   * @example
   * 131072
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The maximum number of output tokens supported by the model. The value must be greater than or equal to 0.
   * 
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum total number of context tokens supported by the model. The value must be greater than or equal to 0.
   * 
   * @example
   * 131072
   */
  maxTokens?: number;
  /**
   * @remarks
   * The list of input modalities supported by the model. The list can contain up to 16 items, and each item cannot be empty.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The list of output modalities supported by the model. The list can contain up to 16 items, and each item cannot be empty.
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
   * The list of invocation paths supported by the model. Each item contains a path and a type.
   */
  availablePaths?: GetAiModelProviderResponseBodyDataModelCardsAvailablePaths[];
  /**
   * @remarks
   * The credit billing information of the model. The unit is Credits per million tokens.
   */
  credit?: GetAiModelProviderResponseBodyDataModelCardsCredit;
  /**
   * @remarks
   * The model capability toggles. The key is the name of a model capability supported by the API gateway, and the value is a Boolean value.
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
   * The token limits and input and output modality information of the model.
   */
  meta?: GetAiModelProviderResponseBodyDataModelCardsMeta;
  /**
   * @remarks
   * The model card ID. This ID is generated by the system and starts with mc-.
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
   * The identifier of the model provider.
   * 
   * @example
   * qwen
   */
  modelProvider?: string;
  /**
   * @remarks
   * The source of the model card. The value user is returned for instance-level model cards.
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
   * The last update time of the model card. The format is yyyy-MM-dd HH:mm:ss.
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
   * The list of AI service summaries currently bound to the model provider.
   */
  boundServices?: ServiceInfo[];
  /**
   * @remarks
   * The default AI service ID. This field is empty if it is not set. The persisted value is returned as is in read operations.
   * 
   * @example
   * svc-d00000000000000000000
   */
  defaultServiceId?: string;
  /**
   * @remarks
   * The display name of the model provider. The length cannot exceed 128 characters.
   * 
   * @example
   * Qwen Cloud / Alibaba Cloud Model Studio
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
   * The list of model cards currently associated with the model provider.
   */
  modelCards?: GetAiModelProviderResponseBodyDataModelCards[];
  /**
   * @remarks
   * The number of model cards currently associated with the model provider.
   * 
   * @example
   * 2
   */
  modelCount?: number;
  /**
   * @remarks
   * The model provider ID. This ID is generated by the system and starts with mp-.
   * 
   * @example
   * mp-8c13d2b4f8a1
   */
  modelProviderId?: string;
  /**
   * @remarks
   * The stable identifier of the model provider. The length cannot exceed 128 characters.
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
   * The last update time of the model provider. The format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-07-14 18:30:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      boundServices: 'boundServices',
      defaultServiceId: 'defaultServiceId',
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
      defaultServiceId: 'string',
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
   * The response status code. Ok is returned if the request succeeds.
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
   * The response message. success is returned if the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by the system to trace the request.
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

