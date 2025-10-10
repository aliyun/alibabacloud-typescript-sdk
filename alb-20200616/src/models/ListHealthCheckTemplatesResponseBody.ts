// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags extends $dara.Model {
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
   * The tag value. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
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
   * The HTTP status codes that indicate healthy backend servers.
   */
  healthCheckCodes?: string[];
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: \\*\\* 0 to 65535\\*\\*.
   * 
   * The default value is **0**, which specifies that the port of a backend server is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$SERVER_IP** (default): the private IP address of a backend server. If an IP address is specified, or this parameter is not specified, the ALB instance uses the private IP address of each backend server as the domain name for health checks.
   * *   **domain**: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * >  This parameter takes effect only if you set `HealthCheckProtocol` to **HTTP** or **HTTPS**.
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
   * >  This parameter takes effect only if you set `HealthCheckProtocol` to **HTTP** or **HTTPS**.
   * 
   * @example
   * HTTP 1.0
   */
  healthCheckHttpVersion?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds. Valid values: **1 to 50**. Default value: **2**.
   * 
   * @example
   * 5
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
   * HEAD
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The URL path that you want to use for health checks.
   * 
   * The URL must be 1 to 80 characters in length, and can contain letters, digits, the following special characters: - / . % ? # &, and the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The URL must start with a forward slash (/).
   * 
   * @example
   * /test/index.html
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The protocol that is used for health checks. Valid values:
   * 
   * *   **HTTP** (default): The ALB instance sends HEAD or GET requests, which simulate browser requests, to check whether the backend server is healthy.
   * *   **HTTPS**: HTTPS health checks simulate browser behaviors by sending HEAD or GET requests to probe the availability of backend servers. HTTPS provides higher security because HTTPS supports data encryption.
   * *   **TCP**: TCP health checks send TCP SYN packets to a backend server to check whether the port of the backend server is reachable.
   * *   **gRPC**: gRPC health checks send POST or GET requests to a backend server to check whether the backend server is healthy.
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
   * hct-bp1qjwo61pqz3ahltv****
   */
  healthCheckTemplateId?: string;
  /**
   * @remarks
   * The name of the health check template.
   * 
   * The name must be 2 to 128 character characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * HealthCheckTemplate1
   */
  healthCheckTemplateName?: string;
  /**
   * @remarks
   * The timeout period of a health check response. If a backend Elastic Compute Service (ECS) instance does not respond within the specified timeout period, the ECS instance fails to pass the health check.
   * 
   * Valid values: **1 to 300**. Unit: seconds.
   * 
   * Default value: **5**.
   * 
   * @example
   * 3
   */
  healthCheckTimeout?: number;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**.
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
  tags?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplatesTags[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**.
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
   * The health check templates.
   */
  healthCheckTemplates?: ListHealthCheckTemplatesResponseBodyHealthCheckTemplates[];
  /**
   * @remarks
   * The number of entries returned per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
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
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

