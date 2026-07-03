// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMCPServersRequestNacosMcpServers extends $dara.Model {
  /**
   * @remarks
   * The exposed URI path. This parameter is required when protocol is SSE or StreamableHTTP and type is RealMCP.
   * 
   * @example
   * /sse
   */
  exposedUriPath?: string;
  /**
   * @remarks
   * The Nacos instance ID.
   * 
   * @example
   * mse-24afmoioxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * MCP Server ID
   * 
   * @example
   * mcp-d3s8qo6m1hknegofa3bg
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The MCP Server name.
   * 
   * @example
   * test
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The protocols.
   */
  protocols?: string[];
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      instanceId: 'instanceId',
      mcpServerId: 'mcpServerId',
      mcpServerName: 'mcpServerName',
      protocols: 'protocols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
      instanceId: 'string',
      mcpServerId: 'string',
      mcpServerName: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncMCPServersRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cq7l5s5lhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of Nacos MCP Servers to sync. If the list contains MCP Servers that have already been synced, include the mcpServerId.
   */
  nacosMcpServers?: SyncMCPServersRequestNacosMcpServers[];
  /**
   * @remarks
   * The Nacos namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-d40mff6m1hkpt84vep60
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainIds: 'domainIds',
      gatewayId: 'gatewayId',
      nacosMcpServers: 'nacosMcpServers',
      namespace: 'namespace',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIds: { 'type': 'array', 'itemType': 'string' },
      gatewayId: 'string',
      nacosMcpServers: { 'type': 'array', 'itemType': SyncMCPServersRequestNacosMcpServers },
      namespace: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(Array.isArray(this.nacosMcpServers)) {
      $dara.Model.validateArray(this.nacosMcpServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

