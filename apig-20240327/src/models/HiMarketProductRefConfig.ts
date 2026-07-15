// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketProductRefConfigApigRefConfig extends $dara.Model {
  /**
   * @remarks
   * The associated Agent API ID.
   * 
   * @example
   * api-xxx
   */
  agentApiId?: string;
  /**
   * @remarks
   * The Agent API name.
   * 
   * @example
   * my-agent-api
   */
  agentApiName?: string;
  /**
   * @remarks
   * The associated MCP route ID.
   * 
   * @example
   * route-xxx
   */
  mcpRouteId?: string;
  /**
   * @remarks
   * The associated MCP Server ID.
   * 
   * @example
   * mcp-xxx
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The MCP Server name.
   * 
   * @example
   * my-mcp-server
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The associated Model API ID.
   * 
   * @example
   * api-yyy
   */
  modelApiId?: string;
  /**
   * @remarks
   * The Model API name.
   * 
   * @example
   * qwen-model-api
   */
  modelApiName?: string;
  static names(): { [key: string]: string } {
    return {
      agentApiId: 'agentApiId',
      agentApiName: 'agentApiName',
      mcpRouteId: 'mcpRouteId',
      mcpServerId: 'mcpServerId',
      mcpServerName: 'mcpServerName',
      modelApiId: 'modelApiId',
      modelApiName: 'modelApiName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentApiId: 'string',
      agentApiName: 'string',
      mcpRouteId: 'string',
      mcpServerId: 'string',
      mcpServerName: 'string',
      modelApiId: 'string',
      modelApiName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketProductRefConfig extends $dara.Model {
  /**
   * @remarks
   * The APIG resource reference configuration.
   */
  apigRefConfig?: HiMarketProductRefConfigApigRefConfig;
  /**
   * @remarks
   * The ID of the associated gateway.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      apigRefConfig: 'apigRefConfig',
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apigRefConfig: HiMarketProductRefConfigApigRefConfig,
      gatewayId: 'string',
    };
  }

  validate() {
    if(this.apigRefConfig && typeof (this.apigRefConfig as any).validate === 'function') {
      (this.apigRefConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

