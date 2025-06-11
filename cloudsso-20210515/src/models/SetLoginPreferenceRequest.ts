// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoginPreferenceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow a user to obtain the application access credential after logon to the portal. Valid values:
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
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The IP address whitelist. CloudSSO users can log on to the CloudSSO user portal only by using the IP addresses in the whitelist. Limits:
   * 
   * *   You can enter IP addresses or CIDR blocks. IPv4 addresses are supported.
   * *   You can enter up to 100 IP addresses or CIDR blocks. Separate multiple IP addresses or CIDR blocks with semicolons `(;)`.
   * *   If you do not specify this parameter, the original settings are retained.
   * *   If you set this parameter to a semicolon (`;`), the value of this parameter is cleared.
   * *   The IP address whitelist takes effect only on CloudSSO users who want to log on to the CloudSSO user portal by using the username-password logon or single sign-on (SSO) method. The IP address whitelist does not take effect on CloudSSO users who access accounts in a resource directory from the CloudSSO user portal.
   * 
   * @example
   * 192.168.0.0/16;10.0.0.0/8
   */
  loginNetworkMasks?: string;
  static names(): { [key: string]: string } {
    return {
      allowUserToGetCredentials: 'AllowUserToGetCredentials',
      directoryId: 'DirectoryId',
      loginNetworkMasks: 'LoginNetworkMasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToGetCredentials: 'boolean',
      directoryId: 'string',
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

