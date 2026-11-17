// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogicalModelResponseBodyDataAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The invocation path of the model.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type used by the invocation path.
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

export class UpdateLogicalModelResponseBodyDataDeployment extends $dara.Model {
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
   * The configuration version of the object.
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

export class UpdateLogicalModelResponseBodyDataFallbackTargets extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataMeta extends $dara.Model {
  /**
   * @remarks
   * The minimum value when all primary targets are known. Otherwise, this field is omitted.
   * 
   * @example
   * 32768
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The minimum value when all primary targets are known. Otherwise, this field is omitted.
   * 
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The minimum value when all primary targets are known. Otherwise, this field is omitted.
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

export class UpdateLogicalModelResponseBodyDataSlotsComplex extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with msc-. Virtual machines or service overrides are not supported.
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

export class UpdateLogicalModelResponseBodyDataSlotsSimple extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with msc-. Virtual machines or service overrides are not supported.
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

export class UpdateLogicalModelResponseBodyDataSlotsStandard extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with msc-. Virtual machines or service overrides are not supported.
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

export class UpdateLogicalModelResponseBodyDataSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot. It requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: UpdateLogicalModelResponseBodyDataSlotsComplex[];
  /**
   * @remarks
   * The simple slot. It requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: UpdateLogicalModelResponseBodyDataSlotsSimple[];
  /**
   * @remarks
   * The standard slot. It requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: UpdateLogicalModelResponseBodyDataSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': UpdateLogicalModelResponseBodyDataSlotsComplex },
      simple: { 'type': 'array', 'itemType': UpdateLogicalModelResponseBodyDataSlotsSimple },
      standard: { 'type': 'array', 'itemType': UpdateLogicalModelResponseBodyDataSlotsStandard },
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

export class UpdateLogicalModelResponseBodyDataTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card in the same instance. The ID starts with msc-. Virtual machines or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The weight. Valid values: integers from 0 to 10000. The original value is saved. For Mapping, 0 is allowed.
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

export class UpdateLogicalModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The intersection of all supported paths for the primary targets.
   */
  availablePaths?: UpdateLogicalModelResponseBodyDataAvailablePaths[];
  /**
   * @remarks
   * Returned for the new Auto version as balanced, cheap, fast, or quality. Omitted for legacy configurations, where the base name remains balanced. Omitted for Mapping and Weighted configurations.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * The independent configuration delivery corresponding to the save intent. Acceptance does not indicate that the configuration has taken effect.
   */
  deployment?: UpdateLogicalModelResponseBodyDataDeployment;
  /**
   * @remarks
   * The ordered fallback targets. A maximum of 5 targets are supported. The targets are deduplicated by actual card ID. This can be an empty array.
   */
  fallbackTargets?: UpdateLogicalModelResponseBodyDataFallbackTargets[];
  /**
   * @remarks
   * The intersection of Boolean features for the primary targets.
   * 
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The associated instance.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The logical model ID of the independent VM.
   * 
   * @example
   * vm-d00000000000000000000
   */
  logicalModelId?: string;
  /**
   * @remarks
   * The capabilities of the primary target.
   */
  meta?: UpdateLogicalModelResponseBodyDataMeta;
  /**
   * @remarks
   * The client logical call name. It can be up to 256 bytes in UTF-8 encoding, must not contain spaces or slashes, and must not start with auto.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * Returned only for Auto. Set to true if the AI Credits Router commodity is not activated, and false if it is activated. Omitted if the read fails or the status is unknown. Omitted for Mapping and Weighted configurations.
   */
  requiresActivation?: boolean;
  /**
   * @remarks
   * The response model. Actual returns the public name of the actual model, and Logical returns the entry name, including Server-Sent Events (SSE).
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * The revision number. Initialized to 1 upon creation and incremented upon each successful update.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, and Auto. If you set this parameter to Auto, targets must be an empty array and slots is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  /**
   * @remarks
   * Returned only for Auto. Includes 1 to 3 source cards for simple, standard, or complex configurations. The three slots are globally deduplicated by modelCardId. Omitted for Mapping and Weighted configurations.
   */
  slots?: UpdateLogicalModelResponseBodyDataSlots;
  /**
   * @remarks
   * The primary targets. For Mapping, exactly one item is allowed. For Weighted, the sum of original relative weights must be greater than 0. For Auto, this must be an empty array.
   */
  targets?: UpdateLogicalModelResponseBodyDataTargets[];
  /**
   * @remarks
   * The business modification time. Dry runs do not advance this time. The time is formatted in ISO 8601 (RFC 3339) in the UTC time zone, such as 2026-11-12T00:00:00Z.
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
      availablePaths: { 'type': 'array', 'itemType': UpdateLogicalModelResponseBodyDataAvailablePaths },
      callStrategy: 'string',
      deployment: UpdateLogicalModelResponseBodyDataDeployment,
      fallbackTargets: { 'type': 'array', 'itemType': UpdateLogicalModelResponseBodyDataFallbackTargets },
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      logicalModelId: 'string',
      meta: UpdateLogicalModelResponseBodyDataMeta,
      name: 'string',
      requiresActivation: 'boolean',
      responseModel: 'string',
      revision: 'number',
      routingPolicy: 'string',
      slots: UpdateLogicalModelResponseBodyDataSlots,
      targets: { 'type': 'array', 'itemType': UpdateLogicalModelResponseBodyDataTargets },
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

export class UpdateLogicalModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Returns Ok on success and a specific business error code on failure.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the logical model operation.
   */
  data?: UpdateLogicalModelResponseBodyData;
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
      data: UpdateLogicalModelResponseBodyData,
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

