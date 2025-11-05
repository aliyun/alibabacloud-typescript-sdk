// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCouponTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * Custom
   */
  applicableProducts?: string;
  /**
   * @example
   * Partner
   */
  costBearer?: string;
  /**
   * @example
   * 111111
   */
  couponTemplateID?: number;
  /**
   * @example
   * 2024-04-02 16:15:31
   */
  createTime?: string;
  /**
   * @example
   * 2024-01-01
   */
  expireddate?: string;
  productType?: string[];
  /**
   * @example
   * APPROVED
   */
  status?: string;
  templateName?: string;
  /**
   * @example
   * 2024-01-01
   */
  vailddate?: string;
  /**
   * @example
   * 1
   */
  vaildperioddays?: string;
  /**
   * @example
   * Validity Duration
   */
  validUntil?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: CreateCouponTemplateResponseBodyData;
  /**
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

