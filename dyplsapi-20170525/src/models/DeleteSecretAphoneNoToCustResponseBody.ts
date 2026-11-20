// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretAPhoneNoToCustResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of denied access.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the deletion succeeded. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Error message for failure.
   * 
   * @example
   * 号码组不存在
   */
  message?: string;
  /**
   * @remarks
   * The returned ID.
   * 
   * @example
   * 1D73E648-0978-18A5-B089-3BB2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - true: Succeeded.
   * 
   * - false: Failed.
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

