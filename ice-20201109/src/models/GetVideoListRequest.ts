// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 781111
   */
  cateId?: number;
  /**
   * @remarks
   * The end time of the creation time. The end time must be later than the start time. The time is in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order of the query results. Valid values:
   * 
   * - CreationTime:Desc: Sorts the results by creation time in descending order. This is the default value.
   * - CreationTime:Asc: Sorts the results by creation time in ascending order.
   * 
   * @example
   * CreationTime:Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the creation time. The time is in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The video status. Separate multiple statuses with commas (,).
   * 
   * @example
   * Uploading,Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

