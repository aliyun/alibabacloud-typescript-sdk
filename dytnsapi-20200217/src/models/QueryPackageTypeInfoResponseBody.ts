// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPackageTypeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - OK indicates that the request is successful.
   * 
   * - For other error codes, see the [error code list](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * Example
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {"efactorVerification":"平台风控-二要素核验查询套餐包"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Example
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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

