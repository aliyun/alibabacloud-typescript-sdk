// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalSpotPriceItem extends $dara.Model {
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 2026-08-20T06:45:00Z
   */
  effectiveAt?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ml.gp7vf.16.40xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The current market price.
   * 
   * @example
   * 0.1
   */
  spotDiscount?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveAt: 'effectiveAt',
      instanceType: 'instanceType',
      spotDiscount: 'spotDiscount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAt: 'string',
      instanceType: 'string',
      spotDiscount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

