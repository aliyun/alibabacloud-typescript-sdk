// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceProxyConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether brute-force attacks protection is enabled. Valid values:
   * * **Enable**: Enabled.
   * * **Disable**: Disabled.
   * 
   * 
   * The return value is a JSON character string in the following format:
   * 
   * 	{"status":"Disable", "check_interval_seconds": 60,
   *               "max_failed_login_attempts": 60, "blocking_seconds": 600}
   * Parameter description and value ranges:
   * * For each client, a maximum of max_failed_login_attempts fault password logon attempts are allowed within check_interval_seconds seconds. If the limit is exceeded, the client IP address is blocked for blocking_seconds seconds.
   * * Value ranges:
   *   * check_interval_seconds: **30 to 600**. Unit: seconds.
   *   * max_failed_login_attempts: **10 to 5000**. Unit: attempts.
   *   * blocking_seconds: **30 to 3600**. Unit: seconds.
   * 
   * @example
   * {\\"check_interval_seconds\\":\\"0\\",\\"max_failed_login_attempts\\":\\"0\\",\\"blocking_seconds\\":\\"0\\",\\"status\\":\\"Disable\\"}
   */
  attacksProtectionConfiguration?: string;
  /**
   * @remarks
   * Indicates whether short-lived connection optimization is enabled. Valid values:
   * * **Enable**: Enabled.
   * * **Disable**: Disabled.
   * 
   * The return value is a JSON string in the following format:
   * 
   * 	{"status":"Disable"}.
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
   * Indicates whether transparent switchover is enabled. Valid values:
   * * **Enable**: Enabled.
   * * **Disable**: Disabled.
   * 
   * The return value is a JSON string in the following format:
   * 
   * 	{"status":"Enable"}.
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

