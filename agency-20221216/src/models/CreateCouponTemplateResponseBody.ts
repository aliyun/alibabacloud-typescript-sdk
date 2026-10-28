// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCouponTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The applicable products.
   * - All Products: All products.
   * - Custom: Custom products.
   * 
   * @example
   * Custom
   */
  applicableProducts?: string;
  /**
   * @remarks
   * The party that bears the coupon cost.
   * - Partner: Borne by the partner.
   * - Alibaba Cloud: Borne by Alibaba Cloud.
   * 
   * @example
   * Partner
   */
  costBearer?: string;
  /**
   * @remarks
   * The ID of the coupon template.
   * 
   * @example
   * 111111
   */
  couponTemplateID?: number;
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-04-02 16:15:31
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the effective period.
   * Format: yyyy-MM-dd.
   * 
   * @example
   * 2024-01-01
   */
  expireddate?: string;
  /**
   * @remarks
   * The list of product codes.
   */
  productType?: string[];
  /**
   * @remarks
   * The status of the coupon template. Valid values:
   * - CREATED: Created.
   * - APPROVING: Under review.
   * - APPROVED: Approved.
   * - UNAPPROVED: Unapproved.
   * - ABANDONED: Abandoned.
   * - EXPIRED: Expired.
   * - EXHAUSTED: Exhausted.
   * 
   * @example
   * APPROVED
   */
  status?: string;
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
   * The start time of the effective period.
   * Format: yyyy-MM-dd.
   * 
   * @example
   * 2024-01-01
   */
  vailddate?: string;
  /**
   * @remarks
   * The duration of the relative time in days.
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
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
   * @remarks
   * The denomination.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      costBearer: 'CostBearer',
      couponTemplateID: 'CouponTemplateID',
      createTime: 'CreateTime',
      expireddate: 'Expireddate',
      productType: 'ProductType',
      status: 'Status',
      templateName: 'TemplateName',
      vailddate: 'Vailddate',
      vaildperioddays: 'Vaildperioddays',
      validUntil: 'ValidUntil',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: 'string',
      costBearer: 'string',
      couponTemplateID: 'number',
      createTime: 'string',
      expireddate: 'string',
      productType: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
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

export class CreateCouponTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateCouponTemplateResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 200
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2103a30617045934095083027d88c5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: CreateCouponTemplateResponseBodyData,
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

