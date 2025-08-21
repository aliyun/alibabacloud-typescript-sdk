// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubAlbumResponseBodyResultDataListScheduleInfo extends $dara.Model {
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
  scheduleId?: number;
  static names(): { [key: string]: string } {
    return {
      daysOfWeek: 'DaysOfWeek',
      hour: 'Hour',
      minute: 'Minute',
      scheduleId: 'ScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      daysOfWeek: { 'type': 'array', 'itemType': 'number' },
      hour: 'number',
      minute: 'number',
      scheduleId: 'number',
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

export class ListSubAlbumResponseBodyResultDataList extends $dara.Model {
  /**
   * @example
   * 4476001
   */
  albumId?: string;
  /**
   * @example
   * 80011
   */
  categoryId?: number;
  /**
   * @example
   * https://ailabs.alibabausercontent.com/images/17825/jknoamc2.jpg
   */
  coverUrl?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  isAdded?: boolean;
  scheduleInfo?: ListSubAlbumResponseBodyResultDataListScheduleInfo;
  /**
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @example
   * 睡前故事
   */
  title?: string;
  /**
   * @example
   * 23
   */
  totalEpisode?: number;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      categoryId: 'CategoryId',
      coverUrl: 'CoverUrl',
      id: 'Id',
      isAdded: 'IsAdded',
      scheduleInfo: 'ScheduleInfo',
      sequence: 'Sequence',
      title: 'Title',
      totalEpisode: 'TotalEpisode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      categoryId: 'number',
      coverUrl: 'string',
      id: 'number',
      isAdded: 'boolean',
      scheduleInfo: ListSubAlbumResponseBodyResultDataListScheduleInfo,
      sequence: 'number',
      title: 'string',
      totalEpisode: 'number',
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

export class ListSubAlbumResponseBodyResult extends $dara.Model {
  dataList?: ListSubAlbumResponseBodyResultDataList[];
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
      dataList: { 'type': 'array', 'itemType': ListSubAlbumResponseBodyResultDataList },
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

export class ListSubAlbumResponseBody extends $dara.Model {
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
   * CB13B8D7-37FB-1B3E-8EB9-65BB413267E1
   */
  requestId?: string;
  result?: ListSubAlbumResponseBodyResult;
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
      result: ListSubAlbumResponseBodyResult,
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

