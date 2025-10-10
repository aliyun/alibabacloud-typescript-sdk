// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHealthCheckTemplateAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length, and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
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

export class GetHealthCheckTemplateAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes that indicate a healthy backend server.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **0** to **65535**.
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
   * $SERVER_IP
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The HTTP version for health checks.
   * 
   * Valid values: **HTTP1.0** and **HTTP1.1**.
   * 
   * >  This parameter takes effect only if you set `HealthCheckProtocol` to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds. Valid values: **1 to 50**.
   * 
   * @example
   * 3
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values:
   * 
   * *   **HEAD** (default): By default, HTTP and HTTPS health checks use the HEAD method.
   * *   **GET**: If the length of a response exceeds 8 KB, the response is truncated. However, the health check result is not affected.
   * *   **POST**: gRPC health checks use the POST method by default.
   * 
   * >  This parameter takes effect only if you set **HealthCheckProtocol** to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * GET
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, the following special characters: - / . % ? # &, and the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The URL must start with a forward slash (/).
   * 
   * >  This parameter takes effect only if you set **HealthCheckProtocol** to **HTTP**, **HTTPS**, or **gRPC**.
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
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to probe the availability of backend servers.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to probe the availability of backend servers.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The ID of the health check template.
   * 
   * @example
   * hct-x4jazoyi6tvsq9****
   */
  healthCheckTemplateId?: string;
  /**
   * @remarks
   * The name of the health check template.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * HealthCheckTemplate1
   */
  healthCheckTemplateName?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend server does not respond within the specified timeout period, the backend server is declared unhealthy. Unit: seconds.
   * 
   * Valid values: **1** to **300**.
   * 
   * @example
   * 200
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 5
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB1AFC33-DAE8-528E-AA4D-4A6AABE71945
   */
  requestId?: string;
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
  tags?: GetHealthCheckTemplateAttributeResponseBodyTags[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 5
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
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
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetHealthCheckTemplateAttributeResponseBodyTags },
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckCodes)) {
      $dara.Model.validateArray(this.healthCheckCodes);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

