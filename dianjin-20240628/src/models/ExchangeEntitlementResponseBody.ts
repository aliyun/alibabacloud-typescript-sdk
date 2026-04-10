// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExchangeEntitlementResponseBodyDataTemplate extends $dara.Model {
  allowedModels?: string[];
  /**
   * @example
   * 1000
   */
  quotaLimit?: number;
  /**
   * @example
   * 10001
   */
  templateId?: number;
  /**
   * @example
   * 基础版 Token 包
   */
  templateName?: string;
  /**
   * @example
   * TOKEN_PACK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'allowedModels',
      quotaLimit: 'quotaLimit',
      templateId: 'templateId',
      templateName: 'templateName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: { 'type': 'array', 'itemType': 'string' },
      quotaLimit: 'number',
      templateId: 'number',
      templateName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedModels)) {
      $dara.Model.validateArray(this.allowedModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExchangeEntitlementResponseBodyData extends $dara.Model {
  /**
   * @example
   * sk_live_abc123xyz789
   */
  apiKey?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveAt?: string;
  /**
   * @example
   * https://llm-gateway.example.com/acme
   */
  endpoint?: string;
  /**
   * @example
   * 2024-01-31T23:59:59Z
   */
  expireAt?: string;
  /**
   * @example
   * a1b2c3d4e5f6...
   */
  keyHash?: string;
  /**
   * @example
   * ORD20240101000001
   */
  redemptionOrderNo?: string;
  /**
   * @example
   * false
   */
  reused?: boolean;
  template?: ExchangeEntitlementResponseBodyDataTemplate;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      effectiveAt: 'effectiveAt',
      endpoint: 'endpoint',
      expireAt: 'expireAt',
      keyHash: 'keyHash',
      redemptionOrderNo: 'redemptionOrderNo',
      reused: 'reused',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      effectiveAt: 'string',
      endpoint: 'string',
      expireAt: 'string',
      keyHash: 'string',
      redemptionOrderNo: 'string',
      reused: 'boolean',
      template: ExchangeEntitlementResponseBodyDataTemplate,
    };
  }

  validate() {
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExchangeEntitlementResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ExchangeEntitlementResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * false
   */
  retryAble?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExchangeEntitlementResponseBodyData,
      message: 'string',
      retryAble: 'boolean',
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

