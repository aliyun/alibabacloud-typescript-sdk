// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IssueCouponForCustomerRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  isUseBenefit?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111,2222
   */
  uidlist?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      couponTemplateId: 'CouponTemplateId',
      isUseBenefit: 'IsUseBenefit',
      uidlist: 'Uidlist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      couponTemplateId: 'number',
      isUseBenefit: 'boolean',
      uidlist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

