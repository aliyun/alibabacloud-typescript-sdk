// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The status of forced password update. Valid values:
   * 
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
   * The status of the password initialization configuration. Valid values:
   * 
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. Valid values:
   * 
   * - random: Random.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationNotificationChannels: 'PasswordInitializationNotificationChannels',
      passwordInitializationStatus: 'PasswordInitializationStatus',
      passwordInitializationType: 'PasswordInitializationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetPasswordInitializationConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password initialization configuration.
   */
  passwordInitializationConfiguration?: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration;
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
      passwordInitializationConfiguration: 'PasswordInitializationConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordInitializationConfiguration: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordInitializationConfiguration && typeof (this.passwordInitializationConfiguration as any).validate === 'function') {
      (this.passwordInitializationConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

