// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaConvertJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to filter jobs by creation time. The time must be in the `yyyy-MM-ddTHH:mm:ssZ` ISO 8601 format.
   * 
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * Filters the results by job ID.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2****
   */
  jobId?: string;
  /**
   * @remarks
   * The token for the next page of results. Leave this empty for the first request. To retrieve the next page, pass the `NextPageToken` value from the previous response.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order for the results. Valid values: `CreateTimeDesc` (descending by creation time) and `CreateTimeAsc` (ascending by creation time).
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to filter jobs by creation time. The time must be in the `yyyy-MM-ddTHH:mm:ssZ` ISO 8601 format.
   * 
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * - `Inited`: The job has been submitted.
   * 
   * - `Running`: The job is running.
   * 
   * - `Complete`: The job is complete.
   * 
   * - `Error`: The job failed due to an error.
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

