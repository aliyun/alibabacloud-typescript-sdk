// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchRemoteMcpToolsRequestConnectionAuth extends $dara.Model {
  /**
   * @example
   * {"token":"example-token"}
   */
  keyInfo?: { [key: string]: string };
  /**
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
  auth?: FetchRemoteMcpToolsRequestConnectionAuth;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/mcp
   */
  endpoint?: string;
  /**
   * @example
   * Custom
   */
  platform?: string;
  /**
   * @example
   * 5000
   */
  timeout?: number;
  /**
   * @remarks
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
      platform: 'platform',
      timeout: 'timeout',
      transport: 'transport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: FetchRemoteMcpToolsRequestConnectionAuth,
      endpoint: 'string',
      platform: 'string',
      timeout: 'number',
      transport: 'string',
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchRemoteMcpToolsRequestNetwork extends $dara.Model {
  /**
   * @example
   * 10.0.0.12
   */
  accessIp?: string;
  /**
   * @example
   * 8080
   */
  accessPort?: number;
  /**
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @example
   * mcp-xxx
   */
  mcpServerId?: string;
  /**
   * @example
   * public
   */
  mode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * sg-xxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
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
   * This parameter is required.
   */
  connection?: FetchRemoteMcpToolsRequestConnection;
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

