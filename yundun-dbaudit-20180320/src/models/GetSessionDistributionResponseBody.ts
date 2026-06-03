// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionDistributionResponseBodyTimeList extends $dara.Model {
  /**
   * @example
   * 100
   */
  activeSessionCount?: number;
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
   * 50
   */
  errorSessionCount?: number;
  /**
   * @example
   * 1000
   */
  loginSessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      errorSessionCount: 'ErrorSessionCount',
      loginSessionCount: 'LoginSessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      beginDate: 'string',
      endDate: 'string',
      errorSessionCount: 'number',
      loginSessionCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSessionDistributionResponseBody extends $dara.Model {
  /**
   * @example
   * 1B217656-2267-4FBF-B26C-CDD201BDC3B8
   */
  requestId?: string;
  timeList?: GetSessionDistributionResponseBodyTimeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeList: 'TimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeList: { 'type': 'array', 'itemType': GetSessionDistributionResponseBodyTimeList },
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

