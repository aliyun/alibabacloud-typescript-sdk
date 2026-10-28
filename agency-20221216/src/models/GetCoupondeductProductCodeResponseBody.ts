// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCoupondeductProductCodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * code1
   */
  productType?: any;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoupondeductProductCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. Valid values:
   * 200: OK.
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: GetCoupondeductProductCodeResponseBodyData[];
  /**
   * @remarks
   * The message information.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 210e876f16704666020714468dab35
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: { 'type': 'array', 'itemType': GetCoupondeductProductCodeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

