// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubResponseBodyResultDataListScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * Trigger epoch
   */
  daysOfWeek?: number[];
  /**
   * @remarks
   * Trigger hour
   * 
   * @example
   * 12
   */
  hour?: number;
  /**
   * @remarks
   * Trigger minute
   * 
   * @example
   * 23
   */
  minute?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.daysOfWeek)) {
      $dara.Model.validateArray(this.daysOfWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBodyResultDataList extends $dara.Model {
  /**
   * @remarks
   * Album ID
   * 
   * @example
   * 51999575
   */
  albumId?: string;
  /**
   * @remarks
   * Album thumbnail
   * 
   * @example
   * https://ailabs.alibabausercontent.com/images/8838/1600839452498.jpg
   */
  coverUrl?: string;
  /**
   * @remarks
   * Daily study quantity
   * 
   * @example
   * 2
   */
  dailyStudyCnt?: number;
  /**
   * @remarks
   * Device ID
   * 
   * @example
   * 5874DBCCA3038FAA1A70A8060F07F26D
   */
  deviceId?: string;
  /**
   * @remarks
   * Subscription record ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Playback mode
   * 
   * @example
   * sequence
   */
  playMode?: string;
  /**
   * @remarks
   * Schedule information
   */
  scheduleInfo?: ListSubResponseBodyResultDataListScheduleInfo;
  /**
   * @remarks
   * Album title
   * 
   * @example
   * 小科学家探索
   */
  title?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1152893538998276761
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      coverUrl: 'CoverUrl',
      dailyStudyCnt: 'DailyStudyCnt',
      deviceId: 'DeviceId',
      id: 'Id',
      playMode: 'PlayMode',
      scheduleInfo: 'ScheduleInfo',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      coverUrl: 'string',
      dailyStudyCnt: 'number',
      deviceId: 'string',
      id: 'number',
      playMode: 'string',
      scheduleInfo: ListSubResponseBodyResultDataListScheduleInfo,
      title: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.scheduleInfo && typeof (this.scheduleInfo as any).validate === 'function') {
      (this.scheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Subscription list
   */
  dataList?: ListSubResponseBodyResultDataList[];
  /**
   * @remarks
   * Is there a next page
   */
  hasNext?: boolean;
  /**
   * @remarks
   * Total number of data entries
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 1
   */
  totalPageCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      hasNext: 'HasNext',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListSubResponseBodyResultDataList },
      hasNext: 'boolean',
      totalCount: 'number',
      totalPageCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0D0C09C2-ADC1-198B-964D-24F4FAD967DB
   */
  requestId?: string;
  /**
   * @remarks
   * Result
   */
  result?: ListSubResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListSubResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

