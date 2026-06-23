// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthTokenToMsenceResponseBodyMpaasSystemOauthTokenResponse extends $dara.Model {
  authToken?: string;
  expiresIn?: string;
  openId?: string;
  platform?: string;
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
  requestId?: string;
  resultCode?: string;
  resultMsg?: string;
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

