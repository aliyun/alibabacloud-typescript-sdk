// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListByMailFromAndTagNameResponseBodyTrackListStat extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2025-01-11T10:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * Click count
   * 
   * @example
   * 0
   */
  rcptClickCount?: string;
  /**
   * @remarks
   * Click rate
   * 
   * @example
   * 0
   */
  rcptClickRate?: string;
  /**
   * @remarks
   * Number of opens
   * 
   * @example
   * 0
   */
  rcptOpenCount?: string;
  /**
   * @remarks
   * Open rate
   * 
   * @example
   * 0
   */
  rcptOpenRate?: string;
  /**
   * @remarks
   * Unique click count
   * 
   * @example
   * 0
   */
  rcptUniqueClickCount?: string;
  /**
   * @remarks
   * Unique click rate
   * 
   * @example
   * 0
   */
  rcptUniqueClickRate?: string;
  /**
   * @remarks
   * Unique open count
   * 
   * @example
   * 0
   */
  rcptUniqueOpenCount?: string;
  /**
   * @remarks
   * Unique open rate
   * 
   * @example
   * 0
   */
  rcptUniqueOpenRate?: string;
  /**
   * @remarks
   * Total number
   * 
   * @example
   * 0
   */
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
   * Used for pagination. Not set for the first query; for subsequent queries, set to the value of OffsetCreateTime from the previous response. (This field is deprecated)
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
   * Current page number
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
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
  totalPages?: string;
  /**
   * @remarks
   * Tracking data records
   */
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

