// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInfo } from "./ServiceInfo";


export class CreateAiModelProviderResponseBodyDataModelCardsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The API path.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The path type.
   * 
   * @example
   * chat
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

export class CreateAiModelProviderResponseBodyDataModelCardsCredit extends $dara.Model {
  /**
   * @remarks
   * The credits consumption coefficient for cached tokens.
   * 
   * @example
   * 0.015
   */
  cacheCost?: number;
  /**
   * @remarks
   * The credits consumption coefficient for input tokens.
   * 
   * @example
   * 0.03
   */
  inputCost?: number;
  /**
   * @remarks
   * The credits consumption coefficient for output tokens.
   * 
   * @example
   * 0.06
   */
  outputCost?: number;
  /**
   * @remarks
   * The credits billing type.
   * 
   * @example
   * token
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

export class CreateAiModelProviderResponseBodyDataModelCardsMeta extends $dara.Model {
  /**
   * @remarks
   * The maximum number of input tokens.
   * 
   * @example
   * 128000
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The maximum number of output tokens.
   * 
   * @example
   * 4096
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum total number of tokens.
   * 
   * @example
   * 132096
   */
  maxTokens?: number;
  /**
   * @remarks
   * The supported input modalities.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The supported output modalities.
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

export class CreateAiModelProviderResponseBodyDataModelCards extends $dara.Model {
  /**
   * @remarks
   * The list of available paths for the model.
   */
  availablePaths?: CreateAiModelProviderResponseBodyDataModelCardsAvailablePaths[];
  /**
   * @remarks
   * The model credits consumption configuration.
   */
  credit?: CreateAiModelProviderResponseBodyDataModelCardsCredit;
  /**
   * @remarks
   * The model capability features.
   * 
   * @example
   * {"stream":true,"tools":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The gateway instance ID to which the model card belongs.
   * 
   * @example
   * gw-ucbx3s2m****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The model metadata.
   */
  meta?: CreateAiModelProviderResponseBodyDataModelCardsMeta;
  /**
   * @remarks
   * The model card ID.
   * 
   * @example
   * mc-xxx****
   */
  modelCardId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * gpt-4
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider identifier to which the model card belongs.
   * 
   * @example
   * openai
   */
  modelProvider?: string;
  /**
   * @remarks
   * The model source.
   * 
   * @example
   * custom
   */
  source?: string;
  /**
   * @remarks
   * The URL of the model metadata.
   * 
   * @example
   * https://dashscope-intl.aliyuncs.com
   */
  sourceURL?: string;
  /**
   * @remarks
   * The last update time in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2024-07-03T10:48:00Z
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
      availablePaths: { 'type': 'array', 'itemType': CreateAiModelProviderResponseBodyDataModelCardsAvailablePaths },
      credit: CreateAiModelProviderResponseBodyDataModelCardsCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: CreateAiModelProviderResponseBodyDataModelCardsMeta,
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

export class CreateAiModelProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of services bound to the provider.
   */
  boundServices?: ServiceInfo[];
  /**
   * @remarks
   * The display name of the model provider.
   * 
   * @example
   * OpenAI
   */
  displayName?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-ucbx3s2m****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of model cards under the provider.
   */
  modelCards?: CreateAiModelProviderResponseBodyDataModelCards[];
  /**
   * @remarks
   * The number of models under the provider.
   * 
   * @example
   * 3
   */
  modelCount?: number;
  /**
   * @remarks
   * The model provider ID.
   * 
   * @example
   * mp-xxx****
   */
  modelProviderId?: string;
  /**
   * @remarks
   * The model provider identifier.
   * 
   * @example
   * openai
   */
  provider?: string;
  /**
   * @remarks
   * The provider source type.
   * 
   * @example
   * custom
   */
  source?: string;
  /**
   * @remarks
   * The last update time in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2024-07-03T10:48:00Z
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
      modelCards: { 'type': 'array', 'itemType': CreateAiModelProviderResponseBodyDataModelCards },
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

export class CreateAiModelProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response struct.
   */
  data?: CreateAiModelProviderResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 464F9EA0-1052-51BD-8187-D292AA2D8D24
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
      data: CreateAiModelProviderResponseBodyData,
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

