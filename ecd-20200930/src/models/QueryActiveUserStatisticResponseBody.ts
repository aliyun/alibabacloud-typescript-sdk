// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryActiveUserStatisticResponseBodyUserStatisticList extends $dara.Model {
  /**
   * @remarks
   * The number of deduplicated active users within the statistical period.
   * 
   * @example
   * 56
   */
  activeUserCount?: number;
  /**
   * @remarks
   * The formatted date string in UTC+8, in the format of yyyy-MM-dd.
   * 
   * @example
   * 2020-11-30
   */
  formatDate?: string;
  /**
   * @remarks
   * The epoch timestamp in milliseconds corresponding to the data point.
   * 
   * @example
   * 1606723951000
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

export class QueryActiveUserStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data points.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of active user statistics.
   */
  userStatisticList?: QueryActiveUserStatisticResponseBodyUserStatisticList[];
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
      userStatisticList: { 'type': 'array', 'itemType': QueryActiveUserStatisticResponseBodyUserStatisticList },
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

