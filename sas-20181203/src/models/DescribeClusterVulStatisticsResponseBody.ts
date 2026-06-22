// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterVulStatisticsResponseBodyVulStat extends $dara.Model {
  /**
   * @remarks
   * The number of high-severity vulnerabilities.
   * 
   * @example
   * 13
   */
  asapCount?: string;
  /**
   * @remarks
   * The number of medium-severity vulnerabilities.
   * 
   * @example
   * 21
   */
  laterCount?: string;
  /**
   * @remarks
   * The number of low-severity vulnerabilities.
   * 
   * @example
   * 0
   */
  nntfCount?: string;
  static names(): { [key: string]: string } {
    return {
      asapCount: 'AsapCount',
      laterCount: 'LaterCount',
      nntfCount: 'NntfCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapCount: 'string',
      laterCount: 'string',
      nntfCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterVulStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The vulnerability statistics.
   */
  vulStat?: DescribeClusterVulStatisticsResponseBodyVulStat;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulStat: 'VulStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulStat: DescribeClusterVulStatisticsResponseBodyVulStat,
    };
  }

  validate() {
    if(this.vulStat && typeof (this.vulStat as any).validate === 'function') {
      (this.vulStat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

