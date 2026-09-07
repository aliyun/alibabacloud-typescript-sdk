// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHistoryActiveUserStatisticResponseBodyUserStatisticList extends $dara.Model {
  /**
   * @remarks
   * The number of deduplicated active users on the day.
   * 
   * @example
   * 150
   */
  activeUserCount?: number;
  /**
   * @remarks
   * The date in the standard yyyy-MM-dd format, in the UTC+8 time zone.
   * 
   * @example
   * 2024-12-01
   */
  formatDate?: string;
  /**
   * @remarks
   * The timestamp of the date, in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      activeUserCount: 'ActiveUserCount',
      formatDate: 'FormatDate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCount: 'number',
      formatDate: 'string',
      timeStamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHistoryActiveUserStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CC5E450-FC43-4F5B-B540-9964BD313427
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of daily active user statistics.
   */
  userStatisticList?: QueryHistoryActiveUserStatisticResponseBodyUserStatisticList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userStatisticList: 'UserStatisticList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      userStatisticList: { 'type': 'array', 'itemType': QueryHistoryActiveUserStatisticResponseBodyUserStatisticList },
    };
  }

  validate() {
    if(Array.isArray(this.userStatisticList)) {
      $dara.Model.validateArray(this.userStatisticList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

