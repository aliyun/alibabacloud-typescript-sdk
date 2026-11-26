// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallEncryptResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * 149******206
   */
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LlmSmartCallEncryptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reasons for access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request. A value of OK indicates that the request is successful.
   * 
   * @example
   * ok
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: LlmSmartCallEncryptResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F92F9749-105E-518F-8B08-CF16EF36A0E2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API operation was called successfully. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
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
      data: LlmSmartCallEncryptResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

