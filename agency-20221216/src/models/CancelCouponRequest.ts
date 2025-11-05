// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCouponRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501001340370350
   */
  couponId?: number;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

