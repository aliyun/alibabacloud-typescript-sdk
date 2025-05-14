// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Finished: The job is complete.
   * *   Failed: The job failed.
   * *   Executing: The job is in progress.
   * *   Created: The job is created.
   * 
   * @example
   * Finished
   */
  jobState?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   ASR: automatic speech recognition(job) job.
   * *   DynamicChart: dynamic chart job.
   * *   VideoTranslation: video translation job.
   * *   TextToSpeech: intelligent audio production job.
   * 
   * @example
   * ASR
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  static names(): { [key: string]: string } {
    return {
      jobState: 'JobState',
      jobType: 'JobType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobState: 'string',
      jobType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

