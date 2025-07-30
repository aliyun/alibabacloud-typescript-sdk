// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of valid authentication IDs. The default is all ["ia_all"]
   * 
   * ia_all: All. If you fill in this value, you cannot fill in other values
   * 
   * ia_password: Account password login
   * 
   * ia_otp_sms: SMS verification code login method
   * 
   * ia_webauthn: WebAuthn authenticator login method
   * 
   * idp_xxx: Specific identity provider authentication method
   */
  effectiveAuthenticationSourceIds?: string[];
  /**
   * @remarks
   * The action to take when a password expires. Valid values:
   * 
   * *   forbid_login: Prohibit the user from using the password to log on to IDaaS.
   * *   force_update_password: Force the user to change the password.
   * *   remind_update_password: Remind the user to change the password.
   * 
   * @example
   * forbid_login
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The methods for receiving password expiration notifications.
   * 
   * @example
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The number of days before the expiration date during which password expiration notifications are sent. Unit: day.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * Indicates whether the password expiration notification feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * Indicates whether the password expiration feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The number of days before which users must change the password to prevent password expiration. Unit: day.
   * 
   * @example
   * 3
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The validity period of a password. Unit: day.
   * 
   * @example
   * 180
   */
  passwordValidMaxDay?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveAuthenticationSourceIds: 'EffectiveAuthenticationSourceIds',
      passwordExpirationAction: 'PasswordExpirationAction',
      passwordExpirationNotificationChannels: 'PasswordExpirationNotificationChannels',
      passwordExpirationNotificationDuration: 'PasswordExpirationNotificationDuration',
      passwordExpirationNotificationStatus: 'PasswordExpirationNotificationStatus',
      passwordExpirationStatus: 'PasswordExpirationStatus',
      passwordForcedUpdateDuration: 'PasswordForcedUpdateDuration',
      passwordValidMaxDay: 'PasswordValidMaxDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveAuthenticationSourceIds: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationAction: 'string',
      passwordExpirationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationNotificationDuration: 'number',
      passwordExpirationNotificationStatus: 'string',
      passwordExpirationStatus: 'string',
      passwordForcedUpdateDuration: 'number',
      passwordValidMaxDay: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.effectiveAuthenticationSourceIds)) {
      $dara.Model.validateArray(this.effectiveAuthenticationSourceIds);
    }
    if(Array.isArray(this.passwordExpirationNotificationChannels)) {
      $dara.Model.validateArray(this.passwordExpirationNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password expiration configurations.
   */
  passwordExpirationConfiguration?: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordExpirationConfiguration: 'PasswordExpirationConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordExpirationConfiguration: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordExpirationConfiguration && typeof (this.passwordExpirationConfiguration as any).validate === 'function') {
      (this.passwordExpirationConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

