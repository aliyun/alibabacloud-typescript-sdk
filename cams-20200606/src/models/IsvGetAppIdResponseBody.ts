// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvGetAppIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The app ID.
   * 
   * @example
   * 23hr3v****
   */
  appId?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of OK indicates that the request was successful.
   * 
   * - For information about other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 28972951817****
   */
  configId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      appId: 'AppId',
      code: 'Code',
      configId: 'ConfigId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      appId: 'string',
      code: 'string',
      configId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

