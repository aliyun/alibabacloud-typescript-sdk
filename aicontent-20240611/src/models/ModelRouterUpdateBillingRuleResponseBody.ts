// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateBillingRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * token_tiered
   */
  billingType?: string;
  /**
   * @remarks
   * The deletion tag.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The time when the rule takes effect.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * 通义千问Plus
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * chat
   */
  modelType?: string;
  /**
   * @remarks
   * The billing configuration.
   * 
   * @example
   * {}
   */
  pricingConfig?: any;
  /**
   * @remarks
   * The vendor ID.
   * 
   * @example
   * alibaba
   */
  symbol?: string;
  /**
   * @remarks
   * The version number.
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

export class ModelRouterUpdateBillingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ModelRouterUpdateBillingRuleResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UNKNOWN_ERROR
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModelRouterUpdateBillingRuleResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

