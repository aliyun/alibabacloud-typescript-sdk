// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchMediaProducingJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the quick video production job.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   Script: script-based editing job that mixes media assets.
   * *   Smart_Mix: intelligent editing job that mixes media assets.
   * 
   * @example
   * Script
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * mRZkKAovub0xWVfH14he4Q==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting parameter. Valid values:
   * 
   * *   desc (default): sorted by creation time in descending order.
   * *   asc: sorted by creation time in ascending order.
   * 
   * <!---->
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-02-02T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished
   * *   Init
   * *   Failed
   * *   Processing
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobId: 'JobId',
      jobType: 'JobType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobId: 'string',
      jobType: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

