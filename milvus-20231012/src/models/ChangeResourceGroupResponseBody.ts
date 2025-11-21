// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessDeniedDetail
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * Instance.NotFound
   */
  errCode?: string;
  /**
   * @example
   * Failed to find instance c-123xxx
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

