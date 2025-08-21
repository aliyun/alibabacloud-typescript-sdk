// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubResponseBodyResultDataListScheduleInfo extends $dara.Model {
  daysOfWeek?: number[];
  /**
   * @example
   * 12
   */
  hour?: number;
  /**
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
   * @example
   * 51999575
   */
  albumId?: string;
  /**
   * @example
   * https://ailabs.alibabausercontent.com/images/8838/1600839452498.jpg
   */
  coverUrl?: string;
  /**
   * @example
   * 2
   */
  dailyStudyCnt?: number;
  /**
   * @example
   * 5874DBCCA3038FAA1A70A8060F07F26D
   */
  deviceId?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * sequence
   */
  playMode?: string;
  scheduleInfo?: ListSubResponseBodyResultDataListScheduleInfo;
  /**
   * @example
   * 小科学家探索
   */
  title?: string;
  /**
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
  dataList?: ListSubResponseBodyResultDataList[];
  hasNext?: boolean;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0D0C09C2-ADC1-198B-964D-24F4FAD967DB
   */
  requestId?: string;
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

