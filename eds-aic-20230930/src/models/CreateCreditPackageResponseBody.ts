// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credit package ID.
   * 
   * @example
   * crp-bt7e2t4anbq50****
   */
  creditPackageId?: string;
  /**
   * @remarks
   * The time when the credit package takes effect.
   * 
   * @example
   * 2026-04-30 00:00:00
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the credit package expires.
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
      effectiveTime: 'EffectiveTime',
      expiredTime: 'ExpiredTime',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditPackageId: 'string',
      effectiveTime: 'string',
      expiredTime: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

