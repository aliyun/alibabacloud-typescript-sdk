// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHealthCheckTemplateAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request.
   * 
   * You must generate a unique value on your client for each request. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the `RequestId` of the request as the `ClientToken`. The `RequestId` of each request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run to check the request. The system checks for required parameters, request syntax, and business constraints without performing the operation. If the request is invalid, an error is returned. If the request is valid, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. If the request is valid, a **2xx HTTP** status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of status codes that indicate a healthy state.
   * 
   * @example
   * 5
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port used for health checks. Valid values: **0** to **65535**.
   * The default value is **0**, which means the health check uses the backend server\"s port.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name used for health checks. Valid values:
   * 
   * - **$SERVER_IP** (default): The private IP of a backend server. If you specify this value or leave the parameter empty, the load balancing service uses the private IP of the backend server for health checks.
   * 
   * - **domain**: A domain name that is 1 to 80 characters long and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * > This parameter takes effect only when the `HealthCheckProtocol` parameter is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version used for health checks.
   * 
   * Valid values: **HTTP1.0** and **HTTP1.1**.
   * 
   * Default value: **HTTP1.1**.
   * 
   * > This parameter takes effect only when the `HealthCheckProtocol` parameter is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval between health checks, in seconds. Valid values: **1** to **50**. Default value: **2**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The method used for health checks. Valid values:
   * 
   * - **HEAD** (default): The default method for health checks on HTTP and HTTPS listeners.
   * 
   * - **GET**: If the response body is larger than 8 KB, it is truncated. This does not affect the health check result.
   * 
   * - **POST**: The default method for health checks on gRPC listeners.
   * 
   * > This parameter takes effect only when the **HealthCheckProtocol** parameter is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL used for health checks.
   * 
   * The URL must be 1 to 80 characters long. It can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), ampersands (&), and the following extended characters: `_;~!()*[]@$^:\",+`.
   * 
   * The URL must start with a forward slash (/).
   * 
   * > This parameter takes effect only when the **HealthCheckProtocol** parameter is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
   * 
   * - **HTTP** (default): Checks the health of a backend server by sending an HTTP HEAD or GET request.
   * 
   * - **HTTPS**: Checks the health of a backend server by sending an HTTPS HEAD or GET request. HTTPS is more secure than HTTP because it encrypts data.
   * 
   * - **TCP**: Checks if a backend server port is reachable by sending a TCP SYN packet.
   * 
   * - **gRPC**: Checks the health of a backend server by sending a POST or GET request.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The health check template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hct-bp1qjwo61******
   */
  healthCheckTemplateId?: string;
  /**
   * @remarks
   * The name of the health check template.
   * 
   * The name must be 2 to 128 characters long, start with a letter, a Chinese character, or a digit, and can contain letters, Chinese characters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * HealthCheckTemplate1
   */
  healthCheckTemplateName?: string;
  /**
   * @remarks
   * The timeout period, in seconds, for a health check response. A health check fails if a backend server does not respond within this period.
   * 
   * Valid values: **1** to **300**. Default value: **5**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change a backend server\"s status from **unhealthy** to **healthy**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The number of consecutive failed health checks required to change a backend server\"s status from **healthy** to **unhealthy**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      healthCheckCodes: 'HealthCheckCodes',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckHost: 'HealthCheckHost',
      healthCheckHttpVersion: 'HealthCheckHttpVersion',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckPath: 'HealthCheckPath',
      healthCheckProtocol: 'HealthCheckProtocol',
      healthCheckTemplateId: 'HealthCheckTemplateId',
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      healthCheckCodes: { 'type': 'array', 'itemType': 'string' },
      healthCheckConnectPort: 'number',
      healthCheckHost: 'string',
      healthCheckHttpVersion: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckPath: 'string',
      healthCheckProtocol: 'string',
      healthCheckTemplateId: 'string',
      healthCheckTemplateName: 'string',
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

