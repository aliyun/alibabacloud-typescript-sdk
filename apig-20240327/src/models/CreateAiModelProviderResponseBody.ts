// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInfo } from "./ServiceInfo";


export class CreateAiModelProviderResponseBodyDataModelCardsAvailablePaths extends $dara.Model {
  /**
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
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
   * @example
   * 0.015
   */
  cacheCost?: number;
  /**
   * @example
   * 0.03
   */
  inputCost?: number;
  /**
   * @example
   * 0.06
   */
  outputCost?: number;
  /**
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
   * @example
   * 128000
   */
  maxInputTokens?: number;
  /**
   * @example
   * 4096
   */
  maxOutputTokens?: number;
  /**
   * @example
   * 132096
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

export class CreateAiModelProviderResponseBodyDataModelCards extends $dara.Model {
  availablePaths?: CreateAiModelProviderResponseBodyDataModelCardsAvailablePaths[];
  credit?: CreateAiModelProviderResponseBodyDataModelCardsCredit;
  /**
   * @example
   * {"stream":true,"tools":true}
   */
  features?: { [key: string]: any };
  /**
   * @example
   * gw-ucbx3s2m****
   */
  gatewayId?: string;
  meta?: CreateAiModelProviderResponseBodyDataModelCardsMeta;
  /**
   * @example
   * mc-xxx****
   */
  modelCardId?: string;
  /**
   * @example
   * gpt-4
   */
  modelName?: string;
  /**
   * @example
   * openai
   */
  modelProvider?: string;
  /**
   * @example
   * custom
   */
  source?: string;
  /**
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
  boundServices?: ServiceInfo[];
  /**
   * @example
   * OpenAI
   */
  displayName?: string;
  /**
   * @example
   * gw-ucbx3s2m****
   */
  gatewayId?: string;
  modelCards?: CreateAiModelProviderResponseBodyDataModelCards[];
  /**
   * @example
   * 3
   */
  modelCount?: number;
  /**
   * @example
   * mp-xxx****
   */
  modelProviderId?: string;
  /**
   * @example
   * openai
   */
  provider?: string;
  /**
   * @example
   * custom
   */
  source?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: CreateAiModelProviderResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

