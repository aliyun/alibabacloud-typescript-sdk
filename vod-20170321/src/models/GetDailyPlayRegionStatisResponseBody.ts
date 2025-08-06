// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDailyPlayRegionStatisResponseBodyDailyPlayRegionStatisList extends $dara.Model {
  /**
   * @example
   * 2025-03-20
   */
  date?: string;
  /**
   * @example
   * https://outin-e70266d4ed*******0163e1403e7.oss-cn-shanghai.aliyuncs.com/dataexport/play/cn_hangzhou_20250320_video_traffic.csv?*******
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDailyPlayRegionStatisResponseBody extends $dara.Model {
  dailyPlayRegionStatisList?: GetDailyPlayRegionStatisResponseBodyDailyPlayRegionStatisList[];
  emptyDates?: string[];
  failDates?: string[];
  /**
   * @example
   * 67720502-CDDB-3F1C-8A91-12258*******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dailyPlayRegionStatisList: 'DailyPlayRegionStatisList',
      emptyDates: 'EmptyDates',
      failDates: 'FailDates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyPlayRegionStatisList: { 'type': 'array', 'itemType': GetDailyPlayRegionStatisResponseBodyDailyPlayRegionStatisList },
      emptyDates: { 'type': 'array', 'itemType': 'string' },
      failDates: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailyPlayRegionStatisList)) {
      $dara.Model.validateArray(this.dailyPlayRegionStatisList);
    }
    if(Array.isArray(this.emptyDates)) {
      $dara.Model.validateArray(this.emptyDates);
    }
    if(Array.isArray(this.failDates)) {
      $dara.Model.validateArray(this.failDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

