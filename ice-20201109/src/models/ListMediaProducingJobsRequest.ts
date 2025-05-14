// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaProducingJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The maximum time range between EndTime and StartTime cannot exceed 30 days. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-02-02T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   LiveEditingJob: live editing job.
   * *   EditingJob: regular template-based editing job
   * *   VETemplateJob: advanced template-based editing job.
   * 
   * @example
   * EditingJob
   */
  jobType?: string;
  /**
   * @remarks
   * The search keyword. For example, you can use a job ID as the keyword to search for jobs.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  keyword?: string;
  /**
   * @remarks
   * The ID of the quick video production job. If this parameter is specified, the subjobs of the quick video production job are queried.
   * 
   * @example
   * ******8750b54e3c976a47da6f******
   */
  masterJobId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Default value: 10. Valid values: 1 to 100.
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
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ******927cfb53d05b96c1bfe1******
   */
  projectId?: string;
  /**
   * @remarks
   * The sorting parameter. By default, the query results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   CreationTime:Asc: sorted by creation time in ascending order.
   * *   CreationTime:Desc: sorted by creation time in descending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Init: The job is initialized.
   * *   Failed: The job failed.
   * *   Success: The job is successful.
   * *   Processing: The job is in progress.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobType: 'JobType',
      keyword: 'Keyword',
      masterJobId: 'MasterJobId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobType: 'string',
      keyword: 'string',
      masterJobId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectId: 'string',
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

