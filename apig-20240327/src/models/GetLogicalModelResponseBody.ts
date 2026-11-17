// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogicalModelResponseBodyDataAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The call path of the model.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type used by the call path.
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

export class GetLogicalModelResponseBodyDataDeployment extends $dara.Model {
  /**
   * @remarks
   * The ID of the current shared configuration delivery.
   * 
   * @example
   * op-d00000000000000000000
   */
  operationId?: string;
  /**
   * @remarks
   * The object configuration version.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The deployment status. Valid values: Pending, Running, Succeeded, PartiallyFailed, and Failed. This is not the API release status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
      revision: 'revision',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      revision: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyDataFallbackTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyDataMeta extends $dara.Model {
  /**
   * @remarks
   * The maximum number of input tokens. It takes the minimum value when all primary targets are known. Otherwise, it is omitted.
   * 
   * @example
   * 32768
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The maximum number of input tokens. It takes the minimum value when all primary targets are known. Otherwise, it is omitted.
   * 
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The maximum number of input tokens. It takes the minimum value when all primary targets are known. Otherwise, it is omitted.
   * 
   * @example
   * 40960
   */
  maxTokens?: number;
  /**
   * @remarks
   * The intersection of supported input modalities for the primary targets.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The intersection of supported input modalities for the primary targets.
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

export class GetLogicalModelResponseBodyDataSlotsComplex extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance, which starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyDataSlotsSimple extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance, which starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyDataSlotsStandard extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance, which starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyDataSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot, which contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: GetLogicalModelResponseBodyDataSlotsComplex[];
  /**
   * @remarks
   * The simple slot, which contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: GetLogicalModelResponseBodyDataSlotsSimple[];
  /**
   * @remarks
   * The standard slot, which contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: GetLogicalModelResponseBodyDataSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': GetLogicalModelResponseBodyDataSlotsComplex },
      simple: { 'type': 'array', 'itemType': GetLogicalModelResponseBodyDataSlotsSimple },
      standard: { 'type': 'array', 'itemType': GetLogicalModelResponseBodyDataSlotsStandard },
    };
  }

  validate() {
    if(Array.isArray(this.complex)) {
      $dara.Model.validateArray(this.complex);
    }
    if(Array.isArray(this.simple)) {
      $dara.Model.validateArray(this.simple);
    }
    if(Array.isArray(this.standard)) {
      $dara.Model.validateArray(this.standard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyDataTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card in the same instance, which starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The weight. It is an integer from 0 to 10000 and is saved as the original value. A value of 0 is allowed for Mapping.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The intersection of supported paths for all primary targets.
   */
  availablePaths?: GetLogicalModelResponseBodyDataAvailablePaths[];
  /**
   * @remarks
   * The call strategy. For the new version of Auto, valid values are balanced, cheap, fast, and quality. For legacy configurations, this field can be omitted and the base name remains balanced. This field is omitted for Mapping and Weighted.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * The deployment. Saving the intent corresponds to independent configuration delivery. Acceptance does not indicate that the configuration has taken effect.
   */
  deployment?: GetLogicalModelResponseBodyDataDeployment;
  /**
   * @remarks
   * The ordered fallback targets. A maximum of 5 targets are supported. They are deduplicated by the actual card ID and can be an empty array.
   */
  fallbackTargets?: GetLogicalModelResponseBodyDataFallbackTargets[];
  /**
   * @remarks
   * The intersection of boolean features for the primary targets.
   * 
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the instance to which the logical model belongs.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The independent logical model ID, which starts with vm-.
   * 
   * @example
   * vm-d00000000000000000000
   */
  logicalModelId?: string;
  /**
   * @remarks
   * The capabilities of the primary targets.
   */
  meta?: GetLogicalModelResponseBodyDataMeta;
  /**
   * @remarks
   * The client logical call name. It supports up to 256 bytes in UTF-8, cannot contain spaces or slashes, and must not start with auto.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether activation is required. This field is returned only for Auto. It is set to true if the AI Credits Router commodity is not activated, and false if it is activated. It is omitted if the read fails or the status is unknown, or for Mapping and Weighted.
   */
  requiresActivation?: boolean;
  /**
   * @remarks
   * The response model. Actual returns the public name of the actual model, and Logical returns the entry name, including SSE.
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * The revision number. It is set to 1 upon creation and increments upon each successful update.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, or Auto. If Auto is selected, targets must be an empty array and slots is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  /**
   * @remarks
   * The slots. This field is returned only for Auto. Each of the simple, standard, and complex slots contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId. This field is omitted for Mapping and Weighted.
   */
  slots?: GetLogicalModelResponseBodyDataSlots;
  /**
   * @remarks
   * The primary targets. For Mapping, exactly one item is allowed. For Weighted, the sum of original relative weights must be greater than 0. For Auto, it must be an empty array.
   */
  targets?: GetLogicalModelResponseBodyDataTargets[];
  /**
   * @remarks
   * The business modification time. Dry runs do not advance this time. The format is ISO 8601 (RFC 3339) in the UTC time zone, such as 2026-11-12T00:00:00Z.
   * 
   * @example
   * 2026-11-12T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availablePaths: 'availablePaths',
      callStrategy: 'callStrategy',
      deployment: 'deployment',
      fallbackTargets: 'fallbackTargets',
      features: 'features',
      gatewayId: 'gatewayId',
      logicalModelId: 'logicalModelId',
      meta: 'meta',
      name: 'name',
      requiresActivation: 'requiresActivation',
      responseModel: 'responseModel',
      revision: 'revision',
      routingPolicy: 'routingPolicy',
      slots: 'slots',
      targets: 'targets',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': GetLogicalModelResponseBodyDataAvailablePaths },
      callStrategy: 'string',
      deployment: GetLogicalModelResponseBodyDataDeployment,
      fallbackTargets: { 'type': 'array', 'itemType': GetLogicalModelResponseBodyDataFallbackTargets },
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      logicalModelId: 'string',
      meta: GetLogicalModelResponseBodyDataMeta,
      name: 'string',
      requiresActivation: 'boolean',
      responseModel: 'string',
      revision: 'number',
      routingPolicy: 'string',
      slots: GetLogicalModelResponseBodyDataSlots,
      targets: { 'type': 'array', 'itemType': GetLogicalModelResponseBodyDataTargets },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availablePaths)) {
      $dara.Model.validateArray(this.availablePaths);
    }
    if(this.deployment && typeof (this.deployment as any).validate === 'function') {
      (this.deployment as any).validate();
    }
    if(Array.isArray(this.fallbackTargets)) {
      $dara.Model.validateArray(this.fallbackTargets);
    }
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(this.slots && typeof (this.slots as any).validate === 'function') {
      (this.slots as any).validate();
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogicalModelResponseBody extends $dara.Model {
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
   * The business result returned by the logical model operation.
   */
  data?: GetLogicalModelResponseBodyData;
  /**
   * @remarks
   * The response message that describes the request processing result.
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
      data: GetLogicalModelResponseBodyData,
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

