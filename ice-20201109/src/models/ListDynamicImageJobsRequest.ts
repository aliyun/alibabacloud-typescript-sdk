// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicImageJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the creation time filter. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-14T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The mark for the next page during continuous paging in a paged query.
   * 
   * @example
   * cdb3e74639973036bc84
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order. Valid values: 
   * - CreateTimeAsc: Sorts by creation time in ascending order.
   * - CreateTimeDesc: Sorts by creation time in descending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the creation time filter. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
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

