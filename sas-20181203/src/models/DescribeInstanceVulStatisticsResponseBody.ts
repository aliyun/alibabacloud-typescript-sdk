// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceVulStatisticsResponseBodyVulStat extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk vulnerabilities.
   * 
   * @example
   * 0
   */
  asapCount?: string;
  /**
   * @remarks
   * The number of medium-risk vulnerabilities.
   * 
   * @example
   * 0
   */
  laterCount?: string;
  /**
   * @remarks
   * The number of low-risk vulnerabilities.
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

export class DescribeInstanceVulStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1EE7B150-D67E-53FD-A52D-3E8E669A****
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of the vulnerabilities.
   */
  vulStat?: DescribeInstanceVulStatisticsResponseBodyVulStat;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulStat: 'VulStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulStat: DescribeInstanceVulStatisticsResponseBodyVulStat,
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

