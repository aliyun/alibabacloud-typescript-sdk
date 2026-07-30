// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiModelCardRequestAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The model invocation path. Maximum length: 2048 characters.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type of the path. Maximum length: 64 characters.
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

export class UpdateAiModelCardRequestCredit extends $dara.Model {
  /**
   * @remarks
   * The cache hit token cost in Credits per million tokens. The value must be greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 0.5
   */
  cacheCost?: number;
  /**
   * @remarks
   * The input token cost in Credits per million tokens. The value must be greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 1.5
   */
  inputCost?: number;
  /**
   * @remarks
   * The output token cost in Credits per million tokens. The value must be greater than or equal to 0. Default value: 0.
   * 
   * @example
   * 3
   */
  outputCost?: number;
  /**
   * @remarks
   * The billing type. Only fixed is supported. Default value: fixed.
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

export class UpdateAiModelCardRequestMeta extends $dara.Model {
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
   * The list of input modalities supported by the model. The list contains up to 16 items, and each item must not be empty.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The list of output modalities supported by the model. The list contains up to 16 items, and each item must not be empty.
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

export class UpdateAiModelCardRequest extends $dara.Model {
  /**
   * @remarks
   * The list of invocation paths supported by the model. Each item must include both path and type. The list is overwritten as a whole during updates.
   */
  availablePaths?: UpdateAiModelCardRequestAvailablePaths[];
  /**
   * @remarks
   * The credit billing information of the model. Only the fixed type is supported. The unit is Credits per million tokens. If not specified, all cost values default to 0.
   */
  credit?: UpdateAiModelCardRequestCredit;
  /**
   * @remarks
   * The model capability switches. Keys must be model capability names supported by the API gateway. Values are Boolean.
   * 
   * @example
   * {"functionCalling":true,"toolChoice":true,"promptCaching":false}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The token limits and input/output modality information of the model.
   */
  meta?: UpdateAiModelCardRequestMeta;
  /**
   * @remarks
   * The model name. The name must be unique within the same AI gateway instance and model provider. Maximum length: 256 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider identifier. The value must reference an existing model provider in the target AI gateway instance. Maximum length: 128 characters.
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
      meta: 'meta',
      modelName: 'modelName',
      modelProvider: 'modelProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': UpdateAiModelCardRequestAvailablePaths },
      credit: UpdateAiModelCardRequestCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      meta: UpdateAiModelCardRequestMeta,
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

