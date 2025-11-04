// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayListRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. By default, the system queries data of the current day.
   * 
   * This parameter is required.
   * 
   * @example
   * 1676170500011
   */
  beginTs?: string;
  /**
   * @remarks
   * The end of the time range to query. The time range cannot exceed 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1682474405173
   */
  endTs?: string;
  /**
   * @remarks
   * The criteria by which the sorting is performed. Valid values:
   * 
   * - FirstFrameDuration
   * - PlayDuration
   * - VideoDuration
   * - StuckDuration
   * 
   * @example
   * FirstFrameDuration
   */
  orderName?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - DESC: descending order.
   * - ASC: ascending order.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The playback type. Valid value: 
   * 
   * - vod
   * 
   * @example
   * vod
   */
  playType?: string;
  /**
   * @remarks
   * The playback status. Valid values:
   * 
   * - complete
   * - playing
   * - unusual: A playback error occurs.
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * The TraceId of the player.
   * 
   * @example
   * 0bc5e70516766285805381012d271e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTs: 'BeginTs',
      endTs: 'EndTs',
      orderName: 'OrderName',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playType: 'PlayType',
      status: 'Status',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTs: 'string',
      endTs: 'string',
      orderName: 'string',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      playType: 'string',
      status: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

