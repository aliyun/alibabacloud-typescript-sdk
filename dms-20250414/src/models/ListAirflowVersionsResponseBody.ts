// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAirflowVersionsResponseBody extends $dara.Model {
  /**
   * @example
   * NOT_FOUND
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  root?: string[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      root: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.root)) {
      $dara.Model.validateArray(this.root);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

