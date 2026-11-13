// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiModelSourceModelsResponseBodyDataItemsAvailablePaths extends $dara.Model {
  /**
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @example
   * OpenAI/v1
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

export class ListAiModelSourceModelsResponseBodyDataItemsCredit extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  cacheCost?: number;
  /**
   * @example
   * 1
   */
  inputCost?: number;
  /**
   * @example
   * 2
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

export class ListAiModelSourceModelsResponseBodyDataItemsMeta extends $dara.Model {
  /**
   * @example
   * 32768
   */
  maxInputTokens?: number;
  /**
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @example
   * 40960
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

export class ListAiModelSourceModelsResponseBodyDataItems extends $dara.Model {
  availablePaths?: ListAiModelSourceModelsResponseBodyDataItemsAvailablePaths[];
  credit?: ListAiModelSourceModelsResponseBodyDataItemsCredit;
  /**
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  meta?: ListAiModelSourceModelsResponseBodyDataItemsMeta;
  /**
   * @example
   * msc-d00000000000000000000
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
   * ms-d00000000000000000000
   */
  modelSourceId?: string;
  /**
   * @example
   * 百炼模型源
   */
  modelSourceName?: string;
  /**
   * @example
   * 1
   */
  modelSourceVersion?: number;
  /**
   * @example
   * Ready
   */
  pricingStatus?: string;
  /**
   * @example
   * svc-d00000000000000000000
   */
  serviceId?: string;
  /**
   * @example
   * user
   */
  source?: string;
  /**
   * @example
   * 2026-11-12T00:00:00Z
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  version?: number;
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
      modelSourceId: 'modelSourceId',
      modelSourceName: 'modelSourceName',
      modelSourceVersion: 'modelSourceVersion',
      pricingStatus: 'pricingStatus',
      serviceId: 'serviceId',
      source: 'source',
      updateTime: 'updateTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': ListAiModelSourceModelsResponseBodyDataItemsAvailablePaths },
      credit: ListAiModelSourceModelsResponseBodyDataItemsCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: ListAiModelSourceModelsResponseBodyDataItemsMeta,
      modelCardId: 'string',
      modelName: 'string',
      modelProvider: 'string',
      modelSourceId: 'string',
      modelSourceName: 'string',
      modelSourceVersion: 'number',
      pricingStatus: 'string',
      serviceId: 'string',
      source: 'string',
      updateTime: 'string',
      version: 'number',
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

export class ListAiModelSourceModelsResponseBodyData extends $dara.Model {
  items?: ListAiModelSourceModelsResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListAiModelSourceModelsResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
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

export class ListAiModelSourceModelsResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListAiModelSourceModelsResponseBodyData;
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
      data: ListAiModelSourceModelsResponseBodyData,
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

