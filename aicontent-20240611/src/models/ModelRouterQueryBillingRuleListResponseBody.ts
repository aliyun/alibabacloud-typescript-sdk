// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingRuleListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Billing type
   * 
   * @example
   * token_tiered
   */
  billingType?: string;
  /**
   * @remarks
   * Delete marker
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * Effective time
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Expiration time
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Model identifier
   * 
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @remarks
   * Model ID
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Model name
   * 
   * @example
   * 通义千问Plus
   */
  modelName?: string;
  /**
   * @remarks
   * Model type
   * 
   * @example
   * chat
   */
  modelType?: string;
  /**
   * @remarks
   * Billing configuration
   * 
   * @example
   * {}
   */
  pricingConfig?: any;
  /**
   * @remarks
   * Vendor identifier
   * 
   * @example
   * alibaba
   */
  symbol?: string;
  /**
   * @remarks
   * Version number
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      deleteTag: 'deleteTag',
      effectiveTime: 'effectiveTime',
      expireTime: 'expireTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelType: 'modelType',
      pricingConfig: 'pricingConfig',
      symbol: 'symbol',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      deleteTag: 'number',
      effectiveTime: 'string',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelType: 'string',
      pricingConfig: 'any',
      symbol: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryBillingRuleListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of billing rules
   */
  list?: ModelRouterQueryBillingRuleListResponseBodyDataList[];
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      page: 'page',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ModelRouterQueryBillingRuleListResponseBodyDataList },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelRouterQueryBillingRuleListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response data
   */
  data?: ModelRouterQueryBillingRuleListResponseBodyData;
  /**
   * @remarks
   * Error code
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * maxResults
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterQueryBillingRuleListResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

