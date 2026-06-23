// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordInitializationConfigurationRequest extends $dara.Model {
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
   * The password forced update status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The list of password initialization notification channels.
   * 
   * @example
   * email
   */
  passwordInitializationNotificationChannels?: string[];
  /**
   * @remarks
   * The password initialization configuration status. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. This parameter is required when PasswordInitializationStatus is set to enabled. Valid values:
   * - random: Random.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationNotificationChannels: 'PasswordInitializationNotificationChannels',
      passwordInitializationStatus: 'PasswordInitializationStatus',
      passwordInitializationType: 'PasswordInitializationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordForcedUpdateStatus: 'string',
      passwordInitializationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordInitializationStatus: 'string',
      passwordInitializationType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.passwordInitializationNotificationChannels)) {
      $dara.Model.validateArray(this.passwordInitializationNotificationChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

