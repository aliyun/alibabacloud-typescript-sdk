// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration extends $dara.Model {
  /**
   * @remarks
   * The maximum number of recent passwords that are retained.
   * 
   * @example
   * 3
   */
  passwordHistoryMaxRetention?: number;
  /**
   * @remarks
   * Indicates whether the password history feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordHistoryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      passwordHistoryMaxRetention: 'PasswordHistoryMaxRetention',
      passwordHistoryStatus: 'PasswordHistoryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordHistoryMaxRetention: 'number',
      passwordHistoryStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password history configurations.
   */
  passwordHistoryConfiguration?: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration;
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
      passwordHistoryConfiguration: 'PasswordHistoryConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordHistoryConfiguration: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.passwordHistoryConfiguration && typeof (this.passwordHistoryConfiguration as any).validate === 'function') {
      (this.passwordHistoryConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

