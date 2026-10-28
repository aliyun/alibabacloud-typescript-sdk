// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCouponTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The accepted language.
   * Default value: None.
   * Valid values:
   * - zh-CN: Chinese.
   * - en-US: English.
   * - ja: Japanese.
   * 
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The applicable products.
   * - All Products: All products.
   * - Custom: Custom products.
   * 
   * This parameter is required.
   * 
   * @example
   * All Products
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The party that bears the coupon cost.
   * - Partner: Borne by the partner.
   * - Alibaba Cloud: Borne by Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * Partner
   */
  costBearer?: string;
  /**
   * @remarks
   * The remark for the coupon.
   * The field length is limited to 100 characters.
   * 
   * @example
   * Coupon remark
   */
  couponDescription?: string;
  /**
   * @remarks
   * The end time of the effective period.
   * Format: yyyy-MM-dd.
   * Example: 2024-08-26.  
   * This parameter is required when the validity period is set to Custom Timeframe.
   * 
   * @example
   * 2024-08-26
   */
  expireddate?: string;
  /**
   * @remarks
   * The maximum number of coupons that each person can claim.
   * - Limited to 1: Limited to one coupon.
   * - Unlimited: Unlimited.
   * 
   * This parameter is required.
   * 
   * @example
   * Unlimited
   */
  limitPerPerson?: string;
  /**
   * @remarks
   * The list of product codes.
   */
  productType?: string[];
  /**
   * @remarks
   * The order type.
   * 
   * @example
   * ALL
   */
  purchaseType?: string;
  /**
   * @remarks
   * The reason for the template application.
   * The field length is limited to 100 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Reason for template application
   */
  reasonForApplication?: string;
  /**
   * @remarks
   * The template name.
   * The field length is limited to 30 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Template name
   */
  templateName?: string;
  /**
   * @remarks
   * The start time of the effective period.
   * Format: yyyy-MM-dd.
   * Example: 2024-08-26.  
   * This parameter is required when the validity period is set to Custom Timeframe.
   * 
   * @example
   * 2024-08-26
   */
  vailddate?: string;
  /**
   * @remarks
   * The duration of the relative time in days.
   * The value must be a positive integer.
   * This parameter is required when the validity period is set to Validity Duration.
   * 
   * @example
   * 1
   */
  vaildperioddays?: string;
  /**
   * @remarks
   * The validity period of the coupon.
   * - Validity Duration: From the date of issuance.
   * - Custom Timeframe: Custom time period.
   * 
   * This parameter is required.
   * 
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
   * @remarks
   * The denomination of the coupon.
   * The value must be an integer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      applicableProducts: 'ApplicableProducts',
      costBearer: 'CostBearer',
      couponDescription: 'CouponDescription',
      expireddate: 'Expireddate',
      limitPerPerson: 'LimitPerPerson',
      productType: 'ProductType',
      purchaseType: 'PurchaseType',
      reasonForApplication: 'ReasonForApplication',
      templateName: 'TemplateName',
      vailddate: 'Vailddate',
      vaildperioddays: 'Vaildperioddays',
      validUntil: 'ValidUntil',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      applicableProducts: 'string',
      costBearer: 'string',
      couponDescription: 'string',
      expireddate: 'string',
      limitPerPerson: 'string',
      productType: { 'type': 'array', 'itemType': 'string' },
      purchaseType: 'string',
      reasonForApplication: 'string',
      templateName: 'string',
      vailddate: 'string',
      vaildperioddays: 'string',
      validUntil: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.productType)) {
      $dara.Model.validateArray(this.productType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

