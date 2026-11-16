// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The message. This parameter has a value when an exception is returned.
   * 
   * @example
   * true
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * dgdf5-bvcv**
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the call is successful. Valid values:
   * - **true**: The call is successful.
   * - **false**: The call fails.
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
      data: 'string',
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

