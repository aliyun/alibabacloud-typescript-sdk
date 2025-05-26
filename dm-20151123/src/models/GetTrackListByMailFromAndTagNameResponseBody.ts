// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrackListByMailFromAndTagNameResponseBodyTrackList } from "./GetTrackListByMailFromAndTagNameResponseBodyTrackList";


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

