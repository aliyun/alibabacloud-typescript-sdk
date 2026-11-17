// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogicalModelRequestFallbackTargets extends $dara.Model {
  /**
   * @remarks
   * The actual source card ID within the same instance.
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
   * The actual source card ID within the same instance, which starts with msc-. VM or service overrides are not supported.
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
   * The actual source card ID within the same instance, which starts with msc-. VM or service overrides are not supported.
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
   * The actual source card ID within the same instance, which starts with msc-. VM or service overrides are not supported.
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
   * The complex slot requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: CreateLogicalModelRequestSlotsComplex[];
  /**
   * @remarks
   * The simple slot requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: CreateLogicalModelRequestSlotsSimple[];
  /**
   * @remarks
   * The standard slot requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
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
   * The actual source model card ID within the same instance, which starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * An integer from 0 to 10000, saved as the original value. A value of 0 is allowed for Mapping.
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
   * Required for new Auto write requests. Valid values: balanced, cheap, fast, and quality. The new version only uses the basic call name. Do not submit this parameter for Mapping or Weighted. The server performs conditional validation.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * An ordered list of up to 5 fallback targets. The targets are deduplicated by actual card ID and can be an empty array.
   * 
   * This parameter is required.
   */
  fallbackTargets?: CreateLogicalModelRequestFallbackTargets[];
  /**
   * @remarks
   * The associated AI gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The client logical call name. It can be up to 256 bytes in UTF-8, must not contain spaces or slashes, and must not start with auto.
   * 
   * This parameter is required.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * If set to Actual, the public name of the actual model is returned. If set to Logical, the entry name is returned, including SSE.
   * 
   * This parameter is required.
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, and Auto. When set to Auto, targets must be an empty array and slots is required.
   * 
   * This parameter is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  /**
   * @remarks
   * Submitted only for Auto. Each of the simple, standard, and complex slots requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId. Omit this parameter for Mapping and Weighted.
   */
  slots?: CreateLogicalModelRequestSlots;
  /**
   * @remarks
   * The primary targets. For Mapping, exactly one item is required. For Weighted, the sum of the original relative weights must be greater than 0. For Auto, this must be an empty array.
   * 
   * This parameter is required.
   */
  targets?: CreateLogicalModelRequestTargets[];
  /**
   * @remarks
   * The request idempotency identity generated by the invoker to identify the same creation or retry operation.
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

