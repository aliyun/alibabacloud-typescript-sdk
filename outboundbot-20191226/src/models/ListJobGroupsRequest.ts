// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to asynchronously obtain the query results.
   * 
   * @example
   * true
   */
  asyncQuery?: boolean;
  /**
   * @remarks
   * The end time to filter job groups by creation time. Use a UNIX timestamp in milliseconds.
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
   * The filter condition. Filters by job status. You can specify multiple statuses separated by commas. The logical OR operator is used. Valid values:
   * - **Draft**: Draft.
   * - **Scheduling**: Scheduling.
   * - **Executing**: Executing.
   * - **Completed**: Completed.
   * - **Paused**: Paused.
   * - **Failed**: Failed.
   * - **Cancelled**: Cancelled.
   * - **Initializing**: Initializing.
   * 
   * @example
   * Draft
   */
  jobGroupStatusFilter?: string;
  /**
   * @remarks
   * Specifies whether to query tasks with a valid minimum concurrency guarantee.
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
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * Interview
   */
  searchText?: string;
  /**
   * @remarks
   * The start time to filter job groups by creation time. Use a UNIX timestamp in milliseconds.
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

