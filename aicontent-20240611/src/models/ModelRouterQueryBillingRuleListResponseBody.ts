// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingRuleListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * token_tiered
   */
  billingType?: string;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveTime?: string;
  /**
   * @example
   * 2025-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * 通义千问Plus
   */
  modelName?: string;
  /**
   * @example
   * chat
   */
  modelType?: string;
  /**
   * @example
   * {}
   */
  pricingConfig?: any;
  /**
   * @example
   * alibaba
   */
  symbol?: string;
  /**
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
  list?: ModelRouterQueryBillingRuleListResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
  data?: ModelRouterQueryBillingRuleListResponseBodyData;
  /**
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
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
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
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

