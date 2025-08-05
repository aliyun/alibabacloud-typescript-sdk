// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetStatisticResponseBodyResourceSpecStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of public IP addresses that can be protected.
   * 
   * @example
   * 20
   */
  ipNumSpec?: number;
  /**
   * @remarks
   * The number of public IP addresses that are protected.
   * 
   * @example
   * 10
   */
  ipNumUsed?: number;
  /**
   * @remarks
   * The number of public IP addresses that can enable data leakage detection.
   * 
   * @example
   * 0
   */
  sensitiveDataIpNumSpec?: number;
  /**
   * @remarks
   * The number of public IP addresses that enabled data leakage detection.
   * 
   * @example
   * 0
   */
  sensitiveDataIpNumUsed?: number;
  static names(): { [key: string]: string } {
    return {
      ipNumSpec: 'IpNumSpec',
      ipNumUsed: 'IpNumUsed',
      sensitiveDataIpNumSpec: 'SensitiveDataIpNumSpec',
      sensitiveDataIpNumUsed: 'SensitiveDataIpNumUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipNumSpec: 'number',
      ipNumUsed: 'number',
      sensitiveDataIpNumSpec: 'number',
      sensitiveDataIpNumUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84******25g4d2
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics on specifications.
   */
  resourceSpecStatistic?: DescribeAssetStatisticResponseBodyResourceSpecStatistic;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSpecStatistic: 'ResourceSpecStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSpecStatistic: DescribeAssetStatisticResponseBodyResourceSpecStatistic,
    };
  }

  validate() {
    if(this.resourceSpecStatistic && typeof (this.resourceSpecStatistic as any).validate === 'function') {
      (this.resourceSpecStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

