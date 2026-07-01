// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSignOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if the RAM user is not authorized.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * - If the request is successful, `OK` is returned.
   * 
   * - For more information about other error codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * - `signName`: The name of the signature.
   * 
   * - `signOrderId`: The ID of the signature order.
   * 
   * - `signCode`: The code of the signature.
   * 
   * - `signId`: The ID of the signature.
   * 
   * @example
   * {\\"signId\\": \\"2006746****\\", \\"signCode\\": \\"SIGN_100000184736042_174416475****_hpMd1\\", \\"signOrderId\\": 2246979****, \\"signName\\": u\\"\\u8d5b\\u745e\\u5a05\\u808c\\u80a4\\u7ba1\\u7406\\"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * example
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D0133B9-6C0D-0BAE-8161-1EEF9E2D4069
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
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

