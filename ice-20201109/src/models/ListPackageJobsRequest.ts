// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackageJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which the jobs to be queried were created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 7b38a5d86f1e47838927b6e7ccb11cbe
   */
  jobId?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The order that you use to sort the query results. Valid values:
   * 
   * *   CreateTimeDesc: sorts the jobs by creation time in descending order.
   * *   CreateTimeAsc: sorts the jobs by creation time in ascending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range during which the jobs to be queried were created. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The state of the job.
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

