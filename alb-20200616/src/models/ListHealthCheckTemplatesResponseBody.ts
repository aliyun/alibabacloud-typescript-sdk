// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class ListHealthCheckTemplatesResponseBodyHealthCheckTemplates extends $dara.Model {
  /**
   * @remarks
   * The list of status codes that indicate a successful health check.
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
   * - **$SERVER_IP** (default): the private IP of the backend server. If you specify an IP address or leave this parameter empty, load balancing uses the private IP of each backend server as the domain name for health checks.
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
   * The HTTP version used for health checks.
   * 
   * Valid values: **HTTP 1.0** and **HTTP 1.1**.
   * 
   * Default value: **HTTP 1.1**.
   * 
   * > This parameter takes effect only when `HealthCheckProtocol` is set to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**. Default value: **2**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method. Valid values:
   * 
   * - **HEAD** (default): The default method for HTTP and HTTPS health checks.
   * 
   * - **GET**: If the length of the response message exceeds 8 KB, the message is truncated. However, the truncation does not affect the health check result.
   * 
   * - **POST**: The default method for gRPC health checks.
   * 
   * > This parameter takes effect only when **HealthCheckProtocol** is set to **HTTP**, **HTTPS**, or **gRPC**.
   * 
   * @example
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL used for health checks.
   * 
   * The URL must be 1 to 80 characters in length and can contain only letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), ampersands (&), and the following extended characters: `_;~!()*[]@$^:\",+`. The URL must start with a forward slash (/).
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
   * 
   * - **HTTP** (default): sends HEAD or GET requests to perform browser access impersonation and check whether the server application is healthy.
   * 
   * - **HTTPS**: sends HEAD or GET requests to perform browser access impersonation and check whether the server application is healthy. (With data encryption, it is more secure than HTTP.)
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
   * The health check template ID.
   * 
   * @example
   * hct-bp1qjwo61pqz3ahltv****
   */
  healthCheckTemplateId?: string;
  /**
   * @remarks
   * The health check template name.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * HealthCheckTemplate1
   */
  healthCheckTemplateName?: string;
  /**
   * @remarks
   * The timeout period for receiving a response from a health check. If the backend ECS instance does not return a correct response within the specified timeout period, the health check is considered failed.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * Default value: **5**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of consecutive successful health checks required to change the health check status of a backend server from **Failed** to **Successful**.
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
  tags?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags[];
  /**
   * @remarks
   * The number of consecutive failed health checks required to change the health check status of a backend server from **Successful** to **Failed**.
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
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags },
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

export class ListHealthCheckTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of health check templates.
   */
  healthCheckTemplates?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplates[];
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no next query is available.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records returned for the current request.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckTemplates: 'HealthCheckTemplates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckTemplates: { 'type': 'array', 'itemType': ListHealthCheckTemplatesResponseBodyHealthCheckTemplates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckTemplates)) {
      $dara.Model.validateArray(this.healthCheckTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

