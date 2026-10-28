// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IssueCouponForCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * The language parameter. Default value: none. Valid values:
   * - zh-CN: Chinese.
   * - en-US: English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The reason for applying for the coupon. The reason can be up to 500 characters in length. Example: Apply for a coupon for Customer XXX.
   * 
   * @example
   * Apply for a coupon for Customer XXX, who is XXXX
   */
  applicationReason?: string;
  /**
   * @remarks
   * The ID of the coupon template.
   * 
   * This parameter is required.
   * 
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @remarks
   * Specifies whether to use the POC privilege quota. Valid values:
   * - true: Uses the POC privilege quota. If all submitted accounts are marked as approval-exempt, the current coupon application skips the approval process, and the POC privilege quota in your partner benefit package is deducted.
   * - false: Does not use the POC privilege quota. Regardless of the approval-exempt status of the submitted accounts, your POC coupon benefit quota remains unchanged. In this case, the application follows the standard coupon application approval process.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  isUseBenefit?: boolean;
  /**
   * @remarks
   * The list of UIDs. Separate multiple UIDs with commas (,). Example: 111,2222.
   * 
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

