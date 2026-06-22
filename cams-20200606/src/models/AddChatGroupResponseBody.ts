// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChatGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code. Valid values:
   * 
   * - `OK`: The request was successful.
   * 
   * - For other error codes, see the [error code list](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the API call succeeded. Valid values:
   * 
   * - **true**: The API call was successful.
   * 
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The unique request code.
   * 
   * @example
   * 8938****
   */
  uniqueCode?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uniqueCode: 'UniqueCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uniqueCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

