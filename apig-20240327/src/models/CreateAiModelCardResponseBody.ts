// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelCardResponseBodyDataAvailablePaths extends $dara.Model {
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

export class CreateAiModelCardResponseBodyDataCredit extends $dara.Model {
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

export class CreateAiModelCardResponseBodyDataMeta extends $dara.Model {
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
  /**
   * @example
   * ["text","image"]
   */
  supportedInputModalities?: string[];
  /**
   * @example
   * ["text"]
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

export class CreateAiModelCardResponseBodyData extends $dara.Model {
  /**
   * @example
   * [{"path":"/v1/chat/completions","type":"OpenAICompatible"}]
   */
  availablePaths?: CreateAiModelCardResponseBodyDataAvailablePaths[];
  /**
   * @example
   * {"type":"fixed","inputCost":1.5,"outputCost":3,"cacheCost":0.5}
   */
  credit?: CreateAiModelCardResponseBodyDataCredit;
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
  /**
   * @example
   * {"maxInputTokens":131072,"maxOutputTokens":8192,"maxTokens":131072,"supportedInputModalities":["text","image"],"supportedOutputModalities":["text"]}
   */
  meta?: CreateAiModelCardResponseBodyDataMeta;
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
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': CreateAiModelCardResponseBodyDataAvailablePaths },
      credit: CreateAiModelCardResponseBodyDataCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: CreateAiModelCardResponseBodyDataMeta,
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

export class CreateAiModelCardResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  /**
   * @example
   * {"modelCardId":"mc-8c13d2b4f8a1","gatewayId":"gw-8c13d2b4f8a1","modelProvider":"qwen","modelName":"qwen-plus","source":"user","credit":{"type":"fixed","inputCost":1.5,"outputCost":3,"cacheCost":0.5},"features":{"functionCalling":true,"toolChoice":true},"meta":{"maxInputTokens":131072,"maxOutputTokens":8192,"maxTokens":131072,"supportedInputModalities":["text","image"],"supportedOutputModalities":["text"]},"availablePaths":[{"path":"/v1/chat/completions","type":"OpenAICompatible"}],"updateTime":"2026-07-14 18:30:00"}
   */
  data?: CreateAiModelCardResponseBodyData;
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
      data: CreateAiModelCardResponseBodyData,
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

