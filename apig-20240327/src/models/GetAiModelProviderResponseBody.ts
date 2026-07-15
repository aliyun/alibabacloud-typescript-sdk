// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInfo } from "./ServiceInfo";


export class GetAiModelProviderResponseBodyDataModelCardsAvailablePaths extends $dara.Model {
  /**
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
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
   * @example
   * 0.5
   */
  cacheCost?: number;
  /**
   * @example
   * 1.5
   */
  inputCost?: number;
  /**
   * @example
   * 3
   */
  outputCost?: number;
  /**
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
   * @example
   * 131072
   */
  maxInputTokens?: number;
  /**
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @example
   * 131072
   */
  maxTokens?: number;
  supportedInputModalities?: string[];
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
  availablePaths?: GetAiModelProviderResponseBodyDataModelCardsAvailablePaths[];
  credit?: GetAiModelProviderResponseBodyDataModelCardsCredit;
  /**
   * @example
   * {"functionCalling":true,"toolChoice":true}
   */
  features?: { [key: string]: any };
  /**
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  meta?: GetAiModelProviderResponseBodyDataModelCardsMeta;
  /**
   * @example
   * mc-8c13d2b4f8a1
   */
  modelCardId?: string;
  /**
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @example
   * qwen
   */
  modelProvider?: string;
  /**
   * @example
   * user
   */
  source?: string;
  /**
   * @example
   * http://https://dashscope-intl.aliyuncs.com
   */
  sourceURL?: string;
  /**
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
  boundServices?: ServiceInfo[];
  /**
   * @example
   * 千问云 / 阿里云百炼
   */
  displayName?: string;
  /**
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  modelCards?: GetAiModelProviderResponseBodyDataModelCards[];
  /**
   * @example
   * 2
   */
  modelCount?: number;
  /**
   * @example
   * mp-8c13d2b4f8a1
   */
  modelProviderId?: string;
  /**
   * @example
   * qwen
   */
  provider?: string;
  /**
   * @example
   * user
   */
  source?: string;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetAiModelProviderResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

