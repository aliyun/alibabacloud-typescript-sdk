// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve the query results asynchronously.
   * 
   * @example
   * true
   */
  asyncQuery?: boolean;
  /**
   * @remarks
   * The end of the time range for the query, based on the creation time of the job group. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579965079000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * Filters results by job status. To specify multiple statuses, separate them with commas. The statuses are combined with a logical OR. Valid values:
   * 
   * - **Draft**: The job group is a draft.
   * 
   * - **Scheduling**: The job group is being scheduled.
   * 
   * - **Executing**: The job group is executing.
   * 
   * - **Completed**: The job group has completed.
   * 
   * - **Paused**: The job group is paused.
   * 
   * - **Failed**: The job group has failed.
   * 
   * - **Cancelled**: The job group is canceled.
   * 
   * - **Initializing**: The job group is initializing.
   * 
   * @example
   * Draft
   */
  jobGroupStatusFilter?: string;
  /**
   * @remarks
   * Specifies whether to return only job groups with minimum concurrency enabled.
   * 
   * @example
   * false
   */
  onlyMinConcurrencyEnabled?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search text.
   * 
   * @example
   * 面试
   */
  searchText?: string;
  /**
   * @remarks
   * The start of the time range for the query, based on the creation time of the job group. Specify the time as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578965079000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      asyncQuery: 'AsyncQuery',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobGroupStatusFilter: 'JobGroupStatusFilter',
      onlyMinConcurrencyEnabled: 'OnlyMinConcurrencyEnabled',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncQuery: 'boolean',
      endTime: 'number',
      instanceId: 'string',
      jobGroupStatusFilter: 'string',
      onlyMinConcurrencyEnabled: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchText: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

