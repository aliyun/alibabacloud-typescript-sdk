// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchRemoteMcpToolsRequestConnectionAuth extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * {"token":"example-token"}
   */
  keyInfo?: { [key: string]: string };
  /**
   * @remarks
   * The authentication type. Currently, only bearer is supported.
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

export class FetchRemoteMcpToolsRequestConnection extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  auth?: FetchRemoteMcpToolsRequestConnectionAuth;
  /**
   * @remarks
   * The access endpoint of the MCP service.
   * 
   * This parameter is required.
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
   * The transport protocol of the MCP service. Valid values: http and sse.
   * 
   * This parameter is required.
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
      auth: FetchRemoteMcpToolsRequestConnectionAuth,
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

export class FetchRemoteMcpToolsRequestNetwork extends $dara.Model {
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
   * The VPC ID.
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

export class FetchRemoteMcpToolsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * This parameter is required.
   */
  connection?: FetchRemoteMcpToolsRequestConnection;
  /**
   * @remarks
   * The request body parameters.
   */
  network?: FetchRemoteMcpToolsRequestNetwork;
  static names(): { [key: string]: string } {
    return {
      connection: 'connection',
      network: 'network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connection: FetchRemoteMcpToolsRequestConnection,
      network: FetchRemoteMcpToolsRequestNetwork,
    };
  }

  validate() {
    if(this.connection && typeof (this.connection as any).validate === 'function') {
      (this.connection as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

