// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelCardRequestAvailablePaths extends $dara.Model {
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

export class CreateAiModelCardRequestCredit extends $dara.Model {
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

export class CreateAiModelCardRequestMeta extends $dara.Model {
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

export class CreateAiModelCardRequest extends $dara.Model {
  /**
   * @example
   * [{"path":"/v1/chat/completions","type":"OpenAICompatible"}]
   */
  availablePaths?: CreateAiModelCardRequestAvailablePaths[];
  /**
   * @example
   * {"type":"fixed","inputCost":1.5,"outputCost":3,"cacheCost":0.5}
   */
  credit?: CreateAiModelCardRequestCredit;
  /**
   * @example
   * {"functionCalling":true,"toolChoice":true,"promptCaching":false}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  /**
   * @example
   * {"maxInputTokens":131072,"maxOutputTokens":8192,"maxTokens":131072,"supportedInputModalities":["text","image"],"supportedOutputModalities":["text"]}
   */
  meta?: CreateAiModelCardRequestMeta;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen
   */
  modelProvider?: string;
  static names(): { [key: string]: string } {
    return {
      availablePaths: 'availablePaths',
      credit: 'credit',
      features: 'features',
      gatewayId: 'gatewayId',
      meta: 'meta',
      modelName: 'modelName',
      modelProvider: 'modelProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': CreateAiModelCardRequestAvailablePaths },
      credit: CreateAiModelCardRequestCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: CreateAiModelCardRequestMeta,
      modelName: 'string',
      modelProvider: 'string',
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

