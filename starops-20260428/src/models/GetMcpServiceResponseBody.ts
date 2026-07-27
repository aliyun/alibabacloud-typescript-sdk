// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpServiceResponseBodyMcpServiceConnectionAuth extends $dara.Model {
  /**
   * @remarks
   * The key-value information required for authentication.
   * 
   * @example
   * {"token":"example-token"}
   */
  keyInfo?: { [key: string]: string };
  /**
   * @remarks
   * The authentication type. Currently, bearer is supported.
   * 
   * @example
   * bearer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'keyInfo',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.keyInfo) {
      $dara.Model.validateMap(this.keyInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServiceResponseBodyMcpServiceConnection extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration of the MCP service.
   */
  auth?: GetMcpServiceResponseBodyMcpServiceConnectionAuth;
  /**
   * @remarks
   * The access endpoint of the MCP service.
   * 
   * @example
   * https://example.com/mcp
   */
  endpoint?: string;
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The MCP service platform type. Valid values: AIGateway and Custom.
   * 
   * @example
   * Custom
   */
  platform?: string;
  /**
   * @remarks
   * The timeout period for requests to the MCP service. Unit: milliseconds.
   * 
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
   * The MCP service transport protocol. Valid values: http and sse.
   * 
   * @example
   * http
   */
  transport?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'auth',
      endpoint: 'endpoint',
      headers: 'headers',
      platform: 'platform',
      timeout: 'timeout',
      transport: 'transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: GetMcpServiceResponseBodyMcpServiceConnectionAuth,
      endpoint: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      platform: 'string',
      timeout: 'number',
      transport: 'string',
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServiceResponseBodyMcpServiceNetwork extends $dara.Model {
  /**
   * @remarks
   * The IP address used to access the MCP service over the VPC network.
   * 
   * @example
   * 10.0.0.12
   */
  accessIp?: string;
  /**
   * @remarks
   * The port used to access the MCP service over the VPC network. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  accessPort?: number;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The MCP Server instance ID.
   * 
   * @example
   * mcp-xxx
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The network access mode of the MCP service. Valid values: public and vpc.
   * 
   * @example
   * public
   */
  mode?: string;
  /**
   * @remarks
   * The region where the VPC network resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'accessIp',
      accessPort: 'accessPort',
      gatewayId: 'gatewayId',
      mcpServerId: 'mcpServerId',
      mode: 'mode',
      region: 'region',
      securityGroupId: 'securityGroupId',
      vpcId: 'vpcId',
      vswId: 'vswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      accessPort: 'number',
      gatewayId: 'string',
      mcpServerId: 'string',
      mode: 'string',
      region: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServiceResponseBodyMcpServiceTools extends $dara.Model {
  /**
   * @remarks
   * The annotation information of the MCP tool.
   * 
   * @example
   * {}
   */
  annotations?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether user confirmation is required before the MCP tool is called.
   * 
   * @example
   * false
   */
  confirm?: boolean;
  /**
   * @remarks
   * The description of the MCP tool.
   * 
   * @example
   * 查询指定日志库中的日志。
   */
  description?: string;
  /**
   * @remarks
   * The display name of the MCP tool.
   * 
   * @example
   * 日志查询工具
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the MCP tool is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The execution configuration of the MCP tool.
   * 
   * @example
   * {}
   */
  execution?: { [key: string]: any };
  /**
   * @remarks
   * The list of MCP tool icons.
   * 
   * @example
   * []
   */
  icons?: { [key: string]: any }[];
  /**
   * @remarks
   * The JSON Schema of the MCP tool input parameters.
   * 
   * @example
   * {"type":"object","properties":{"query":{"type":"string"}},"required":["query"]}
   */
  inputSchema?: { [key: string]: any };
  /**
   * @remarks
   * The name of the MCP tool.
   * 
   * @example
   * query_logs
   */
  name?: string;
  /**
   * @remarks
   * The JSON Schema of the MCP tool output.
   * 
   * @example
   * {"type":"object"}
   */
  outputSchema?: { [key: string]: any };
  /**
   * @remarks
   * The title of the MCP tool.
   * 
   * @example
   * 查询日志
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      confirm: 'confirm',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      execution: 'execution',
      icons: 'icons',
      inputSchema: 'inputSchema',
      name: 'name',
      outputSchema: 'outputSchema',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      confirm: 'boolean',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      execution: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      icons: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      inputSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      outputSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.execution) {
      $dara.Model.validateMap(this.execution);
    }
    if(Array.isArray(this.icons)) {
      $dara.Model.validateArray(this.icons);
    }
    if(this.inputSchema) {
      $dara.Model.validateMap(this.inputSchema);
    }
    if(this.outputSchema) {
      $dara.Model.validateMap(this.outputSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServiceResponseBodyMcpService extends $dara.Model {
  /**
   * @remarks
   * The MCP service connection configuration.
   */
  connection?: GetMcpServiceResponseBodyMcpServiceConnection;
  /**
   * @remarks
   * The description of the MCP service.
   * 
   * @example
   * 通过 MCP 调用日志查询工具。
   */
  description?: string;
  /**
   * @remarks
   * The display name of the MCP service.
   * 
   * @example
   * 日志查询
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the MCP service is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The service name of the MCP service.
   * 
   * @example
   * log-query
   */
  mcpServiceName?: string;
  /**
   * @remarks
   * The network connectivity information.
   */
  network?: GetMcpServiceResponseBodyMcpServiceNetwork;
  /**
   * @remarks
   * The list of MCP tools.
   * 
   * @example
   * [{"name":"query_logs"}]
   */
  tools?: GetMcpServiceResponseBodyMcpServiceTools[];
  static names(): { [key: string]: string } {
    return {
      connection: 'connection',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      mcpServiceName: 'mcpServiceName',
      network: 'network',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connection: GetMcpServiceResponseBodyMcpServiceConnection,
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      mcpServiceName: 'string',
      network: GetMcpServiceResponseBodyMcpServiceNetwork,
      tools: { 'type': 'array', 'itemType': GetMcpServiceResponseBodyMcpServiceTools },
    };
  }

  validate() {
    if(this.connection && typeof (this.connection as any).validate === 'function') {
      (this.connection as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MCP service details.
   */
  mcpService?: GetMcpServiceResponseBodyMcpService;
  /**
   * @remarks
   * The region of the current request.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mcpService: 'mcpService',
      regionId: 'regionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpService: GetMcpServiceResponseBodyMcpService,
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.mcpService && typeof (this.mcpService as any).validate === 'function') {
      (this.mcpService as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

