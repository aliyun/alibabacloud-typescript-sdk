// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssBucketScanStatisticResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1605905716750024
   */
  expireTime?: number;
  /**
   * @example
   * 1
   */
  highRisk?: number;
  /**
   * @example
   * 1
   */
  lowRisk?: number;
  /**
   * @example
   * 1
   */
  mediumRisk?: number;
  /**
   * @example
   * 1
   */
  noScanBucket?: number;
  /**
   * @example
   * 1
   */
  remainAuth?: number;
  /**
   * @example
   * 1
   */
  riskBucket?: number;
  /**
   * @example
   * 10
   */
  scanObject?: number;
  /**
   * @example
   * 10
   */
  totalBucket?: number;
  /**
   * @example
   * 111
   */
  totalObject?: number;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      highRisk: 'HighRisk',
      lowRisk: 'LowRisk',
      mediumRisk: 'MediumRisk',
      noScanBucket: 'NoScanBucket',
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
  data?: GetOssBucketScanStatisticResponseBodyData;
  /**
   * @example
   * E14CECBF-8CAC-520C-ACC3-9503D5******
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

