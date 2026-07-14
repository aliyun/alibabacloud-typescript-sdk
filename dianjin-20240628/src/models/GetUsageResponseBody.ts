// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUsageResponseBodyDataEntitlements extends $dara.Model {
  allowedModels?: string[];
  /**
   * @example
   * 1
   */
  bindingId?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  effectiveAt?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  expireAt?: string;
  /**
   * @example
   * 1
   */
  quotaInitial?: number;
  /**
   * @example
   * 1
   */
  quotaRemaining?: number;
  /**
   * @example
   * 1
   */
  quotaUsed?: number;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @example
   * 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'allowedModels',
      bindingId: 'bindingId',
      effectiveAt: 'effectiveAt',
      expireAt: 'expireAt',
      quotaInitial: 'quotaInitial',
      quotaRemaining: 'quotaRemaining',
      quotaUsed: 'quotaUsed',
      status: 'status',
      templateId: 'templateId',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: { 'type': 'array', 'itemType': 'string' },
      bindingId: 'number',
      effectiveAt: 'string',
      expireAt: 'string',
      quotaInitial: 'number',
      quotaRemaining: 'number',
      quotaUsed: 'number',
      status: 'string',
      templateId: 'number',
      templateName: 'string',
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

export class GetUsageResponseBodyDataModelStats extends $dara.Model {
  /**
   * @example
   * 50
   */
  inputUsage?: number;
  /**
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @example
   * 50
   */
  outputUsage?: number;
  /**
   * @example
   * 1
   */
  requests?: number;
  /**
   * @example
   * 100
   */
  totalUsage?: number;
  static names(): { [key: string]: string } {
    return {
      inputUsage: 'inputUsage',
      model: 'model',
      outputUsage: 'outputUsage',
      requests: 'requests',
      totalUsage: 'totalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputUsage: 'number',
      model: 'string',
      outputUsage: 'number',
      requests: 'number',
      totalUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsageResponseBodyDataSummary extends $dara.Model {
  /**
   * @example
   * 50
   */
  totalInputUsage?: number;
  /**
   * @example
   * 50
   */
  totalOutputUsage?: number;
  /**
   * @example
   * 1
   */
  totalRequests?: number;
  /**
   * @example
   * 100
   */
  totalUsage?: number;
  static names(): { [key: string]: string } {
    return {
      totalInputUsage: 'totalInputUsage',
      totalOutputUsage: 'totalOutputUsage',
      totalRequests: 'totalRequests',
      totalUsage: 'totalUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalInputUsage: 'number',
      totalOutputUsage: 'number',
      totalRequests: 'number',
      totalUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsageResponseBodyData extends $dara.Model {
  entitlements?: GetUsageResponseBodyDataEntitlements[];
  modelStats?: GetUsageResponseBodyDataModelStats[];
  summary?: GetUsageResponseBodyDataSummary;
  static names(): { [key: string]: string } {
    return {
      entitlements: 'entitlements',
      modelStats: 'modelStats',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entitlements: { 'type': 'array', 'itemType': GetUsageResponseBodyDataEntitlements },
      modelStats: { 'type': 'array', 'itemType': GetUsageResponseBodyDataModelStats },
      summary: GetUsageResponseBodyDataSummary,
    };
  }

  validate() {
    if(Array.isArray(this.entitlements)) {
      $dara.Model.validateArray(this.entitlements);
    }
    if(Array.isArray(this.modelStats)) {
      $dara.Model.validateArray(this.modelStats);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUsageResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetUsageResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  retryAble?: boolean;
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
      data: GetUsageResponseBodyData,
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

