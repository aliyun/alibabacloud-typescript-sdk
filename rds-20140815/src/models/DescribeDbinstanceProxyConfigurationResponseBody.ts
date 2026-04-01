// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceProxyConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the mechanism that is used to mitigate brute-force attacks is enabled:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * The return value is a JSON string. Example:
   * 
   *     {"status":"Disable", "check_interval_seconds": 60,
   *               "max_failed_login_attempts": 60, "blocking_seconds": 600}
   * 
   * Description:
   * 
   * *   Each client allows {max_failed_login_attempts} logon attempts that fail due to incorrect passwords within {check_interval_seconds} seconds. If one more such attempt is conducted, the client must wait for {blocking_seconds} seconds before you can try again.
   * 
   * *   Valid values:
   * 
   *     *   check_interval_seconds: **30 to 600**. Unit: seconds.
   *     *   max_failed_login_attempts: **10 to 5000**. Unit: times.
   *     *   blocking_seconds: **30 to 3600**. Unit: seconds.
   * 
   * @example
   * {\\"check_interval_seconds\\":\\"0\\",\\"max_failed_login_attempts\\":\\"0\\",\\"blocking_seconds\\":\\"0\\",\\"status\\":\\"Disable\\"}
   */
  attacksProtectionConfiguration?: string;
  /**
   * @remarks
   * Indicates whether the short-lived connection optimization feature is enabled.
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * In this case, the return value is a JSON string. Examples:
   * 
   *     {"status":"Disable"}.
   * 
   * @example
   * {\\"status\\":\\"Disable\\"}
   */
  persistentConnectionsConfiguration?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the transparent switchover feature is enabled.
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * The return value is a JSON string. Example:
   * 
   *     {"status":"Enable"}
   * 
   * @example
   * {\\"status\\":\\"Enable\\"}
   */
  transparentSwitchConfiguration?: string;
  static names(): { [key: string]: string } {
    return {
      attacksProtectionConfiguration: 'AttacksProtectionConfiguration',
      persistentConnectionsConfiguration: 'PersistentConnectionsConfiguration',
      requestId: 'RequestId',
      transparentSwitchConfiguration: 'TransparentSwitchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attacksProtectionConfiguration: 'string',
      persistentConnectionsConfiguration: 'string',
      requestId: 'string',
      transparentSwitchConfiguration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

