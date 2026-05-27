// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServiceRequestConnectionAuth extends $dara.Model {
  /**
   * @remarks
   * key
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

export class CreateMcpServiceRequestConnection extends $dara.Model {
  auth?: CreateMcpServiceRequestConnectionAuth;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://10.0.1.23:8080/mcp
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
   * 10000
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
      auth: CreateMcpServiceRequestConnectionAuth,
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

export class CreateMcpServiceRequestNetwork extends $dara.Model {
  /**
   * @example
   * 100.2.243.1
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
   * mcp-xxxx
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
   * cn-zhangjiakou
   */
  region?: string;
  /**
   * @example
   * sg-xxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vpc-xxx
   */
  vpcId?: string;
  /**
   * @example
   * vsw-xxxx
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

export class CreateMcpServiceRequestTools extends $dara.Model {
  annotations?: { [key: string]: any };
  confirm?: boolean;
  /**
   * @example
   * hahahhahaha
   */
  description?: string;
  /**
   * @example
   * ahahah
   */
  displayName?: string;
  /**
   * @example
   * True
   */
  enable?: boolean;
  execution?: { [key: string]: any };
  icons?: { [key: string]: any }[];
  /**
   * @remarks
   * This parameter is required.
   */
  inputSchema?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agentloop-1654218979e79fb55dbddac2
   */
  name?: string;
  outputSchema?: { [key: string]: any };
  /**
   * @example
   * 1
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

export class CreateMcpServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  connection?: CreateMcpServiceRequestConnection;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * test
   */
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
   * 
   * @example
   * test
   */
  mcpServiceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  network?: CreateMcpServiceRequestNetwork;
  /**
   * @remarks
   * This parameter is required.
   */
  tools?: CreateMcpServiceRequestTools[];
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
      connection: CreateMcpServiceRequestConnection,
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      mcpServiceName: 'string',
      network: CreateMcpServiceRequestNetwork,
      tools: { 'type': 'array', 'itemType': CreateMcpServiceRequestTools },
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

