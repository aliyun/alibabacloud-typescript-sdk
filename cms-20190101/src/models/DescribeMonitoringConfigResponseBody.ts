// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CloudMonitor agent is automatically installed on existing Elastic Compute Service (ECS) instances. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the CloudMonitor agent is automatically installed on new ECS instances. Valid values: Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableInstallAgentNewECS?: boolean;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F35654DB-0C9D-4FB3-903F-479BA7663061
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      code: 'Code',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      code: 'string',
      enableInstallAgentNewECS: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

