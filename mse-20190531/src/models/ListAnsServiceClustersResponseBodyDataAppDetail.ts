// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServiceClustersResponseBodyDataAppDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for which Microservices Governance is enabled.
   * 
   * @example
   * hkhon1po62@904cba2c0xxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application for which Microservices Governance is enabled.
   * 
   * @example
   * spring-cloud-b
   */
  appName?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 2
   */
  checkInternal?: number;
  /**
   * @remarks
   * The path of the health check. This parameter is required only when the CheckType parameter is set to http.
   * 
   * @example
   * /health
   */
  checkPath?: string;
  /**
   * @remarks
   * The timeout period of the health check response. Unit: seconds.
   * 
   * @example
   * 5
   */
  checkTimeout?: number;
  /**
   * @remarks
   * The type of the health check. Valid values:
   * 
   * *   connection: connection status check
   * *   tcp: TCP connection check
   * *   http: HTTP connection check
   * 
   * @example
   * connection
   */
  checkType?: string;
  /**
   * @remarks
   * The maximum number of health check retries when the instance state changes from unhealthy to healthy.
   * 
   * @example
   * 2
   */
  healthyCheckTimes?: number;
  /**
   * @remarks
   * The port number of the application for which Microservices Governance is enabled.
   * 
   * @example
   * 6001
   */
  port?: number;
  /**
   * @remarks
   * The maximum number of health check retries when the instance state changes from healthy to unhealthy.
   * 
   * @example
   * 2
   */
  unhealthyCheckTimes?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      checkInternal: 'CheckInternal',
      checkPath: 'CheckPath',
      checkTimeout: 'CheckTimeout',
      checkType: 'CheckType',
      healthyCheckTimes: 'HealthyCheckTimes',
      port: 'Port',
      unhealthyCheckTimes: 'UnhealthyCheckTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      checkInternal: 'number',
      checkPath: 'string',
      checkTimeout: 'number',
      checkType: 'string',
      healthyCheckTimes: 'number',
      port: 'number',
      unhealthyCheckTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

