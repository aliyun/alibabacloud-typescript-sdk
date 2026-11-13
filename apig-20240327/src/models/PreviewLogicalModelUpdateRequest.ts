// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewLogicalModelUpdateRequestFallbackTargets extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlotsComplex extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlotsSimple extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlotsStandard extends $dara.Model {
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

export class PreviewLogicalModelUpdateRequestSlots extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  complex?: PreviewLogicalModelUpdateRequestSlotsComplex[];
  /**
   * @remarks
   * This parameter is required.
   */
  simple?: PreviewLogicalModelUpdateRequestSlotsSimple[];
  /**
   * @remarks
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

export class PreviewLogicalModelUpdateRequest extends $dara.Model {
  /**
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fallbackTargets?: PreviewLogicalModelUpdateRequestFallbackTargets[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Actual
   */
  responseModel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Weighted
   */
  routingPolicy?: string;
  slots?: PreviewLogicalModelUpdateRequestSlots;
  /**
   * @remarks
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

