// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpRouteMatch } from "./HttpRouteMatch";


export class CreateMcpServerRequestAssembledSources extends $dara.Model {
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-sdfa3qgavz
   */
  mcpServerId?: string;
  /**
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'mcpServerId',
      mcpServerName: 'mcpServerName',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
      mcpServerName: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequestBackendConfigServices extends $dara.Model {
  /**
   * @example
   * 8080
   */
  port?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * svc-crbgq0dlhtgr***
   */
  serviceId?: string;
  /**
   * @example
   * 2.1.6
   */
  version?: string;
  /**
   * @example
   * 49
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequestBackendConfig extends $dara.Model {
  /**
   * @example
   * SingleService
   */
  scene?: string;
  services?: CreateMcpServerRequestBackendConfigServices[];
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      services: { 'type': 'array', 'itemType': CreateMcpServerRequestBackendConfigServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequest extends $dara.Model {
  assembledSources?: CreateMcpServerRequestAssembledSources[];
  backendConfig?: CreateMcpServerRequestBackendConfig;
  /**
   * @example
   * mcp tool fetch time
   */
  description?: string;
  domainIds?: string[];
  /**
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gw-cq7l5s5lhtgi6qac0
   */
  gatewayId?: string;
  match?: HttpRouteMatch;
  /**
   * @example
   * false
   */
  mcpStatisticsEnable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fetch-time
   */
  name?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RealMCP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      assembledSources: 'assembledSources',
      backendConfig: 'backendConfig',
      description: 'description',
      domainIds: 'domainIds',
      exposedUriPath: 'exposedUriPath',
      gatewayId: 'gatewayId',
      match: 'match',
      mcpStatisticsEnable: 'mcpStatisticsEnable',
      name: 'name',
      protocol: 'protocol',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assembledSources: { 'type': 'array', 'itemType': CreateMcpServerRequestAssembledSources },
      backendConfig: CreateMcpServerRequestBackendConfig,
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      exposedUriPath: 'string',
      gatewayId: 'string',
      match: HttpRouteMatch,
      mcpStatisticsEnable: 'boolean',
      name: 'string',
      protocol: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assembledSources)) {
      $dara.Model.validateArray(this.assembledSources);
    }
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

