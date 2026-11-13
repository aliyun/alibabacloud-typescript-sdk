// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogicalModelResponseBodyDataAvailablePaths extends $dara.Model {
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

export class CreateLogicalModelResponseBodyDataDeployment extends $dara.Model {
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
   * The deployment status. Valid values: Pending, Running, Succeeded, PartiallyFailed, and Failed. This is not the API publishing status.
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

export class CreateLogicalModelResponseBodyDataFallbackTargets extends $dara.Model {
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

export class CreateLogicalModelResponseBodyDataMeta extends $dara.Model {
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
   * The intersection of the supported input modalities of the primary targets.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The intersection of the supported input modalities of the primary targets.
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

export class CreateLogicalModelResponseBodyDataSlotsComplex extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with "msc-". VMs or service overrides are not supported.
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

export class CreateLogicalModelResponseBodyDataSlotsSimple extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with "msc-". VMs or service overrides are not supported.
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

export class CreateLogicalModelResponseBodyDataSlotsStandard extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with "msc-". VMs or service overrides are not supported.
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

export class CreateLogicalModelResponseBodyDataSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot. It must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: CreateLogicalModelResponseBodyDataSlotsComplex[];
  /**
   * @remarks
   * The simple slot. It must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: CreateLogicalModelResponseBodyDataSlotsSimple[];
  /**
   * @remarks
   * The standard slot. It must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: CreateLogicalModelResponseBodyDataSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': CreateLogicalModelResponseBodyDataSlotsComplex },
      simple: { 'type': 'array', 'itemType': CreateLogicalModelResponseBodyDataSlotsSimple },
      standard: { 'type': 'array', 'itemType': CreateLogicalModelResponseBodyDataSlotsStandard },
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

export class CreateLogicalModelResponseBodyDataTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card in the same instance. The ID starts with "msc-". VMs or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The weight. The value must be an integer from 0 to 10000 and is saved as the original value. If the routing policy is Mapping, 0 is allowed.
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

export class CreateLogicalModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The intersection of all supported paths for the primary targets.
   */
  availablePaths?: CreateLogicalModelResponseBodyDataAvailablePaths[];
  /**
   * @remarks
   * For the new version of Auto, the value is balanced, cheap, fast, or quality. For legacy configurations, this field may be omitted and the base name remains balanced. This field is omitted for Mapping and Weighted.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * The independent configuration delivery that corresponds to the save intent. Acceptance does not mean that the configuration has taken effect.
   */
  deployment?: CreateLogicalModelResponseBodyDataDeployment;
  /**
   * @remarks
   * The ordered fallback targets. You can specify up to 5 fallback targets. They are deduplicated by the actual card ID and can be an empty array.
   */
  fallbackTargets?: CreateLogicalModelResponseBodyDataFallbackTargets[];
  /**
   * @remarks
   * The intersection of the boolean features of the primary targets.
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
   * The logical model ID of the independent virtual machine.
   * 
   * @example
   * vm-d00000000000000000000
   */
  logicalModelId?: string;
  /**
   * @remarks
   * The capabilities of the primary targets.
   */
  meta?: CreateLogicalModelResponseBodyDataMeta;
  /**
   * @remarks
   * The client logical call name. The name can be up to 256 bytes in UTF-8 encoding, must not contain spaces or slashes, and must not start with "auto".
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * Returned only for Auto. The value is true if the AI Credits Router commodity is not activated, and false if it is activated. This field is omitted if the read operation fails, the status is unknown, or the type is Mapping or Weighted.
   */
  requiresActivation?: boolean;
  /**
   * @remarks
   * The response model. If you set this parameter to Actual, the public name of the actual model is returned. If you set this parameter to Logical, the entry name is returned, including Server-Sent Events (SSE).
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * The revision number. The value is 1 upon creation and increments after each successful update.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, and Auto. If you set this parameter to Auto, the targets parameter must be an empty array and the slots parameter is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  /**
   * @remarks
   * Returned only for Auto. This field includes one to three source cards for each of the simple, standard, and complex types. The three slots are globally deduplicated by modelCardId. This field is omitted for Mapping and Weighted.
   */
  slots?: CreateLogicalModelResponseBodyDataSlots;
  /**
   * @remarks
   * The primary targets. If the routing policy is Mapping, exactly one target is allowed. If the routing policy is Weighted, the sum of the original relative weights must be greater than 0. If the routing policy is Auto, this parameter must be an empty array.
   */
  targets?: CreateLogicalModelResponseBodyDataTargets[];
  /**
   * @remarks
   * The business modification time. This time is not updated during dry runs.
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
      availablePaths: { 'type': 'array', 'itemType': CreateLogicalModelResponseBodyDataAvailablePaths },
      callStrategy: 'string',
      deployment: CreateLogicalModelResponseBodyDataDeployment,
      fallbackTargets: { 'type': 'array', 'itemType': CreateLogicalModelResponseBodyDataFallbackTargets },
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      logicalModelId: 'string',
      meta: CreateLogicalModelResponseBodyDataMeta,
      name: 'string',
      requiresActivation: 'boolean',
      responseModel: 'string',
      revision: 'number',
      routingPolicy: 'string',
      slots: CreateLogicalModelResponseBodyDataSlots,
      targets: { 'type': 'array', 'itemType': CreateLogicalModelResponseBodyDataTargets },
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

export class CreateLogicalModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. The value is Ok for a successful request, or a specific business error code for a failed request.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the logical model operation.
   */
  data?: CreateLogicalModelResponseBodyData;
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
      data: CreateLogicalModelResponseBodyData,
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

