// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppRequest extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
   * 
   * @example
   * 3
   */
  healthCheckFailTimes?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. This parameter is empty by default.
   * 
   * @example
   * www.aliyun.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP status code returned for a successful health check. Valid values:
   * 
   * *   **http_2xx** (default)
   * *   **http_3xx**
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**. Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP request method for health checks. Valid values:
   * 
   * *   **HEAD** (default): requests the headers of the resource.
   * *   **GET**: requests the specified resource and returns both the headers and entity body.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: 1 to 65535. Default value: 80.
   * 
   * @example
   * 80
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
   * 
   * @example
   * 2
   */
  healthCheckSuccTimes?: number;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds.\\
   * Valid values: **1** to **100**.\\
   * Default value: **3**.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The health check type. By default, this parameter is left empty.
   * 
   * Valid values:
   * 
   * *   **l4**: Layer 4 health check.
   * *   **l7**: Layer 7 health check.
   * 
   * @example
   * l7
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI used for health checks. The URI must be **1** to **80** characters in length. Default value: "/".
   * 
   * @example
   * /health_check
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * app-test
   */
  name?: string;
  /**
   * @remarks
   * The remarks. This parameter is empty by default.
   * 
   * @example
   * test app
   */
  remarks?: string;
  /**
   * @remarks
   * The server port. Valid values: 1 to 65535.
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

