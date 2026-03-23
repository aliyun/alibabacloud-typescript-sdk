// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListByMailFromAndTagNameResponseBodyTrackListStat extends $dara.Model {
  createTime?: string;
  rcptClickCount?: string;
  rcptClickRate?: string;
  rcptOpenCount?: string;
  rcptOpenRate?: string;
  rcptUniqueClickCount?: string;
  rcptUniqueClickRate?: string;
  rcptUniqueOpenCount?: string;
  rcptUniqueOpenRate?: string;
  totalNumber?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      rcptClickCount: 'RcptClickCount',
      rcptClickRate: 'RcptClickRate',
      rcptOpenCount: 'RcptOpenCount',
      rcptOpenRate: 'RcptOpenRate',
      rcptUniqueClickCount: 'RcptUniqueClickCount',
      rcptUniqueClickRate: 'RcptUniqueClickRate',
      rcptUniqueOpenCount: 'RcptUniqueOpenCount',
      rcptUniqueOpenRate: 'RcptUniqueOpenRate',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      rcptClickCount: 'string',
      rcptClickRate: 'string',
      rcptOpenCount: 'string',
      rcptOpenRate: 'string',
      rcptUniqueClickCount: 'string',
      rcptUniqueClickRate: 'string',
      rcptUniqueOpenCount: 'string',
      rcptUniqueOpenRate: 'string',
      totalNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponseBodyTrackList extends $dara.Model {
  stat?: GetTrackListByMailFromAndTagNameResponseBodyTrackListStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'Stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': GetTrackListByMailFromAndTagNameResponseBodyTrackListStat },
    };
  }

  validate() {
    if(Array.isArray(this.stat)) {
      $dara.Model.validateArray(this.stat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrackListByMailFromAndTagNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for paging. Do not set this parameter for the first query. For subsequent queries, set this parameter to the OffsetCreateTime value from the previous response. (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offsetCreateTime?: string;
  /**
   * @remarks
   * (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offsetCreateTimeDesc?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * (This field is deprecated)
   * 
   * @example
   * 4
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPages?: string;
  trackList?: GetTrackListByMailFromAndTagNameResponseBodyTrackList;
  static names(): { [key: string]: string } {
    return {
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      totalPages: 'TotalPages',
      trackList: 'TrackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      totalPages: 'string',
      trackList: GetTrackListByMailFromAndTagNameResponseBodyTrackList,
    };
  }

  validate() {
    if(this.trackList && typeof (this.trackList as any).validate === 'function') {
      (this.trackList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

