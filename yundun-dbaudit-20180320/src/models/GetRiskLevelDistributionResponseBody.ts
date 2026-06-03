// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskLevelDistributionResponseBodyTimeList extends $dara.Model {
  /**
   * @example
   * 2019-06-06 01:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 200
   */
  highRiskCount?: number;
  /**
   * @example
   * 500
   */
  lowRiskCount?: number;
  /**
   * @example
   * 300
   */
  middleRiskCount?: number;
  /**
   * @example
   * 1000
   */
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      highRiskCount: 'HighRiskCount',
      lowRiskCount: 'LowRiskCount',
      middleRiskCount: 'MiddleRiskCount',
      riskCount: 'RiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      highRiskCount: 'number',
      lowRiskCount: 'number',
      middleRiskCount: 'number',
      riskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRiskLevelDistributionResponseBody extends $dara.Model {
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  timeList?: GetRiskLevelDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetRiskLevelDistributionResponseBodyTimeList },
    };
  }

  validate() {
    if(Array.isArray(this.timeList)) {
      $dara.Model.validateArray(this.timeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

