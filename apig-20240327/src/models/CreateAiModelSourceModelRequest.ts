// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelSourceModelRequestAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The invocation path for the model.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type used for the invocation path.
   * 
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

export class CreateAiModelSourceModelRequestCredit extends $dara.Model {
  /**
   * @remarks
   * The number of credits per million cached input tokens. The value must be a non-negative number. A value of 0 indicates that the cached input is free of charge.
   * 
   * @example
   * 0.1
   */
  cacheCost?: number;
  /**
   * @remarks
   * The number of credits per million input tokens. The value must be a non-negative number. A value of 0 indicates that the input is free of charge.
   * 
   * @example
   * 1
   */
  inputCost?: number;
  /**
   * @remarks
   * The number of credits per million output tokens. The value must be a non-negative number. A value of 0 indicates that the output is free of charge.
   * 
   * @example
   * 2
   */
  outputCost?: number;
  /**
   * @remarks
   * The pricing method. Currently, only fixed (fixed credit pricing) is supported.
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

export class CreateAiModelSourceModelRequestMeta extends $dara.Model {
  /**
   * @remarks
   * The maximum number of input tokens supported by the model.
   * 
   * @example
   * 32768
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The maximum number of output tokens supported by the model.
   * 
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum number of context tokens supported by the model.
   * 
   * @example
   * 40960
   */
  maxTokens?: number;
  /**
   * @remarks
   * The input modalities supported by the model.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The output modalities supported by the model.
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

export class CreateAiModelSourceModelRequest extends $dara.Model {
  /**
   * @remarks
   * The protocols and invocation paths supported by the model.
   */
  availablePaths?: CreateAiModelSourceModelRequestAvailablePaths[];
  /**
   * @remarks
   * The credit pricing configuration for the model.
   */
  credit?: CreateAiModelSourceModelRequestCredit;
  /**
   * @remarks
   * The set of capabilities declared for the model. The key is the capability name and the value indicates whether the capability is supported.
   * 
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The token limits and the input and output modality information for the model.
   */
  meta?: CreateAiModelSourceModelRequestMeta;
  /**
   * @remarks
   * The actual model name used by the upstream service.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The ID of the model source. Use the modelSourceId returned by the CreateAiModelSource operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ms-d00000000000000000000
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The client token generated by the caller to identify the same creation or retry operation.
   * 
   * @example
   * b1907ca4-952c-4c5f-8d1f-0aa6ae339c96
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      availablePaths: 'availablePaths',
      credit: 'credit',
      features: 'features',
      meta: 'meta',
      modelName: 'modelName',
      modelSourceId: 'modelSourceId',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': CreateAiModelSourceModelRequestAvailablePaths },
      credit: CreateAiModelSourceModelRequestCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      meta: CreateAiModelSourceModelRequestMeta,
      modelName: 'string',
      modelSourceId: 'string',
      clientToken: 'string',
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

