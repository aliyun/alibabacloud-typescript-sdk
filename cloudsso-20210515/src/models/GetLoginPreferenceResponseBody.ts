// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginPreferenceResponseBodyLoginPreference extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a user can obtain the application access credential after logon to the portal. Valid values:
   * 
   * *   True
   * *   False (default)
   * 
   * @example
   * True
   */
  allowUserToGetCredentials?: boolean;
  /**
   * @remarks
   * The IP address whitelist. CloudSSO users can log on to the CloudSSO user portal only by using the IP addresses in the whitelist.
   * 
   * The IP address whitelist takes effect only on CloudSSO users who want to log on to the CloudSSO user portal by using the username-password logon or single sign-on (SSO) method. The IP address whitelist does not take effect on CloudSSO users who access accounts in a resource directory from the CloudSSO user portal.
   * 
   * If the return value of this parameter is empty, no IP address whitelists are configured.
   * 
   * @example
   * 192.168.0.0/16;10.0.0.0/8
   */
  loginNetworkMasks?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToGetCredentials: 'AllowUserToGetCredentials',
      loginNetworkMasks: 'LoginNetworkMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToGetCredentials: 'boolean',
      loginNetworkMasks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoginPreferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The logon preference.
   */
  loginPreference?: GetLoginPreferenceResponseBodyLoginPreference;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8CE8B990-193D-50CE-A604-69F3E7DCE740
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginPreference: 'LoginPreference',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginPreference: GetLoginPreferenceResponseBodyLoginPreference,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginPreference && typeof (this.loginPreference as any).validate === 'function') {
      (this.loginPreference as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

