// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of effective authentication source IDs. Default value: ["ia_all"].
   * 
   * - ia_all: All. If you specify this value, you cannot specify other values.
   * - ia_password: Account password logon.
   * - ia_otp_sms: SMS verification code logon.
   * - ia_webauthn: WebAuthn authenticator logon.
   * - idp_xxx: A specific identity provider (IdP) authentication method.
   */
  effectiveAuthenticationSourceIds?: string[];
  /**
   * @remarks
   * The password expiration action. Valid values:
   * - forbid_login: Prohibits logon.
   * - force_update_password: Forces a password change.
   * - remind_update_password: Reminds the user to change the password.
   * 
   * @example
   * forbid_login
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The list of password expiration notification channels.
   * 
   * @example
   * ["login"]
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The password expiration notification period, in days.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * The password expiration notification status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * The password expiration status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The forced password change period, in days.
   * 
   * @example
   * 3
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The password validity period, in days.
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
   * The password expiration configuration.
   */
  passwordExpirationConfiguration?: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration;
  /**
   * @remarks
   * The request ID.
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

