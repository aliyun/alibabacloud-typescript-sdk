// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordExpirationConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of effective authentication source IDs.
   */
  effectiveAuthenticationSourceIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The action to take when a password expires. This parameter is required when PasswordExpirationStatus is set to enabled. Valid values:
   * - forbid_login: Prohibit logon.
   * - force_update_password: Force password change.
   * - remind_update_password: Remind to change password.
   * 
   * @example
   * force_update_password
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The list of password expiration notification channels. This parameter is required when PasswordExpirationNotificationStatus is set to enabled.
   * 
   * @example
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The password expiration notification time, in days. This parameter is required when PasswordExpirationNotificationStatus is set to enabled.
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
   * The password expiration configuration status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The forced password change time, in days. The value of this parameter must be greater than the value of PasswordExpirationNotificationDuration.
   * 
   * @example
   * 7
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The validity period of a password, in days. This parameter is required when PasswordExpirationStatus is set to enabled.
   * 
   * @example
   * 180
   */
  passwordValidMaxDay?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveAuthenticationSourceIds: 'EffectiveAuthenticationSourceIds',
      instanceId: 'InstanceId',
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
      instanceId: 'string',
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

