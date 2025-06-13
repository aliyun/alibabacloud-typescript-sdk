// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes that indicate healthy backend servers.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * If you set the value to **0**, the backend port is used for health checks.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true**.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * *   **Backend Server Internal IP** (default): Use the internal IP address of backend servers as the health check domain name.
   * 
   * *   **Custom Domain Name**: Enter a domain name.
   * 
   *     *   The domain name must be 1 to 80 characters in length.
   *     *   The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
   *     *   The domain name must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label of the domain name can contain only letters, and cannot contain digits or hyphens (-).
   *     *   The domain name cannot start or end with a hyphen (-).
   * 
   * >  This parameter takes effect only if **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * example.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version that is used for health checks. Valid values:
   * 
   * *   **HTTP1.0**
   * *   **HTTP1.1**
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to true and **HealthCheckProtocol** to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values:
   * 
   * *   **GET**: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected.
   * *   **POST**: gRPC health checks use the POST method by default.
   * *   **HEAD**: HTTP and HTTPS health checks use the HEAD method by default.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to true and **HealthCheckProtocol** to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, and the following special characters: `- / . % ? # & =`. It can also contain the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The URL must start with a forward slash (`/`).
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true** and **HealthCheckProtocol** to **HTTP** or **HTTPS**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks. Valid values:
   * 
   * *   **HTTP**: HTTP health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers.
   * *   **HTTPS**: HTTPS health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers. HTTPS supports encryption and provides higher security than HTTP.
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to probe the availability of backend servers.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to check whether the backend server is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * >  This parameter takes effect only if you set **HealthCheckEnabled** to **true**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it can be declared healthy. In this case, the health check status of the backend server changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it can be declared unhealthy. In this case, the health check status of the backend server changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckCodes)) {
      $dara.Model.validateArray(this.healthCheckCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

