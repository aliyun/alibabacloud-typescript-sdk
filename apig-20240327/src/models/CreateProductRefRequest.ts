// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductRefRequestApigRefConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated agent API.
   * 
   * @example
   * api-xxxxxxxx
   */
  agentApiId?: string;
  /**
   * @remarks
   * The name of the associated agent API.
   * 
   * @example
   * petstore
   */
  agentApiName?: string;
  /**
   * @remarks
   * The ID of the associated API.
   * 
   * @example
   * api-xxx
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the associated API.
   * 
   * @example
   * petstore
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the associated MCP route.
   * 
   * @example
   * hr-xxxxxxxx
   */
  mcpRouteId?: string;
  /**
   * @remarks
   * The ID of the associated MCP server.
   * 
   * @example
   * mcp-adfefz24afg
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name of the associated MCP server.
   * 
   * @example
   * test-mcp
   */
  mcpServerName?: string;
  /**
   * @remarks
   * The ID of the associated model API.
   * 
   * @example
   * api-xxxxxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The name of the associated model API.
   * 
   * @example
   * petstore
   */
  modelApiName?: string;
  static names(): { [key: string]: string } {
    return {
      agentApiId: 'agentApiId',
      agentApiName: 'agentApiName',
      apiId: 'apiId',
      apiName: 'apiName',
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
      apiId: 'string',
      apiName: 'string',
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

export class CreateProductRefRequest extends $dara.Model {
  /**
   * @remarks
   * The API configuration associated with the API product.
   */
  apigRefConfig?: CreateProductRefRequestApigRefConfig;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * gw-123456
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
      apigRefConfig: CreateProductRefRequestApigRefConfig,
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

