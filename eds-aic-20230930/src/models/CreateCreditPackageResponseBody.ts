// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCreditPackageResponseBody extends $dara.Model {
  /**
   * @example
   * crp-bt7e2t4anbq50****
   */
  creditPackageId?: string;
  /**
   * @example
   * 2026-04-30 00:00:00
   */
  effectiveTime?: string;
  /**
   * @example
   * 2026-10-30 00:00:00
   */
  expiredTime?: string;
  /**
   * @example
   * 223684716098****
   */
  orderId?: string;
  /**
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

