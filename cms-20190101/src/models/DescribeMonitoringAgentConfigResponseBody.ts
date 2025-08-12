// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the CloudMonitor agent is automatically installed on existing Elastic Compute Service (ECS) instances. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
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
   * The cloud services for which proactive alerting is enabled.
   * 
   * @example
   * redis,rds,ecs
   */
  enableActiveAlert?: string;
  /**
   * @remarks
   * Indicates whether the CloudMonitor agent is automatically installed on newly purchased ECS instances. Valid values:
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
   * E9F4FA2A-54BE-4EF9-9D1D-1A0B1DC86B8D
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
      enableActiveAlert: 'EnableActiveAlert',
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
      enableActiveAlert: 'string',
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

