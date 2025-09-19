// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulFixStatisticsResponseBodyFixStat extends $dara.Model {
  /**
   * @remarks
   * The number of vulnerabilities that are fixed on the current day.
   * 
   * @example
   * 10
   */
  fixedTodayNum?: number;
  /**
   * @remarks
   * The total number of fixed vulnerabilities.
   * 
   * @example
   * 22
   */
  fixedTotalNum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that are being fixed.
   * 
   * @example
   * 17
   */
  fixingNum?: number;
  /**
   * @remarks
   * The number of unfixed vulnerabilities.
   * 
   * @example
   * 8
   */
  needFixNum?: number;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **app**: application vulnerability
   * *   **emg**: urgent vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fixedTodayNum: 'FixedTodayNum',
      fixedTotalNum: 'FixedTotalNum',
      fixingNum: 'FixingNum',
      needFixNum: 'NeedFixNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedTodayNum: 'number',
      fixedTotalNum: 'number',
      fixingNum: 'number',
      needFixNum: 'number',
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

export class DescribeVulFixStatisticsResponseBodyFixTotal extends $dara.Model {
  /**
   * @remarks
   * The number of vulnerabilities that are fixed on the current day.
   * 
   * @example
   * 15
   */
  fixedTodayNum?: number;
  /**
   * @remarks
   * The total number of fixed vulnerabilities.
   * 
   * @example
   * 47
   */
  fixedTotalNum?: number;
  /**
   * @remarks
   * The number of vulnerabilities that are being fixed.
   * 
   * @example
   * 22
   */
  fixingNum?: number;
  /**
   * @remarks
   * The number of unfixed vulnerabilities.
   * 
   * @example
   * 62
   */
  needFixNum?: number;
  static names(): { [key: string]: string } {
    return {
      fixedTodayNum: 'FixedTodayNum',
      fixedTotalNum: 'FixedTotalNum',
      fixingNum: 'FixingNum',
      needFixNum: 'NeedFixNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedTodayNum: 'number',
      fixedTotalNum: 'number',
      fixingNum: 'number',
      needFixNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulFixStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the statistics of vulnerability fixes by vulnerability type.
   */
  fixStat?: DescribeVulFixStatisticsResponseBodyFixStat[];
  /**
   * @remarks
   * The total statistics of vulnerability fixes.
   */
  fixTotal?: DescribeVulFixStatisticsResponseBodyFixTotal;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fixStat: 'FixStat',
      fixTotal: 'FixTotal',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixStat: { 'type': 'array', 'itemType': DescribeVulFixStatisticsResponseBodyFixStat },
      fixTotal: DescribeVulFixStatisticsResponseBodyFixTotal,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fixStat)) {
      $dara.Model.validateArray(this.fixStat);
    }
    if(this.fixTotal && typeof (this.fixTotal as any).validate === 'function') {
      (this.fixTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

