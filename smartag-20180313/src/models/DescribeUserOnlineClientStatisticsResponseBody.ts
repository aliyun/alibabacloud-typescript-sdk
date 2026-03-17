// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics extends $dara.Model {
  onlineCount?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBodyUserStatistics extends $dara.Model {
  statistics?: DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeUserOnlineClientStatisticsResponseBodyUserStatisticsStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserOnlineClientStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14846A6A-2192-4F6A-B272-B8BD68EBC89B
   */
  requestId?: string;
  userStatistics?: DescribeUserOnlineClientStatisticsResponseBodyUserStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userStatistics: DescribeUserOnlineClientStatisticsResponseBodyUserStatistics,
    };
  }

  validate() {
    if(this.userStatistics && typeof (this.userStatistics as any).validate === 'function') {
      (this.userStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

