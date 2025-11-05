// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCouponTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All Products
   */
  applicableProducts?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Partner
   */
  costBearer?: string;
  couponDescription?: string;
  /**
   * @example
   * 2024-08-26
   */
  expireddate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Unlimited
   */
  limitPerPerson?: string;
  productTypeShrink?: string;
  /**
   * @example
   * ALL
   */
  purchaseType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reasonForApplication?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  /**
   * @example
   * 2024-08-26
   */
  vailddate?: string;
  /**
   * @example
   * 1
   */
  vaildperioddays?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
   * @remarks
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
      productTypeShrink: 'ProductType',
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
      productTypeShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

