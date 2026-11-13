// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogicalModelResponseBodyDataAvailablePaths extends $dara.Model {
  /**
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
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
   * @example
   * op-d00000000000000000000
   */
  operationId?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  /**
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
   * @example
   * 32768
   */
  maxInputTokens?: number;
  /**
   * @example
   * 8192
   */
  maxOutputTokens?: number;
  /**
   * @example
   * 40960
   */
  maxTokens?: number;
  supportedInputModalities?: string[];
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
   * This parameter is required.
   */
  complex?: GetLogicalModelResponseBodyDataSlotsComplex[];
  /**
   * @remarks
   * This parameter is required.
   */
  simple?: GetLogicalModelResponseBodyDataSlotsSimple[];
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
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
  availablePaths?: GetLogicalModelResponseBodyDataAvailablePaths[];
  /**
   * @example
   * balanced
   */
  callStrategy?: string;
  deployment?: GetLogicalModelResponseBodyDataDeployment;
  fallbackTargets?: GetLogicalModelResponseBodyDataFallbackTargets[];
  /**
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @example
   * vm-d00000000000000000000
   */
  logicalModelId?: string;
  meta?: GetLogicalModelResponseBodyDataMeta;
  /**
   * @example
   * beta-chat
   */
  name?: string;
  requiresActivation?: boolean;
  /**
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  /**
   * @example
   * Weighted
   */
  routingPolicy?: string;
  slots?: GetLogicalModelResponseBodyDataSlots;
  targets?: GetLogicalModelResponseBodyDataTargets[];
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetLogicalModelResponseBodyData;
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

