// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of effective authentication source IDs. Default value: ["ia_all"].
   * 
   * - ia_all: All authentication sources. If this value is specified, no other values can be specified.
   * - ia_password: Account password logon.
   * - ia_otp_sms: SMS verification code logon.
   * - ia_webauthn: WebAuthn authenticator logon.
   * - idp_xxx: Authentication method of a specific identity provider.
   */
  effectiveAuthenticationSourceIds?: string[];
  /**
   * @remarks
   * The action to take when a password expires. Valid values:
   * 
   * - forbid_login: Forbid logon.
   * - force_update_password: Force password change.
   * - remind_update_password: Remind password change.
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
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The advance notice period before password expiration. Unit: days.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * The status of password expiration notification. Valid values:
   * 
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * The status of the password expiration configuration. Valid values:
   * 
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The grace period for forced password change after expiration. Unit: days.
   * 
   * @example
   * 3
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The maximum validity period of a password. Unit: days.
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

