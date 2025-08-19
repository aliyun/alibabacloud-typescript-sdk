// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppQuotaResponseBodyResultLimiterInfoLimiters extends $dara.Model {
  /**
   * @example
   * true
   */
  immutable?: boolean;
  /**
   * @example
   * 10
   */
  maxValue?: number;
  /**
   * @example
   * 1
   */
  minValue?: number;
  /**
   * @example
   * INDEX_NUMBER_OF_SHARDS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      immutable: 'immutable',
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      immutable: 'boolean',
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResultLimiterInfo extends $dara.Model {
  limiters?: GetAppQuotaResponseBodyResultLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': GetAppQuotaResponseBodyResultLimiterInfoLimiters },
    };
  }

  validate() {
    if(Array.isArray(this.limiters)) {
      $dara.Model.validateArray(this.limiters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBodyResult extends $dara.Model {
  limiterInfo?: GetAppQuotaResponseBodyResultLimiterInfo;
  quotaInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      limiterInfo: 'limiterInfo',
      quotaInfo: 'quotaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiterInfo: GetAppQuotaResponseBodyResultLimiterInfo,
      quotaInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.limiterInfo && typeof (this.limiterInfo as any).validate === 'function') {
      (this.limiterInfo as any).validate();
    }
    if(this.quotaInfo) {
      $dara.Model.validateMap(this.quotaInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: GetAppQuotaResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetAppQuotaResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

