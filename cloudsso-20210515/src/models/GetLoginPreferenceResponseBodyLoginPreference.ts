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

