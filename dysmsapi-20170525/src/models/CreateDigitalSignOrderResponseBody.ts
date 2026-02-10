// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSignOrderResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {\\"signId\\": \\"20067468291\\", \\"signCode\\": \\"SIGN_100000184736042_1744164758835_hpMd1\\", \\"signOrderId\\": 22469795330, \\"signName\\": u\\"\\u8d5b\\u745e\\u5a05\\u808c\\u80a4\\u7ba1\\u7406\\"}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 2D0133B9-6C0D-0BAE-8161-1EEF9E2D4069
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

