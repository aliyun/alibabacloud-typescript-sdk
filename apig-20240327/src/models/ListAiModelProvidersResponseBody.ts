// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInfo } from "./ServiceInfo";


export class ListAiModelProvidersResponseBodyDataItemsModelCardsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The model call path. The path is up to 2,048 characters in length.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type corresponding to the path. The type is up to 64 characters in length.
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

export class ListAiModelProvidersResponseBodyDataItemsModelCardsCredit extends $dara.Model {
  /**
   * @remarks
   * The cost of cache hit tokens. The unit is credits per million tokens.
   * 
   * @example
   * 0.5
   */
  cacheCost?: number;
  /**
   * @remarks
   * The cost of input tokens. The unit is credits per million tokens.
   * 
   * @example
   * 1.5
   */
  inputCost?: number;
  /**
   * @remarks
   * The cost of output tokens. The unit is credits per million tokens.
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

export class ListAiModelProvidersResponseBodyDataItemsModelCardsMeta extends $dara.Model {
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

export class ListAiModelProvidersResponseBodyDataItemsModelCards extends $dara.Model {
  /**
   * @remarks
   * The list of call paths supported by the model. Each item includes a path and a type.
   */
  availablePaths?: ListAiModelProvidersResponseBodyDataItemsModelCardsAvailablePaths[];
  /**
   * @remarks
   * The credit billing information of the model. The unit is credits per million tokens.
   */
  credit?: ListAiModelProvidersResponseBodyDataItemsModelCardsCredit;
  /**
   * @remarks
   * The model capability switches. The key is the name of a model capability supported by the API gateway, and the value is a Boolean value.
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
  meta?: ListAiModelProvidersResponseBodyDataItemsModelCardsMeta;
  /**
   * @remarks
   * The ID of the model card. The ID is generated by the system and starts with mc-.
   * 
   * @example
   * mc-8c13d2b4f8a1
   */
  modelCardId?: string;
  /**
   * @remarks
   * The name of the model.
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
   * The source of the model card. For instance-level model cards, the value is user.
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
   * The time when the model card was last updated. The time is in the yyyy-MM-dd HH:mm:ss format.
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
      availablePaths: { 'type': 'array', 'itemType': ListAiModelProvidersResponseBodyDataItemsModelCardsAvailablePaths },
      credit: ListAiModelProvidersResponseBodyDataItemsModelCardsCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: ListAiModelProvidersResponseBodyDataItemsModelCardsMeta,
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

export class ListAiModelProvidersResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The list of summaries of AI services that are bound to the model provider.
   */
  boundServices?: ServiceInfo[];
  /**
   * @remarks
   * The default AI service ID. This field is empty if it is not set.
   * 
   * @example
   * svc-d00000000000000000000
   */
  defaultServiceId?: string;
  /**
   * @remarks
   * The display name of the model provider. The name is up to 128 characters in length.
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
   * The list of model cards that are associated with the model provider.
   */
  modelCards?: ListAiModelProvidersResponseBodyDataItemsModelCards[];
  /**
   * @remarks
   * The number of model cards that are associated with the model provider.
   * 
   * @example
   * 2
   */
  modelCount?: number;
  /**
   * @remarks
   * The ID of the model provider. The ID is generated by the system and starts with mp-.
   * 
   * @example
   * mp-8c13d2b4f8a1
   */
  modelProviderId?: string;
  /**
   * @remarks
   * The stable identifier of the model provider. The identifier is up to 128 characters in length.
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
   * The time when the model provider was last updated. The time is in the yyyy-MM-dd HH:mm:ss format.
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
      modelCards: { 'type': 'array', 'itemType': ListAiModelProvidersResponseBodyDataItemsModelCards },
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

export class ListAiModelProvidersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of model providers.
   */
  items?: ListAiModelProvidersResponseBodyDataItems[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of model providers that meet the query conditions.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAiModelProvidersResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiModelProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. If the request is successful, Ok is returned.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListAiModelProvidersResponseBodyData;
  /**
   * @remarks
   * The response message. If the request is successful, success is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. The ID is generated by the system and used to trace the call.
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
      data: ListAiModelProvidersResponseBodyData,
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

