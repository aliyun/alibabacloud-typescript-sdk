// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSecurityPreferenceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAM users can change their passwords. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToChangePassword?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their AccessKey pairs. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  allowUserToManageAccessKeys?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their MFA devices. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  allowUserToManageMFADevices?: boolean;
  /**
   * @remarks
   * Specifies whether RAM users can manage their public keys. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * >  This parameter is valid only for the Japan site.
   * 
   * @example
   * false
   */
  allowUserToManagePublicKeys?: boolean;
  /**
   * @remarks
   * Specifies whether to remember the multi-factor authentication (MFA) devices of Resource Access Management (RAM) users for seven days. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  enableSaveMFATicket?: boolean;
  /**
   * @remarks
   * The subnet mask that specifies the IP addresses from which you can log on to the Alibaba Cloud Management Console. This parameter takes effect on password-based logon and single sign-on (SSO). However, this parameter does not take effect on API calls that are authenticated by using AccessKey pairs.
   * 
   * *   If you specify a subnet mask, RAM users can use only the IP addresses in the subnet mask to log on to the Alibaba Cloud Management Console.
   * *   If you do not specify a subnet mask, RAM users can use all IP addresses to log on to the Alibaba Cloud Management Console.
   * 
   * If you need to specify multiple subnet masks, separate the subnet masks with semicolons (;). Example: 192.168.0.0/16;10.0.0.0/8.
   * 
   * You can specify up to 40 subnet masks. The total length of the subnet masks can be a maximum of 512 characters.
   * 
   * @example
   * 10.0.0.0/8
   */
  loginNetworkMasks?: string;
  /**
   * @remarks
   * The validity period of the logon session of RAM users.
   * 
   * Valid values: 1 to 24. Default value: 6. Unit: hours.
   * 
   * @example
   * 6
   */
  loginSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      allowUserToChangePassword: 'AllowUserToChangePassword',
      allowUserToManageAccessKeys: 'AllowUserToManageAccessKeys',
      allowUserToManageMFADevices: 'AllowUserToManageMFADevices',
      allowUserToManagePublicKeys: 'AllowUserToManagePublicKeys',
      enableSaveMFATicket: 'EnableSaveMFATicket',
      loginNetworkMasks: 'LoginNetworkMasks',
      loginSessionDuration: 'LoginSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowUserToChangePassword: 'boolean',
      allowUserToManageAccessKeys: 'boolean',
      allowUserToManageMFADevices: 'boolean',
      allowUserToManagePublicKeys: 'boolean',
      enableSaveMFATicket: 'boolean',
      loginNetworkMasks: 'string',
      loginSessionDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

