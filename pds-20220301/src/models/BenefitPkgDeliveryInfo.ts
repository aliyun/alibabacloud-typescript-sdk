// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BenefitPkgDeliveryInfo extends $dara.Model {
  /**
   * @remarks
   * Number of benefit packages delivered.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The creation time of the benefit package delivery.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The expiration time of the benefit package delivery.
   * 
   * If is_permit is set to false, a valid value is returned.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Whether it is permanently valid.
   * 
   * @example
   * false
   */
  isPermanent?: boolean;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      createdAt: 'created_at',
      expireTime: 'expire_time',
      isPermanent: 'is_permanent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      createdAt: 'string',
      expireTime: 'string',
      isPermanent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

