// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IssueCouponForCustomerRequest extends $dara.Model {
  /**
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @example
   * 为客户XXX审批优惠券，该客户是XXXX
   */
  applicationReason?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @deprecated
   */
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
      applicationReason: 'ApplicationReason',
      couponTemplateId: 'CouponTemplateId',
      isUseBenefit: 'IsUseBenefit',
      uidlist: 'Uidlist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      applicationReason: 'string',
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

