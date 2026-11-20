// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoloWebLoginSettingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether external accounts are allowed to log on.
   * 
   * @example
   * true
   */
  allowExternalAccountsLogin?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowExternalAccountsLogin: 'AllowExternalAccountsLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalAccountsLogin: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoloWebLoginSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * true: Success. false: Failure.
   */
  data?: GetHoloWebLoginSettingResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A8DEF6E-067E-5DB0-BAE1-2894266E6C6A
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Indicates whether an exception occurred during the request. This parameter is unrelated to the business logic.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetHoloWebLoginSettingResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
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

