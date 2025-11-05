// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCouponTemplateDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * UNIVERSAL
   */
  applicableProducts?: string;
  /**
   * @example
   * aliyun_poc
   */
  costBearer?: string;
  couponDescription?: string;
  /**
   * @example
   * 2024-11-21 18:18:22
   */
  createdTime?: string;
  /**
   * @example
   * 100
   */
  denomination?: number;
  /**
   * @example
   * 1
   */
  limitPerPerson?: number;
  /**
   * @example
   * ALL,BILLING
   */
  purchaseType?: string;
  reasonForApplication?: string;
  /**
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @example
   * 1576
   */
  templateId?: number;
  templateName?: string;
  /**
   * @example
   * 100
   */
  validUntil?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetCouponTemplateDetailResponseBodyData;
  message?: string;
  /**
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
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

