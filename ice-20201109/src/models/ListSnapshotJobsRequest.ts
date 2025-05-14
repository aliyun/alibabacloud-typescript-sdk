// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which the jobs to be queried were created.
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The order that you use to sort the query results.
   * 
   * 1.  CreateTimeDesc
   * 2.  CreateTimeAsc
   * 
   * Valid values:
   * 
   * *   CreateTimeDesc: sorts the jobs by creation time in descending order
   * *   CreateTimeAsc: sorts the jobs by creation time in ascending order.
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
   * The beginning of the time range during which the jobs to be queried were created.
   * 
   * @example
   * 2022-07-12T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The state of the job.
   * 
   * Valid values:
   * 
   * *   Init: The job is submitted.
   * *   Success: The job is successful.
   * *   Fail: The job failed.
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

