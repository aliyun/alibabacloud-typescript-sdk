// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The execution ID of the task.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateAfter?: string;
  /**
   * @remarks
   * Specifies to query task executions that stop running at or later than the specified time.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  endDateBefore?: string;
  /**
   * @remarks
   * The status of the execution. Valid values: Running, Started, Success, Failed, Waiting, Cancelled, Pending, and Skipped.
   * 
   * @example
   * exec-xxx
   */
  executionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 20 to 100. Default value: 50.
   * 
   * @example
   * false
   */
  includeChildTaskExecution?: boolean;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Sorts the task executions to query. Valid values:
   * 
   * *   **StartDate**: specifies that the task executions are sorted based on the time when they are created. This is the default value.
   * *   **EndDate**: specifies that the task executions are sorted based on the time when the time when they stop running.
   * *   **Status**: specifies that the task executions are sorted based on their statuses.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to show the child nodes in the loop task. Default value: False.
   * 
   * @example
   * task-exec-xxx
   */
  parentTaskExecutionId?: string;
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The order in which you want to sort the task executions to query. Valid values:
   * 
   * *   **Ascending**: ascending order.
   * *   **Descending**: descending order. This is the default value.
   * 
   * @example
   * StartDate
   */
  sortField?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * Specifies to query task executions that stop running at or before the specified time.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateAfter?: string;
  /**
   * @remarks
   * Specifies to query task executions that start to run at or later than the specified time.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  startDateBefore?: string;
  /**
   * @remarks
   * Specifies to query task executions that start to run at or before the specified time.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The execution ID of the parent node. In a loop task, set this parameter to the execution ID of the parent node.
   * 
   * @example
   * ACS::Sleep
   */
  taskAction?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * task-exec-xxx
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The action of the task.
   * 
   * @example
   * describeInstance
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executionId: 'ExecutionId',
      includeChildTaskExecution: 'IncludeChildTaskExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDateAfter: 'string',
      endDateBefore: 'string',
      executionId: 'string',
      includeChildTaskExecution: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      parentTaskExecutionId: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

