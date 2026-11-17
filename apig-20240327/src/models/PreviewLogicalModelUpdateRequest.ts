// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewLogicalModelUpdateRequestFallbackTargets extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlotsComplex extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlotsSimple extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlotsStandard extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot, which requires 1 to 3 source cards. Cards across the three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: PreviewLogicalModelUpdateRequestSlotsComplex[];
  /**
   * @remarks
   * The simple slot, which requires 1 to 3 source cards. Cards across the three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: PreviewLogicalModelUpdateRequestSlotsSimple[];
  /**
   * @remarks
   * The standard slot, which requires 1 to 3 source cards. Cards across the three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: PreviewLogicalModelUpdateRequestSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': PreviewLogicalModelUpdateRequestSlotsComplex },
      simple: { 'type': 'array', 'itemType': PreviewLogicalModelUpdateRequestSlotsSimple },
      standard: { 'type': 'array', 'itemType': PreviewLogicalModelUpdateRequestSlotsStandard },
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

export class PreviewLogicalModelUpdateRequestTargets extends $dara.Model {
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
   * The weight value. Valid values: integers from 0 to 10000. The original value is preserved. For Mapping, 0 is allowed.
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

export class PreviewLogicalModelUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The call strategy, which is required for new Auto write requests. Valid values: balanced, cheap, fast, and quality. The new version uses only the basic call name. Do not submit this parameter for Mapping or Weighted. The server performs conditional validation.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * An ordered list of up to 5 fallback targets. The targets are deduplicated by the actual card ID. This can be an empty array.
   * 
   * This parameter is required.
   */
  fallbackTargets?: PreviewLogicalModelUpdateRequestFallbackTargets[];
  /**
   * @remarks
   * The client logical call name. The value can be up to 256 bytes in UTF-8 encoding, must not contain spaces or slashes, and must not start with auto.
   * 
   * This parameter is required.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * The response model type. If set to Actual, the public name of the actual model is returned. If set to Logical, the entry name is returned, including SSE.
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
   * The slots configuration, which is submitted only for Auto. Each of the simple, standard, and complex slots requires 1 to 3 source cards. Cards across the three slots are globally deduplicated by modelCardId. Omit this parameter for Mapping or Weighted.
   */
  slots?: PreviewLogicalModelUpdateRequestSlots;
  /**
   * @remarks
   * The primary targets. For Mapping, exactly one item is required. For Weighted, the sum of the original relative weights must be greater than 0. For Auto, this must be an empty array.
   * 
   * This parameter is required.
   */
  targets?: PreviewLogicalModelUpdateRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      callStrategy: 'callStrategy',
      fallbackTargets: 'fallbackTargets',
      name: 'name',
      responseModel: 'responseModel',
      routingPolicy: 'routingPolicy',
      slots: 'slots',
      targets: 'targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStrategy: 'string',
      fallbackTargets: { 'type': 'array', 'itemType': PreviewLogicalModelUpdateRequestFallbackTargets },
      name: 'string',
      responseModel: 'string',
      routingPolicy: 'string',
      slots: PreviewLogicalModelUpdateRequestSlots,
      targets: { 'type': 'array', 'itemType': PreviewLogicalModelUpdateRequestTargets },
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

