// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpServiceRequestConnectionAuth extends $dara.Model {
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

export class UpdateMcpServiceRequestConnection extends $dara.Model {
  auth?: UpdateMcpServiceRequestConnectionAuth;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/mcp
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
      auth: UpdateMcpServiceRequestConnectionAuth,
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

export class UpdateMcpServiceRequestNetwork extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
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

export class UpdateMcpServiceRequestTools extends $dara.Model {
  /**
   * @example
   * {}
   */
  annotations?: { [key: string]: any };
  /**
   * @example
   * false
   */
  confirm?: boolean;
  description?: string;
  displayName?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * {}
   */
  execution?: { [key: string]: any };
  /**
   * @example
   * []
   */
  icons?: { [key: string]: any }[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"type":"object","properties":{"query":{"type":"string"}},"required":["query"]}
   */
  inputSchema?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * query_logs
   */
  name?: string;
  /**
   * @example
   * {"type":"object"}
   */
  outputSchema?: { [key: string]: any };
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

export class UpdateMcpServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  connection?: UpdateMcpServiceRequestConnection;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  network?: UpdateMcpServiceRequestNetwork;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"name":"query_logs"}]
   */
  tools?: UpdateMcpServiceRequestTools[];
  static names(): { [key: string]: string } {
    return {
      connection: 'connection',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      network: 'network',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connection: UpdateMcpServiceRequestConnection,
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      network: UpdateMcpServiceRequestNetwork,
      tools: { 'type': 'array', 'itemType': UpdateMcpServiceRequestTools },
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

