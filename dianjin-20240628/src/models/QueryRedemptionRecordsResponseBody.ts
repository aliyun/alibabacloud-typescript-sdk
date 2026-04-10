// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRedemptionRecordsResponseBodyDataItems extends $dara.Model {
  allowedModels?: string[];
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveAt?: string;
  /**
   * @example
   * 2024-01-31T23:59:59Z
   */
  expireAt?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * a1b2c3d4e5f6...
   */
  keyHash?: string;
  /**
   * @example
   * AR123233333
   */
  outBizNo?: string;
  /**
   * @example
   * 500
   */
  quotaBalance?: number;
  /**
   * @example
   * AVAILABLE
   */
  quotaStatus?: string;
  /**
   * @example
   * ORD20240101000001
   */
  redemptionOrderNo?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * 37624
   */
  templateId?: number;
  /**
   * @example
   * 10001
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'allowedModels',
      effectiveAt: 'effectiveAt',
      expireAt: 'expireAt',
      gmtCreate: 'gmtCreate',
      id: 'id',
      keyHash: 'keyHash',
      outBizNo: 'outBizNo',
      quotaBalance: 'quotaBalance',
      quotaStatus: 'quotaStatus',
      redemptionOrderNo: 'redemptionOrderNo',
      status: 'status',
      templateId: 'templateId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: { 'type': 'array', 'itemType': 'string' },
      effectiveAt: 'string',
      expireAt: 'string',
      gmtCreate: 'string',
      id: 'number',
      keyHash: 'string',
      outBizNo: 'string',
      quotaBalance: 'number',
      quotaStatus: 'string',
      redemptionOrderNo: 'string',
      status: 'string',
      templateId: 'number',
      tenantId: 'number',
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

export class QueryRedemptionRecordsResponseBodyData extends $dara.Model {
  items?: QueryRedemptionRecordsResponseBodyDataItems[];
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
   * 0
   */
  total?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      page: 'page',
      pageSize: 'pageSize',
      total: 'total',
      totalPages: 'totalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QueryRedemptionRecordsResponseBodyDataItems },
      page: 'number',
      pageSize: 'number',
      total: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRedemptionRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: QueryRedemptionRecordsResponseBodyData;
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
      data: QueryRedemptionRecordsResponseBodyData,
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

