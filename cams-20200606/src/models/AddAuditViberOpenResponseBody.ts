// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditViberOpenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Detailed information about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * - `OK`: The request succeeded.
   * 
   * - For other values, see [Error Codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * 122
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * A message describing the result of the request.
   * 
   * @example
   * example
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 2121-112
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded.
   * 
   * - **true**: The request succeeded.
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

