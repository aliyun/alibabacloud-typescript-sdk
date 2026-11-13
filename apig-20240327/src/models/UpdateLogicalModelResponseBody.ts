// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogicalModelResponseBodyDataAvailablePaths extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataDeployment extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataFallbackTargets extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataMeta extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataSlotsComplex extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataSlotsSimple extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataSlotsStandard extends $dara.Model {
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

export class UpdateLogicalModelResponseBodyDataSlots extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  complex?: UpdateLogicalModelResponseBodyDataSlotsComplex[];
  /**
   * @remarks
   * This parameter is required.
   */
  simple?: UpdateLogicalModelResponseBodyDataSlotsSimple[];
  /**
   * @remarks
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

export class UpdateLogicalModelResponseBodyData extends $dara.Model {
  availablePaths?: UpdateLogicalModelResponseBodyDataAvailablePaths[];
  /**
   * @example
   * balanced
   */
  callStrategy?: string;
  deployment?: UpdateLogicalModelResponseBodyDataDeployment;
  fallbackTargets?: UpdateLogicalModelResponseBodyDataFallbackTargets[];
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
  meta?: UpdateLogicalModelResponseBodyDataMeta;
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
  slots?: UpdateLogicalModelResponseBodyDataSlots;
  targets?: UpdateLogicalModelResponseBodyDataTargets[];
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
   * @example
   * Ok
   */
  code?: string;
  data?: UpdateLogicalModelResponseBodyData;
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

