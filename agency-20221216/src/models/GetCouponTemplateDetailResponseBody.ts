// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCouponTemplateDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The applicable products. Valid values:
   * 
   * - UNIVERSAL: all products
   * 
   * - a specific commodity code
   * 
   * @example
   * UNIVERSAL
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The party that bears the coupon cost. Valid values:
   * ● cost_by_self: The cost is borne by the caller.
   * ● aliyun_poc: The cost is borne by Alibaba Cloud.
   * 
   * @example
   * aliyun_poc
   */
  costBearer?: string;
  /**
   * @remarks
   * The remarks of the coupon.
   * 
   * @example
   * For testing
   */
  couponDescription?: string;
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-11-21 18:18:22
   */
  createdTime?: string;
  /**
   * @remarks
   * The face value.
   * 
   * @example
   * 100
   */
  denomination?: number;
  /**
   * @remarks
   * The maximum number of coupons that each person can claim. Valid values:
   * 
   * - 1: Each person can claim one coupon.
   * 
   * - 0: No limit applies.
   * 
   * @example
   * 1
   */
  limitPerPerson?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - ALL: Alibaba Cloud upfront order
   * - BILLING: Alibaba Cloud pay-as-you-go bill
   * 
   * @example
   * ALL,BILLING
   */
  purchaseType?: string;
  /**
   * @remarks
   * The reason for the template application.
   * 
   * @example
   * For testing
   */
  reasonForApplication?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - APPROVED: approved
   * - ABANDONED: voided
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 1576
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the coupon template.
   * 
   * @example
   * Template name
   */
  templateName?: string;
  /**
   * @remarks
   * The validity period. This parameter is used together with the validity period type.
   * 
   * - If the validity period type is relative time, the validity period is the number of valid days.
   * 
   * - If the validity period type is absolute time, the validity period is a time period.
   * 
   * @example
   * 100
   */
  validUntil?: string;
  /**
   * @remarks
   * The type of the validity period. Valid values:
   * 
   * - 0: relative time
   * - 1: absolute time
   * 
   * @example
   * 0
   */
  validUntilType?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      costBearer: 'CostBearer',
      couponDescription: 'CouponDescription',
      createdTime: 'CreatedTime',
      denomination: 'Denomination',
      limitPerPerson: 'LimitPerPerson',
      purchaseType: 'PurchaseType',
      reasonForApplication: 'ReasonForApplication',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      validUntil: 'ValidUntil',
      validUntilType: 'ValidUntilType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      costBearer: 'string',
      couponDescription: 'string',
      createdTime: 'string',
      denomination: 'number',
      limitPerPerson: 'number',
      purchaseType: 'string',
      reasonForApplication: 'string',
      status: 'string',
      templateId: 'number',
      templateName: 'string',
      validUntil: 'string',
      validUntilType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCouponTemplateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   */
  data?: GetCouponTemplateDetailResponseBodyData;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCouponTemplateDetailResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

