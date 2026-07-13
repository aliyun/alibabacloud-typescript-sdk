// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the credit booster pack.
   * 
   * @example
   * crp-bt7e2t4anbq50****
   */
  creditPackageId?: string;
  creditPackageIds?: string[];
  /**
   * @remarks
   * The effective period of the credit booster pack.
   * 
   * @example
   * 2026-04-30 00:00:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the credit booster pack expires.
   * 
   * @example
   * 2026-10-30 00:00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F07A1DA1-E1EB-5CCA-8EED-12F85D32****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creditPackageId: 'CreditPackageId',
      creditPackageIds: 'CreditPackageIds',
      effectiveTime: 'EffectiveTime',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditPackageId: 'string',
      creditPackageIds: { 'type': 'array', 'itemType': 'string' },
      effectiveTime: 'string',
      expiredTime: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creditPackageIds)) {
      $dara.Model.validateArray(this.creditPackageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

