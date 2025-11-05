// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IssueCouponForCustomerResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5075915
   */
  couponTemplateId?: number;
  /**
   * @example
   * 2024-03-05 18:24:07
   */
  createTime?: string;
  /**
   * @example
   * 111,2222
   */
  uidlist?: string;
  static names(): { [key: string]: string } {
    return {
      couponTemplateId: 'CouponTemplateId',
      createTime: 'CreateTime',
      uidlist: 'Uidlist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponTemplateId: 'number',
      createTime: 'string',
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

export class IssueCouponForCustomerResponseBody extends $dara.Model {
  /**
   * @example
   * code
   */
  code?: string;
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
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  data?: IssueCouponForCustomerResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: IssueCouponForCustomerResponseBodyData,
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

