// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthTokenToMsenceResponseBodyMpaasSystemOauthTokenResponse extends $dara.Model {
  /**
   * @example
   * NPHTGKNR
   */
  authToken?: string;
  /**
   * @example
   * 300
   */
  expiresIn?: string;
  /**
   * @example
   * 123456
   */
  openId?: string;
  /**
   * @example
   * -
   */
  platform?: string;
  /**
   * @example
   * userid001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      expiresIn: 'ExpiresIn',
      openId: 'OpenId',
      platform: 'Platform',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      expiresIn: 'string',
      openId: 'string',
      platform: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthTokenToMsenceResponseBody extends $dara.Model {
  mpaasSystemOauthTokenResponse?: GetAuthTokenToMsenceResponseBodyMpaasSystemOauthTokenResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  resultCode?: string;
  /**
   * @example
   * SUCCESS
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpaasSystemOauthTokenResponse: 'MpaasSystemOauthTokenResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasSystemOauthTokenResponse: GetAuthTokenToMsenceResponseBodyMpaasSystemOauthTokenResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasSystemOauthTokenResponse && typeof (this.mpaasSystemOauthTokenResponse as any).validate === 'function') {
      (this.mpaasSystemOauthTokenResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

