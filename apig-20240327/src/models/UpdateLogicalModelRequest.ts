// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogicalModelRequestFallbackTargets extends $dara.Model {
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

export class UpdateLogicalModelRequestSlotsComplex extends $dara.Model {
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

export class UpdateLogicalModelRequestSlotsSimple extends $dara.Model {
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

export class UpdateLogicalModelRequestSlotsStandard extends $dara.Model {
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

export class UpdateLogicalModelRequestSlots extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  complex?: UpdateLogicalModelRequestSlotsComplex[];
  /**
   * @remarks
   * This parameter is required.
   */
  simple?: UpdateLogicalModelRequestSlotsSimple[];
  /**
   * @remarks
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

export class UpdateLogicalModelRequest extends $dara.Model {
  /**
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fallbackTargets?: UpdateLogicalModelRequestFallbackTargets[];
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
  slots?: UpdateLogicalModelRequestSlots;
  /**
   * @remarks
   * This parameter is required.
   */
  targets?: UpdateLogicalModelRequestTargets[];
  /**
   * @example
   * 6b8e7d61b3a94c7285cf0d9ee1a72c836b8e7d61b3a94c7285cf0d9ee1a72c83
   */
  confirmationToken?: string;
  /**
   * @remarks
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

