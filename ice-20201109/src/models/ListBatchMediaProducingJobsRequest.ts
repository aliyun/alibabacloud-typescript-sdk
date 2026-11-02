// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBatchMediaProducingJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time is displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-06-05T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the one-click video production job.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * - Script: script-based material editing
   * - Smart_Mix: intelligent material editing
   * 
   * @example
   * Script
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of entries to return for the current request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the position from which the current call starts to read data. An empty value indicates that all data has been read.
   * 
   * @example
   * mRZkKAovub0xWVfH14he4Q==
   */
  nextToken?: string;
  /**
   * @remarks
   * The sorting order of the query results. Valid values:
   * 
   * - desc: sorts the results in descending order of creation time. This is the default value.
   * - asc: sorts the results in ascending order of creation time.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time. The time is displayed in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-02-02T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * - Finished: The job is completed.
   * - Init: The job is initialized.
   * - Failed: The job failed.
   * - Processing: The job is being processed.
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

