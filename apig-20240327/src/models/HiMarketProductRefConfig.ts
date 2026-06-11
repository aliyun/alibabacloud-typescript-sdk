// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketProductRefConfigApigRefConfig extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the agent API.
   */
  agentApiId?: string;
  /**
   * @remarks
   * The name of the agent API.
   */
  agentApiName?: string;
  /**
   * @remarks
   * Unique identifier for the MCP route.
   */
  mcpRouteId?: string;
  /**
   * @remarks
   * Unique identifier for the MCP server.
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name of the MCP server.
   */
  mcpServerName?: string;
  /**
   * @remarks
   * Unique identifier for the model API.
   */
  modelApiId?: string;
  /**
   * @remarks
   * The name of the model API.
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
   * Reference settings for the API gateway.
   */
  apigRefConfig?: HiMarketProductRefConfigApigRefConfig;
  /**
   * @remarks
   * Unique identifier for the gateway.
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

