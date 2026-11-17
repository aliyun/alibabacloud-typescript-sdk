// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogicalModelRequestFallbackTargets extends $dara.Model {
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

export class UpdateLogicalModelRequestSlotsComplex extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with msc-. VMs or service overrides are not supported.
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

export class UpdateLogicalModelRequestSlotsSimple extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with msc-. VMs or service overrides are not supported.
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

export class UpdateLogicalModelRequestSlotsStandard extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source card in the same instance. The ID starts with msc-. VMs or service overrides are not supported.
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

export class UpdateLogicalModelRequestSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot. It requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: UpdateLogicalModelRequestSlotsComplex[];
  /**
   * @remarks
   * The simple slot. It requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: UpdateLogicalModelRequestSlotsSimple[];
  /**
   * @remarks
   * The standard slot. It requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: UpdateLogicalModelRequestSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': UpdateLogicalModelRequestSlotsComplex },
      simple: { 'type': 'array', 'itemType': UpdateLogicalModelRequestSlotsSimple },
      standard: { 'type': 'array', 'itemType': UpdateLogicalModelRequestSlotsStandard },
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

export class UpdateLogicalModelRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card in the same instance. The ID starts with msc-. VMs or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The weight. Valid values: integers from 0 to 10000. The original value is preserved. For Mapping, 0 is allowed.
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

export class UpdateLogicalModelRequest extends $dara.Model {
  /**
   * @remarks
   * The call strategy. This parameter is required for new Auto write requests. Valid values: balanced, cheap, fast, and quality. The new version uses only the basic invocation name. Do not submit this parameter for Mapping and Weighted. The server performs conditional validation.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * The ordered fallback targets. A maximum of 5 targets are supported. The targets are deduplicated by the actual card ID. This can be an empty array.
   * 
   * This parameter is required.
   */
  fallbackTargets?: UpdateLogicalModelRequestFallbackTargets[];
  /**
   * @remarks
   * The client logical invocation name. It must be encoded in UTF-8 and can be up to 256 bytes in length. It cannot contain spaces or slashes, and cannot start with auto.
   * 
   * This parameter is required.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * The response model. If set to Actual, the public name of the actual model is returned. If set to Logical, the entry name is returned, including Server-Sent Events (SSE).
   * 
   * This parameter is required.
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, and Auto. If you set this parameter to Auto, targets must be an empty array and slots is required.
   * 
   * This parameter is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  /**
   * @remarks
   * The slots. This parameter is submitted only for Auto. Each of the simple, standard, and complex slots requires 1 to 3 source cards. The three slots are globally deduplicated by modelCardId. Omit this parameter for Mapping and Weighted.
   */
  slots?: UpdateLogicalModelRequestSlots;
  /**
   * @remarks
   * The primary targets. For Mapping, exactly one item is allowed. For Weighted, the sum of original relative weights must be greater than 0. For Auto, this must be an empty array.
   * 
   * This parameter is required.
   */
  targets?: UpdateLogicalModelRequestTargets[];
  /**
   * @remarks
   * The confirmation token returned by the configuration update dry run. Pass this token as is when you submit the update.
   * 
   * @example
   * 6b8e7d61b3a94c7285cf0d9ee1a72c836b8e7d61b3a94c7285cf0d9ee1a72c83
   */
  confirmationToken?: string;
  /**
   * @remarks
   * The expected configuration revision number. Use the revision returned by the most recent query or dry run.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expectedRevision?: number;
  static names(): { [key: string]: string } {
    return {
      callStrategy: 'callStrategy',
      fallbackTargets: 'fallbackTargets',
      name: 'name',
      responseModel: 'responseModel',
      routingPolicy: 'routingPolicy',
      slots: 'slots',
      targets: 'targets',
      confirmationToken: 'confirmationToken',
      expectedRevision: 'expectedRevision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStrategy: 'string',
      fallbackTargets: { 'type': 'array', 'itemType': UpdateLogicalModelRequestFallbackTargets },
      name: 'string',
      responseModel: 'string',
      routingPolicy: 'string',
      slots: UpdateLogicalModelRequestSlots,
      targets: { 'type': 'array', 'itemType': UpdateLogicalModelRequestTargets },
      confirmationToken: 'string',
      expectedRevision: 'number',
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

