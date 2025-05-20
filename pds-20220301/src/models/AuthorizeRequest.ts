// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID returned when the application was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 47eUHhrzgWBvlLWj
   */
  clientId?: string;
  /**
   * @remarks
   * Specifies whether to hide the consent page.
   * 
   * @example
   * true
   */
  hideConsent?: boolean;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * *   default: all logon methods that are integrated on the default logon page provided by Drive and Photo Service.
   * *   ding: logs on by scanning a DingTalk QR code.
   * *   ding_sns: logs on by entering a DingTalk account and its password.
   * *   ram: logs on as an Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: logs on by scanning a WeCom QR code.
   * *   wechat_app: logs on without authentication in WeCom.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  loginType?: string;
  /**
   * @remarks
   * The callback URL specified when the application was created.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyunpds.com/sign/callback
   */
  redirectUri?: string;
  /**
   * @remarks
   * The format in which to return the response. Set the value to code.
   * 
   * This parameter is required.
   * 
   * @example
   * code
   */
  responseType?: string;
  /**
   * @remarks
   * The requested permissions. By default, all permissions are requested.
   */
  scope?: string[];
  /**
   * @remarks
   * The user-defined parameter to return in the callback URL after the requested permissions are granted.
   * 
   * @example
   * customdata
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'client_id',
      hideConsent: 'hide_consent',
      loginType: 'login_type',
      redirectUri: 'redirect_uri',
      responseType: 'response_type',
      scope: 'scope',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      hideConsent: 'boolean',
      loginType: 'string',
      redirectUri: 'string',
      responseType: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

