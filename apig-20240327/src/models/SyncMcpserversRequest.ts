// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncMCPServersRequestNacosMcpServers extends $dara.Model {
  /**
   * @remarks
   * The exposed URI path. This parameter is required when the protocol is SSE or StreamableHTTP and the type is RealMCP.
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
   * The unique ID of the MCP server.
   * 
   * @example
   * mcp-d3s8qo6m1hknegofa3bg
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name of the MCP server.
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
   * The list of domain name IDs. You can obtain the system default domain name ID from the subDomainInfos[].domainId field in the ListGateways response. Note: This parameter is required. If you do not specify this parameter, the API returns the InvalidParameter.IsEmpty (400) error.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The ID of the gateway. Note: This parameter is required. If you do not specify this parameter, the API returns the InvalidParameter.IsEmpty (400) error.
   * 
   * @example
   * gw-cq7l5s5lhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of Nacos MCP servers to sync. If the list includes an already synced MCP server, you must specify the mcpServerId parameter.
   */
  nacosMcpServers?: SyncMCPServersRequestNacosMcpServers[];
  /**
   * @remarks
   * The Nacos namespace. Note: This parameter is required. If you do not specify this parameter, the API returns the InvalidParameter.IsEmpty (400) error.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the source.
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

