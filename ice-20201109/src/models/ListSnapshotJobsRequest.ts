// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for filtering jobs by creation time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-14T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The mark for the next page during continuous paging in a paged query.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 1. CreateTimeAsc
   * 2. CreateTimeDesc
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for filtering jobs by creation time. The time is in ISO 8601 format and uses UTC (ending with Z).
   * 
   * @example
   * 2022-07-12T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The job status.
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

