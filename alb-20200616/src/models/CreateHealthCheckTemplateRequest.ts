// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHealthCheckTemplateRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * product
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHealthCheckTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a **2xx** HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The HTTP status codes that indicate a healthy backend server.
   * 
   * @example
   * 5
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **0 to 65535**.
   * 
   * Default value: **0**. If you set the value to 0, the port of a backend server is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the private IP addresses of backend servers. If an IP address is specified, or this parameter is not specified, the ALB instance uses the private IP addresses of backend servers as domain names for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * >  This parameter takes effect only if `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * $_ip
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version for health checks.
   * 
   * Valid values: **HTTP 1.0** and **HTTP 1.1**.
   * 
   * Default value: **HTTP 1.1**.
   * 
   * >  This parameter is available only if `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed.
   * 
   * Valid values: **1 to 50**.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values:
   * 
   * *   **HEAD** (default): By default, HTTP and HTTPS health checks use the HEAD method.
   * *   **POST**: gRPC health checks use the POST method by default.
   * *   **GET**: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected.
   * 
   * >  This parameter is available only if **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, the following special characters: - / . % ? # &, and the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The URL must start with a forward slash (/).
   * 
   * >  This parameter is available only if `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol that is used for health checks. Valid values:
   * 
   * *   **HTTP** (default): HTTP health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers.
   * *   **HTTPS**: The ALB instance sends HEAD or GET requests, which simulate browser requests, to check whether the backend server is healthy. HTTPS supports encryption and provides higher security than HTTP.
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to check whether the port of the backend server is reachable.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to check whether the backend server is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The name of the health check template.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * HealthCheckTemplate1
   */
  healthCheckTemplateName?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server does not respond within the specified timeout period, the backend server is declared unhealthy.
   * 
   * Valid values: **1 to 300**. Unit: seconds.
   * 
   * Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2 to 10**.
   * 
   * Default value: **3**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateHealthCheckTemplateRequestTag[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2 to 10**.
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
      healthCheckTemplateName: 'HealthCheckTemplateName',
      healthCheckTimeout: 'HealthCheckTimeout',
      healthyThreshold: 'HealthyThreshold',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
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
      healthCheckTemplateName: 'string',
      healthCheckTimeout: 'number',
      healthyThreshold: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateHealthCheckTemplateRequestTag },
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckCodes)) {
      $dara.Model.validateArray(this.healthCheckCodes);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

