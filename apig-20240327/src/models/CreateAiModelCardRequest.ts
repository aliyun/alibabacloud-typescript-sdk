// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelCardRequestAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The path. The model call path, which is up to 2,048 characters in length.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type corresponding to the path, which is up to 64 characters in length.
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

export class CreateAiModelCardRequestCredit extends $dara.Model {
  /**
   * @remarks
   * The cost of cache hit tokens, in Credits per million tokens. The value must be greater than or equal to 0. If this parameter is not specified, the default value is 0.
   * 
   * @example
   * 0.5
   */
  cacheCost?: number;
  /**
   * @remarks
   * The cost of input tokens, in Credits per million tokens. The value must be greater than or equal to 0. If this parameter is not specified, the default value is 0.
   * 
   * @example
   * 1.5
   */
  inputCost?: number;
  /**
   * @remarks
   * The cost of output tokens, in Credits per million tokens. The value must be greater than or equal to 0. If this parameter is not specified, the default value is 0.
   * 
   * @example
   * 3
   */
  outputCost?: number;
  /**
   * @remarks
   * The billing type. Currently, only fixed is supported. If this parameter is not specified, the default value is fixed.
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

export class CreateAiModelCardRequestMeta extends $dara.Model {
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
   * 
   * @example
   * ["text","image"]
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The list of output modalities supported by the model. The list can contain up to 16 items, and each item cannot be empty.
   * 
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
   * @remarks
   * The list of API call paths supported by the model. Each item must include both path and type.
   * 
   * @example
   * [{"path":"/v1/chat/completions","type":"OpenAICompatible"}]
   */
  availablePaths?: CreateAiModelCardRequestAvailablePaths[];
  /**
   * @remarks
   * The credit billing information of the model. Currently, only the fixed type is supported, and the billing unit is Credits per million tokens. If this parameter is not specified, all costs default to 0.
   * 
   * @example
   * {"type":"fixed","inputCost":1.5,"outputCost":3,"cacheCost":0.5}
   */
  credit?: CreateAiModelCardRequestCredit;
  /**
   * @remarks
   * The model capability switches. The key must be the name of a model capability supported by API Gateway, and the value must be a Boolean value.
   * 
   * @example
   * {"functionCalling":true,"toolChoice":true,"promptCaching":false}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The AI gateway instance ID. The target instance must exist, belong to the current account, and be of the AI gateway type.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-8c13d2b4f8a1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The token limits and input and output modality information of the model.
   * 
   * @example
   * {"maxInputTokens":131072,"maxOutputTokens":8192,"maxTokens":131072,"supportedInputModalities":["text","image"],"supportedOutputModalities":["text"]}
   */
  meta?: CreateAiModelCardRequestMeta;
  /**
   * @remarks
   * The name of the model. The model name must be unique within the same AI gateway instance and the same model provider, and be up to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The identifier of the model provider. It must reference an existing model provider in the target AI gateway instance and be up to 128 characters in length.
   * 
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

