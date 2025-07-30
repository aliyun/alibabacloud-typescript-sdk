// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether forcible password change upon first logon is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The methods for receiving password initialization notifications.
   * 
   * @example
   * email
   */
  passwordInitializationNotificationChannels?: string[];
  /**
   * @remarks
   * Indicates whether the password initialization feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. Set the value to random.
   * 
   * *   random: A randomly generated password is used.
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
   * The password initialization configurations.
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

