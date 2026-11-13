// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogicalModelRequestFallbackTargets extends $dara.Model {
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

export class CreateLogicalModelRequestSlotsComplex extends $dara.Model {
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

export class CreateLogicalModelRequestSlotsSimple extends $dara.Model {
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

export class CreateLogicalModelRequestSlotsStandard extends $dara.Model {
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

export class CreateLogicalModelRequestSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot. It must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: CreateLogicalModelRequestSlotsComplex[];
  /**
   * @remarks
   * The simple slot. It must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: CreateLogicalModelRequestSlotsSimple[];
  /**
   * @remarks
   * The standard slot. It must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: CreateLogicalModelRequestSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': CreateLogicalModelRequestSlotsComplex },
      simple: { 'type': 'array', 'itemType': CreateLogicalModelRequestSlotsSimple },
      standard: { 'type': 'array', 'itemType': CreateLogicalModelRequestSlotsStandard },
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

export class CreateLogicalModelRequestTargets extends $dara.Model {
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

export class CreateLogicalModelRequest extends $dara.Model {
  /**
   * @remarks
   * The call strategy. This parameter is required for new write requests when the routing policy is Auto. Valid values: balanced, cheap, fast, and quality. The new version uses only the basic call name. Do not submit this parameter if the routing policy is Mapping or Weighted. The server performs conditional validation.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * The ordered fallback targets. You can specify up to 5 fallback targets. They are deduplicated by the actual card ID and can be an empty array.
   * 
   * This parameter is required.
   */
  fallbackTargets?: CreateLogicalModelRequestFallbackTargets[];
  /**
   * @remarks
   * The AI gateway to which the logical model belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The client logical call name. The name can be up to 256 bytes in UTF-8 encoding, must not contain spaces or slashes, and must not start with "auto".
   * 
   * This parameter is required.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * The response model. If you set this parameter to Actual, the public name of the actual model is returned. If you set this parameter to Logical, the entry name is returned, including Server-Sent Events (SSE).
   * 
   * This parameter is required.
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, and Auto. If you set this parameter to Auto, the targets parameter must be an empty array and the slots parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  /**
   * @remarks
   * The slots. This parameter is submitted only when the routing policy is Auto. Each of the simple, standard, and complex slots must contain 1 to 3 source cards. The three slots are globally deduplicated by modelCardId. Omit this parameter if the routing policy is Mapping or Weighted.
   */
  slots?: CreateLogicalModelRequestSlots;
  /**
   * @remarks
   * The primary targets. If the routing policy is Mapping, exactly one target is allowed. If the routing policy is Weighted, the sum of the original relative weights must be greater than 0. If the routing policy is Auto, this parameter must be an empty array.
   * 
   * This parameter is required.
   */
  targets?: CreateLogicalModelRequestTargets[];
  /**
   * @remarks
   * The client token that is generated by the caller to ensure idempotence. It is used to identify the same creation or retry operation.
   * 
   * @example
   * b1907ca4-952c-4c5f-8d1f-0aa6ae339c96
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      callStrategy: 'callStrategy',
      fallbackTargets: 'fallbackTargets',
      gatewayId: 'gatewayId',
      name: 'name',
      responseModel: 'responseModel',
      routingPolicy: 'routingPolicy',
      slots: 'slots',
      targets: 'targets',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStrategy: 'string',
      fallbackTargets: { 'type': 'array', 'itemType': CreateLogicalModelRequestFallbackTargets },
      gatewayId: 'string',
      name: 'string',
      responseModel: 'string',
      routingPolicy: 'string',
      slots: CreateLogicalModelRequestSlots,
      targets: { 'type': 'array', 'itemType': CreateLogicalModelRequestTargets },
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fallbackTargets)) {
      $dara.Model.validateArray(this.fallbackTargets);
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

