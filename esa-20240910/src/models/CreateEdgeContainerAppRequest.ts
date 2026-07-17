// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppRequest extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks required. If an application is healthy, it is considered unhealthy after the specified number of consecutive failed probes.
   * - Valid values: **1 to 10**. 
   * - Default value: **5**.
   * 
   * @example
   * 3
   */
  healthCheckFailTimes?: number;
  /**
   * @remarks
   * The domain name used for health checks. If not specified, the value is empty by default.
   * 
   * @example
   * www.aliyun.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP status code that indicates a Normal health check result. Valid values:
   * 
   * - **http_2xx** (default).
   * - **http_3xx**.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between health checks.
   * - Valid values: **1** to **50**.
   * - Default value: **5**.
   * - Unit: **seconds**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method for HTTP-type listeners. Valid values:
   * 
   * - **HEAD** (default): requests only the header of the page.
   * - **GET**: requests the specified page information and returns the entity body.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The port used for health checks.
   * - Valid values: **1 to 65535**.
   * - Default value: **80**.
   * 
   * @example
   * 80
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required. If an application is unhealthy, it is considered healthy again after the specified number of consecutive successful probes.
   * - Valid values: **1 to 10**.
   * - Default value: **2**.
   * 
   * @example
   * 2
   */
  healthCheckSuccTimes?: number;
  /**
   * @remarks
   * The amount of time to wait for a response from the health check. If the backend ECS instance does not respond correctly within the specified time, the health check is considered failed.    
   * 
   * - Valid values: **1** to **100**.   
   * - Default value: **3**.
   * - Unit: **seconds**.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The health check type, which includes Layer 4 and Layer 7 probing. If not specified, the value is empty by default.
   * 
   * Valid values:
   * 
   * - **l4**: Layer 4 probing.
   * - **l7**: Layer 7 probing.
   * 
   * @example
   * l7
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI used for health checks.
   * - Length limit: **1** to **80** characters.
   * - Default value: **"/"**.
   * 
   * @example
   * /health_check
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The application name. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
   * >Notice: You must activate the EdgeContainer service in the console before calling this operation. Calls from accounts that have not activated the service will return a service activation error.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * app-test
   */
  name?: string;
  /**
   * @remarks
   * The remarks. If not specified, the value is empty by default.
   * 
   * @example
   * test app
   */
  remarks?: string;
  /**
   * @remarks
   * The service port number. Valid values: 1 to 65535.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  servicePort?: number;
  /**
   * @remarks
   * The backend port, which is also the service port of the application. Valid values: 1 to 65535.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckFailTimes: 'HealthCheckFailTimes',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPort: 'HealthCheckPort',
      healthCheckSuccTimes: 'HealthCheckSuccTimes',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      name: 'Name',
      remarks: 'Remarks',
      servicePort: 'ServicePort',
      targetPort: 'TargetPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckFailTimes: 'number',
      healthCheckHost: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPort: 'number',
      healthCheckSuccTimes: 'number',
      healthCheckTimeout: 'number',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      name: 'string',
      remarks: 'string',
      servicePort: 'number',
      targetPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

