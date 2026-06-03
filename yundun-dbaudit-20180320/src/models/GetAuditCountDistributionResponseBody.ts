// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuditCountDistributionResponseBodyTimeList extends $dara.Model {
  /**
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 2019-06-06 01:00:00
   */
  endDate?: string;
  /**
   * @example
   * 1000
   */
  riskCount?: number;
  /**
   * @example
   * 2000
   */
  sessionCount?: number;
  /**
   * @example
   * 100000
   */
  sqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      riskCount: 'RiskCount',
      sessionCount: 'SessionCount',
      sqlCount: 'SqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      riskCount: 'number',
      sessionCount: 'number',
      sqlCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuditCountDistributionResponseBody extends $dara.Model {
  /**
   * @example
   * 482EF142-BFA5-43FF-B4B0-84A4B0763639
   */
  requestId?: string;
  timeList?: GetAuditCountDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetAuditCountDistributionResponseBodyTimeList },
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

