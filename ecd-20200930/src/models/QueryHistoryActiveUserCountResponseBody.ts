// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryActiveUserCountResponseBodyActiveUserCount extends $dara.Model {
  /**
   * @example
   * 20
   */
  dailyActiveUserCount?: number;
  /**
   * @example
   * 300
   */
  monthlyActiveUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      dailyActiveUserCount: 'DailyActiveUserCount',
      monthlyActiveUserCount: 'MonthlyActiveUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyActiveUserCount: 'number',
      monthlyActiveUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryActiveUserCountResponseBody extends $dara.Model {
  activeUserCount?: QueryHistoryActiveUserCountResponseBodyActiveUserCount;
  /**
   * @example
   * 1234567890abcdefg
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      activeUserCount: 'ActiveUserCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCount: QueryHistoryActiveUserCountResponseBodyActiveUserCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.activeUserCount && typeof (this.activeUserCount as any).validate === 'function') {
      (this.activeUserCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

