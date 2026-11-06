// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketAgentConfig } from "./HiMarketAgentConfig";
import { HiMarketProductFeature } from "./HiMarketProductFeature";
import { HiMarketIcon } from "./HiMarketIcon";
import { HiMarketMcpConfig } from "./HiMarketMcpConfig";
import { HiMarketModelConfig } from "./HiMarketModelConfig";


export class GetProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent-related configurations of the API product. The agentAPIConfig member includes agentProtocols (the list of protocols supported by the agent) and routes (the list of routes).
   */
  agentConfig?: HiMarketAgentConfig;
  /**
   * @remarks
   * Indicates whether subscription requests for the product are automatically approved.
   */
  autoApprove?: boolean;
  /**
   * @remarks
   * The description of the API product.
   * 
   * @example
   * API product that provides weather query capabilities
   */
  description?: string;
  /**
   * @remarks
   * The documentation content of the API product.
   * 
   * @example
   * Invocation methods, parameters, and billing instructions for this product
   */
  document?: string;
  /**
   * @remarks
   * The capability configurations of the API product. Currently, this includes only the modelFeature (model capabilities) member, which contains model, maxTokens, temperature, streaming, webSearch, enableThinking, and enableMultiModal.
   */
  feature?: HiMarketProductFeature;
  /**
   * @remarks
   * The icon configuration of the API product, which consists of two fields: icon type (type) and icon information (value).
   */
  icon?: HiMarketIcon;
  /**
   * @remarks
   * The MCP-related configurations of the API product. The members include mcpServerName (the name of the MCP server), tools, mcpServerConfig (path and domains), and meta (protocol).
   */
  mcpConfig?: HiMarketMcpConfig;
  /**
   * @remarks
   * The model API-related configurations of the API product. The modelAPIConfig member includes modelCategory (the AI model category), aiProtocols (the list of AI API protocols), and routes (the list of routes).
   */
  modelConfig?: HiMarketModelConfig;
  /**
   * @remarks
   * The name of the API product.
   * 
   * @example
   * weather-query-api
   */
  name?: string;
  /**
   * @remarks
   * The ID of the API product, which is the primary ID of the API product resource. You can use this ID to locate the product in operations such as GetProduct, UpdateProduct, DeleteProduct, PublishProduct, SetProductCategories, and GetProductRef.
   * 
   * @example
   * p-xxxxxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The ID of the region to which the API product belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the API product. Valid values: Pending, Ready, and Published.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The type of the API product. The valid values are not declared in the API definition. Refer to the types displayed in the console.
   * 
   * @example
   * API
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfig: 'agentConfig',
      autoApprove: 'autoApprove',
      description: 'description',
      document: 'document',
      feature: 'feature',
      icon: 'icon',
      mcpConfig: 'mcpConfig',
      modelConfig: 'modelConfig',
      name: 'name',
      productId: 'productId',
      regionId: 'regionId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfig: HiMarketAgentConfig,
      autoApprove: 'boolean',
      description: 'string',
      document: 'string',
      feature: HiMarketProductFeature,
      icon: HiMarketIcon,
      mcpConfig: HiMarketMcpConfig,
      modelConfig: HiMarketModelConfig,
      name: 'string',
      productId: 'string',
      regionId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.agentConfig && typeof (this.agentConfig as any).validate === 'function') {
      (this.agentConfig as any).validate();
    }
    if(this.feature && typeof (this.feature as any).validate === 'function') {
      (this.feature as any).validate();
    }
    if(this.icon && typeof (this.icon as any).validate === 'function') {
      (this.icon as any).validate();
    }
    if(this.mcpConfig && typeof (this.mcpConfig as any).validate === 'function') {
      (this.mcpConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetProductResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetProductResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

