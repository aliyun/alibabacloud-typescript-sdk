// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketAgentConfig } from "./HiMarketAgentConfig";
import { HiMarketProductCategory } from "./HiMarketProductCategory";
import { HiMarketProductFeature } from "./HiMarketProductFeature";
import { HiMarketIcon } from "./HiMarketIcon";
import { HiMarketMcpConfig } from "./HiMarketMcpConfig";
import { HiMarketModelConfig } from "./HiMarketModelConfig";


export class ListProductsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The agent-related configurations of the API product. The agentAPIConfig member includes the list of protocols supported by the agent (agentProtocols) and the list of routes (routes).
   */
  agentConfig?: HiMarketAgentConfig;
  /**
   * @remarks
   * Indicates whether subscription requests for the API product are automatically approved. This corresponds to the AutoApprove property of the Product resource.
   */
  autoApprove?: boolean;
  /**
   * @remarks
   * The list of product categories to which the API product belongs. The list element is named category.
   */
  categories?: HiMarketProductCategory[];
  /**
   * @remarks
   * The description of the API product. This corresponds to the Description property of the Product resource.
   * 
   * @example
   * An API product that provides weather query capabilities
   */
  description?: string;
  /**
   * @remarks
   * The documentation of the API product. This corresponds to the Document property of the Product resource.
   * 
   * @example
   * The invocation methods, parameters, and billing instructions for this product
   */
  document?: string;
  /**
   * @remarks
   * The capability configurations of the API product. Currently, this includes only the modelFeature member, which contains model, maxTokens, temperature, streaming, webSearch, enableThinking, and enableMultiModal.
   */
  feature?: HiMarketProductFeature;
  /**
   * @remarks
   * The icon of the API product. This corresponds to the Icon property of the Product resource and consists of two fields: icon type (type) and icon information (value).
   */
  icon?: HiMarketIcon;
  /**
   * @remarks
   * The MCP-related configurations of the API product. The members include the MCP server name (mcpServerName), tools, MCP server configurations (mcpServerConfig, which includes path and domains), and metadata (meta, which includes protocol).
   */
  mcpConfig?: HiMarketMcpConfig;
  /**
   * @remarks
   * The model API-related configurations of the API product. The modelAPIConfig member includes the AI model category (modelCategory), the list of AI API protocols (aiProtocols), and the list of routes (routes).
   */
  modelConfig?: HiMarketModelConfig;
  /**
   * @remarks
   * The name of the API product. This corresponds to the Name property of the Product resource.
   * 
   * @example
   * weather-query-api
   */
  name?: string;
  /**
   * @remarks
   * The ID of the API product. This is the primary ID of the Product resource. You can use this ID to locate the product in operations such as GetProduct, UpdateProduct, DeleteProduct, PublishProduct, SetProductCategories, and ListProductPublications.
   * 
   * @example
   * product-xxxxxxxx
   */
  productId?: string;
  /**
   * @remarks
   * The status of the API product. This corresponds to the Status property of the Product resource. Valid values: Pending, Ready, Published.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The type of the API product. This corresponds to the Type property of the Product resource. The valid values are not declared in the API definition. Refer to the types displayed in the console.
   * 
   * @example
   * API
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentConfig: 'agentConfig',
      autoApprove: 'autoApprove',
      categories: 'categories',
      description: 'description',
      document: 'document',
      feature: 'feature',
      icon: 'icon',
      mcpConfig: 'mcpConfig',
      modelConfig: 'modelConfig',
      name: 'name',
      productId: 'productId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentConfig: HiMarketAgentConfig,
      autoApprove: 'boolean',
      categories: { 'type': 'array', 'itemType': HiMarketProductCategory },
      description: 'string',
      document: 'string',
      feature: HiMarketProductFeature,
      icon: HiMarketIcon,
      mcpConfig: HiMarketMcpConfig,
      modelConfig: HiMarketModelConfig,
      name: 'string',
      productId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.agentConfig && typeof (this.agentConfig as any).validate === 'function') {
      (this.agentConfig as any).validate();
    }
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
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

export class ListProductsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of API products. The list element is named productInfo, and each element contains the information of an API product.
   */
  content?: ListProductsResponseBodyDataContent[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListProductsResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
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
  data?: ListProductsResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries returned in the current request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
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
   * The cursor token for querying the next page.
   * 
   * @example
   * next-token-xxxxxxxx
   */
  nextToken?: string;
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
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListProductsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

