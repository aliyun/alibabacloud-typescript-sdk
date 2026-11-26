// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHealthCheckTemplateRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * Generate a parameter value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: sends a precheck request without creating the resource. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. After the request passes the precheck, the **http_2xx** status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of normal status codes for health checks.
   * 
   * @example
   * 5
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * Default value: **0**, which indicates that the port of the backend server is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name used for health checks. Valid values: 
   * 
   * - **$SERVER_IP**: the private IP of the backend server. If an IP address is specified or this parameter is not specified, load balancing uses the private IP of the backend server as the domain name for health checks.
   * 
   * - **domain**: The domain name must be 1 to 80 characters in length, and can contain only letters, digits, periods (.), and hyphens (-).
   * 
   * > This parameter takes effect only when `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * $SERVER_IP
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
   * > This parameter is available only when `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval between health checks.
   * 
   * Valid values: **1** to **50**. Unit: seconds.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method. Valid values:
   * 
   * - **HEAD** (default): the default method for HTTP and HTTPS listener health checks.
   * 
   * - **POST**: the default method for gRPC listener health checks.
   * 
   * - **GET**: If the length of the response message exceeds 8 KB, the message is truncated. However, this does not affect the health check result.
   * 
   * > This parameter is available only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL used for health checks.
   * 
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), ampersands (&), and the following extended characters: `_;~!()*[]@$^:\",+`. The URL must start with a forward slash (/).
   * 
   * > This parameter is available only when `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
   * 
   * - **HTTP** (default): sends HEAD or GET requests for browser access impersonation to check whether the server application is healthy.
   * 
   * - **HTTPS**: sends HEAD or GET requests for browser access impersonation to check whether the server application is healthy. (Provides data encryption, making it more secure than HTTP.)
   * 
   * - **TCP**: sends SYN handshake messages to check whether the server port is alive.
   * 
   * - **gRPC**: sends POST or GET requests to check whether the server application is healthy.
   * 
   * @example
   * HTTP
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The name of the health check template. The name must be 2 to 128 characters in length. It must start with a letter, Chinese character, or digit, and can contain letters, Chinese characters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * HealthCheckTemplate1
   */
  healthCheckTemplateName?: string;
  /**
   * @remarks
   * The timeout period for receiving a response from a health check. If the backend server does not respond within the specified timeout period, the health check fails.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks that must occur before the health check status of a backend server changes from **Failed** to **Successful**.
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
   * The ID of the resource group.
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
   * The number of consecutive failed health checks that must occur before the health check status of a backend server changes from **Successful** to **Failed**.
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

