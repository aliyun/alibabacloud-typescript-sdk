// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectSupplyResponseBodyDataCandidateModelsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The invocation path.
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
   * type-xxxxxxxx
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

export class GetDirectSupplyResponseBodyDataCandidateModelsCredit extends $dara.Model {
  /**
   * @remarks
   * The unit price of cache-hit tokens.
   * 
   * @example
   * 0.001
   */
  cacheCost?: number;
  /**
   * @remarks
   * The unit price of input tokens.
   * 
   * @example
   * 0.004
   */
  inputCost?: number;
  /**
   * @remarks
   * The unit price of output tokens.
   * 
   * @example
   * 0.012
   */
  outputCost?: number;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * type-xxxxxxxx
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

export class GetDirectSupplyResponseBodyDataCandidateModelsMeta extends $dara.Model {
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
   * 16384
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum total number of tokens.
   * 
   * @example
   * 16384
   */
  maxTokens?: number;
  /**
   * @remarks
   * The list of supported input modalities.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The list of supported output modalities.
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

export class GetDirectSupplyResponseBodyDataCandidateModels extends $dara.Model {
  /**
   * @remarks
   * The list of available invocation paths.
   */
  availablePaths?: GetDirectSupplyResponseBodyDataCandidateModelsAvailablePaths[];
  /**
   * @remarks
   * The billing information of the model.
   */
  credit?: GetDirectSupplyResponseBodyDataCandidateModelsCredit;
  /**
   * @remarks
   * The capabilities and features supported by the model.
   * 
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The capability information of the model.
   */
  meta?: GetDirectSupplyResponseBodyDataCandidateModelsMeta;
  /**
   * @remarks
   * The ID of the model card, which starts with msc-.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * qwen
   */
  modelProvider?: string;
  /**
   * @remarks
   * The ID of the model source.
   * 
   * @example
   * model-source-xxxxxxxx
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The source of the model.
   * 
   * @example
   * source-xxxxxxxx
   */
  source?: string;
  /**
   * @remarks
   * The last update time in ISO 8601 (RFC 3339) format in the UTC time zone, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
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
      modelSourceId: 'modelSourceId',
      source: 'source',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': GetDirectSupplyResponseBodyDataCandidateModelsAvailablePaths },
      credit: GetDirectSupplyResponseBodyDataCandidateModelsCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: GetDirectSupplyResponseBodyDataCandidateModelsMeta,
      modelCardId: 'string',
      modelName: 'string',
      modelProvider: 'string',
      modelSourceId: 'string',
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

export class GetDirectSupplyResponseBodyDataCatalogError extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to query the model catalog
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectSupplyResponseBodyDataModelsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The invocation path.
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
   * type-xxxxxxxx
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

export class GetDirectSupplyResponseBodyDataModelsCredit extends $dara.Model {
  /**
   * @remarks
   * The unit price of cache-hit tokens.
   * 
   * @example
   * 0.001
   */
  cacheCost?: number;
  /**
   * @remarks
   * The unit price of input tokens.
   * 
   * @example
   * 0.004
   */
  inputCost?: number;
  /**
   * @remarks
   * The unit price of output tokens.
   * 
   * @example
   * 0.012
   */
  outputCost?: number;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * type-xxxxxxxx
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

export class GetDirectSupplyResponseBodyDataModelsMeta extends $dara.Model {
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
   * 16384
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum total number of tokens.
   * 
   * @example
   * 16384
   */
  maxTokens?: number;
  /**
   * @remarks
   * The list of supported input modalities.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The list of supported output modalities.
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

export class GetDirectSupplyResponseBodyDataModels extends $dara.Model {
  /**
   * @remarks
   * The list of available invocation paths.
   */
  availablePaths?: GetDirectSupplyResponseBodyDataModelsAvailablePaths[];
  /**
   * @remarks
   * The billing information of the model.
   */
  credit?: GetDirectSupplyResponseBodyDataModelsCredit;
  /**
   * @remarks
   * The capabilities and features supported by the model.
   * 
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The capability information of the model.
   */
  meta?: GetDirectSupplyResponseBodyDataModelsMeta;
  /**
   * @remarks
   * The ID of the model card, which starts with msc-.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * @example
   * qwen-max
   */
  modelName?: string;
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * qwen
   */
  modelProvider?: string;
  /**
   * @remarks
   * The ID of the model source.
   * 
   * @example
   * model-source-xxxxxxxx
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The source of the model.
   * 
   * @example
   * source-xxxxxxxx
   */
  source?: string;
  /**
   * @remarks
   * The last update time in ISO 8601 (RFC 3339) format in the UTC time zone, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
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
      modelSourceId: 'modelSourceId',
      source: 'source',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': GetDirectSupplyResponseBodyDataModelsAvailablePaths },
      credit: GetDirectSupplyResponseBodyDataModelsCredit,
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      meta: GetDirectSupplyResponseBodyDataModelsMeta,
      modelCardId: 'string',
      modelName: 'string',
      modelProvider: 'string',
      modelSourceId: 'string',
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

export class GetDirectSupplyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of candidate models that can be added to direct supply.
   */
  candidateModels?: GetDirectSupplyResponseBodyDataCandidateModels[];
  /**
   * @remarks
   * The error message returned when the model catalog query fails. This parameter is not returned if the query succeeds.
   */
  catalogError?: GetDirectSupplyResponseBodyDataCatalogError;
  /**
   * @remarks
   * Indicates whether direct supply is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of models for which direct supply is enabled.
   */
  models?: GetDirectSupplyResponseBodyDataModels[];
  static names(): { [key: string]: string } {
    return {
      candidateModels: 'candidateModels',
      catalogError: 'catalogError',
      enabled: 'enabled',
      gatewayId: 'gatewayId',
      models: 'models',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateModels: { 'type': 'array', 'itemType': GetDirectSupplyResponseBodyDataCandidateModels },
      catalogError: GetDirectSupplyResponseBodyDataCatalogError,
      enabled: 'boolean',
      gatewayId: 'string',
      models: { 'type': 'array', 'itemType': GetDirectSupplyResponseBodyDataModels },
    };
  }

  validate() {
    if(Array.isArray(this.candidateModels)) {
      $dara.Model.validateArray(this.candidateModels);
    }
    if(this.catalogError && typeof (this.catalogError as any).validate === 'function') {
      (this.catalogError as any).validate();
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectSupplyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDirectSupplyResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
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
      data: GetDirectSupplyResponseBodyData,
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

