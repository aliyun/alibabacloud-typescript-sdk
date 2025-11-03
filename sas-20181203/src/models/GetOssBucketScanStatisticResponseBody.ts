// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssBucketScanStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the purchased quota.
   * 
   * @example
   * 1714442403000
   */
  expireTime?: number;
  /**
   * @remarks
   * The number of high-risk objects.
   * 
   * @example
   * 0
   */
  highRisk?: number;
  /**
   * @remarks
   * The number of low-risk objects.
   * 
   * @example
   * 0
   */
  lowRisk?: number;
  /**
   * @remarks
   * The number of medium-risk objects.
   * 
   * @example
   * 0
   */
  mediumRisk?: number;
  /**
   * @remarks
   * The number of buckets that are not checked.
   * 
   * @example
   * 1
   */
  noScanBucket?: number;
  postPayInvokeCount?: number;
  prePayAuthCount?: number;
  prePayInvokeCount?: number;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 1
   */
  remainAuth?: number;
  /**
   * @remarks
   * The number of buckets in which at-risk objects exist.
   * 
   * @example
   * 1
   */
  riskBucket?: number;
  /**
   * @remarks
   * The number of objects that are checked.
   * 
   * @example
   * 1
   */
  scanObject?: number;
  /**
   * @remarks
   * The total number of buckets.
   * 
   * @example
   * 1
   */
  totalBucket?: number;
  /**
   * @remarks
   * The total number of objects in the bucket.
   * 
   * @example
   * 1
   */
  totalObject?: number;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      highRisk: 'HighRisk',
      lowRisk: 'LowRisk',
      mediumRisk: 'MediumRisk',
      noScanBucket: 'NoScanBucket',
      postPayInvokeCount: 'PostPayInvokeCount',
      prePayAuthCount: 'PrePayAuthCount',
      prePayInvokeCount: 'PrePayInvokeCount',
      remainAuth: 'RemainAuth',
      riskBucket: 'RiskBucket',
      scanObject: 'ScanObject',
      totalBucket: 'TotalBucket',
      totalObject: 'TotalObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      highRisk: 'number',
      lowRisk: 'number',
      mediumRisk: 'number',
      noScanBucket: 'number',
      postPayInvokeCount: 'number',
      prePayAuthCount: 'number',
      prePayInvokeCount: 'number',
      remainAuth: 'number',
      riskBucket: 'number',
      scanObject: 'number',
      totalBucket: 'number',
      totalObject: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOssBucketScanStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetOssBucketScanStatisticResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FAC50208-E56B-5CC8-8738-2B219D1A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetOssBucketScanStatisticResponseBodyData,
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

