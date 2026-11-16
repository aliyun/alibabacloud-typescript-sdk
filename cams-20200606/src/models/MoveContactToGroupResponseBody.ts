// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveContactToGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
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
   * The returned object.
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The message returned in the response.
   * 
   * @example
   * Example value
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * Example value
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - **true**: The call is successful.
   * - **false**: The call failed.
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

