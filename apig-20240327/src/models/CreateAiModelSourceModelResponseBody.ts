// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiModelSourceModelResponseBodyDataAvailablePaths extends $dara.Model {
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

export class CreateAiModelSourceModelResponseBodyDataCredit extends $dara.Model {
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

export class CreateAiModelSourceModelResponseBodyDataMeta extends $dara.Model {
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

export class CreateAiModelSourceModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The protocols and invocation paths supported by the model.
   */
  availablePaths?: CreateAiModelSourceModelResponseBodyDataAvailablePaths[];
  /**
   * @remarks
   * The credit pricing configuration for the model.
   */
  credit?: CreateAiModelSourceModelResponseBodyDataCredit;
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
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The token limits and the input and output modality information for the model.
   */
  meta?: CreateAiModelSourceModelResponseBodyDataMeta;
  /**
   * @remarks
   * The model identifier. Standard models use the source model card ID, and logical model entries use the vm- prefix.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The actual model name used by the upstream service.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The stable identifier of the model provider.
   * 
   * @example
   * qwen
   */
  modelProvider?: string;
  /**
   * @remarks
   * The ID of the model source. Use the modelSourceId returned by the CreateAiModelSource operation.
   * 
   * @example
   * ms-d00000000000000000000
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The display name of the model source.
   * 
   * @example
   * Model Studio model source
   */
  modelSourceName?: string;
  /**
   * @remarks
   * The current version of the associated model source.
   * 
   * @example
   * 1
   */
  modelSourceVersion?: number;
  /**
   * @remarks
   * The synchronization status of the model pricing configuration. A value of Pending indicates that the current version is not synchronized, and Ready indicates that it is synchronized.
   * 
   * @example
   * Ready
   */
  pricingStatus?: string;
  /**
   * @remarks
   * The ID of the AI service bound to the model source.
   * 
   * @example
   * svc-d00000000000000000000
   */
  serviceId?: string;
  /**
   * @remarks
   * The source of the model asset. A value of user indicates a user-defined model, and builtin indicates a system built-in model.
   * 
   * @example
   * user
   */
  source?: string;
  /**
   * @remarks
   * The last business update time in RFC 3339 format and the UTC time zone.
   * 
   * @example
   * 2026-11-12T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The current version of the object. It is used for conditional checks during update or delete operations.
   * 
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
      availablePaths: { 'type': 'array', 'itemType': CreateAiModelSourceModelResponseBodyDataAvailablePaths },
      credit: CreateAiModelSourceModelResponseBodyDataCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: CreateAiModelSourceModelResponseBodyDataMeta,
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

export class CreateAiModelSourceModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Ok is returned upon success, and a specific business error code is returned upon failure.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the operation on the AI model in the model source.
   */
  data?: CreateAiModelSourceModelResponseBodyData;
  /**
   * @remarks
   * The response message that describes the result of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by the system to trace the call.
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
      data: CreateAiModelSourceModelResponseBodyData,
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

