// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLargeModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reason for the authentication failure.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data list.
   * 
   * @example
   * false
   */
  data?: boolean;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1B8E483-372F-5AA8-A4B2-CA82EC967B0C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API operation was called successfully. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * false
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

