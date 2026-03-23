// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListResponseBodyDataStat extends $dara.Model {
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

export class GetTrackListResponseBodyData extends $dara.Model {
  stat?: GetTrackListResponseBodyDataStat[];
  static names(): { [key: string]: string } {
    return {
      stat: 'stat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stat: { 'type': 'array', 'itemType': GetTrackListResponseBodyDataStat },
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

export class GetTrackListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for pagination. Do not set this parameter for the first request. For subsequent requests, set this parameter to the OffsetCreateTime value from the previous response. (This field is deprecated.)
   * 
   * @example
   * （本字段已废弃）
   */
  offsetCreateTime?: string;
  /**
   * @remarks
   * (This field is deprecated.)
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching records.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  data?: GetTrackListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      totalPages: 'TotalPages',
      data: 'data',
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
      totalPages: 'number',
      data: GetTrackListResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

