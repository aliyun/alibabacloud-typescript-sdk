// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncBusinessAppHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied detail.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * - `OK`: The request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * example
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * example
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
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

