// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the input parameters of the asynchronous task.
   * 
   * - true: If this parameter is set to true, the `invocationPayload` field is returned.
   * 
   * - false: If this parameter is set to false, the `invocationPayload` field is not returned.
   * 
   * > The `invocationPayload` field specifies the input parameters of the function for the asynchronous task.
   * 
   * @example
   * true
   */
  includePayload?: boolean;
  /**
   * @remarks
   * The number of asynchronous tasks to return. The default value is 20. The value must be in the range of [1, 100].
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token to return more results. You do not need to provide this parameter for the first query. Obtain the token for a subsequent query from the response to the previous query.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix of the asynchronous task ID. The system returns a list of asynchronous tasks that match the prefix.
   * 
   * @example
   * job-
   */
  prefix?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The sorting order of the returned asynchronous tasks.
   * 
   * - asc: ascending order
   * 
   * - desc: descending order
   * 
   * @example
   * asc
   */
  sortOrderByTime?: string;
  /**
   * @remarks
   * The start of the time range when the asynchronous task was started.
   * 
   * @example
   * 1640966400000
   */
  startedTimeBegin?: number;
  /**
   * @remarks
   * The end of the time range when the asynchronous task was started.
   * 
   * @example
   * 1640966400000
   */
  startedTimeEnd?: number;
  /**
   * @remarks
   * The execution status of the asynchronous task.
   * 
   * - Enqueued: The asynchronous message is enqueued and waits for processing.
   * 
   * - Dequeued: The asynchronous message is dequeued and waits to be triggered.
   * 
   * - Running: The invocation is in progress.
   * 
   * - Succeeded: The invocation succeeded.
   * 
   * - Failed: The invocation failed.
   * 
   * - Stopped: The invocation was stopped.
   * 
   * - Stopping: The invocation is being stopped.
   * 
   * - Expired: The task was discarded because its configured maximum queuing duration was exceeded. The task was not executed.
   * 
   * - Invalid: The execution is invalid because the function was deleted or for other reasons. The task was not executed.
   * 
   * - Retrying: The asynchronous invocation is being retried because of an execution error.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      includePayload: 'includePayload',
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      qualifier: 'qualifier',
      sortOrderByTime: 'sortOrderByTime',
      startedTimeBegin: 'startedTimeBegin',
      startedTimeEnd: 'startedTimeEnd',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includePayload: 'boolean',
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      qualifier: 'string',
      sortOrderByTime: 'string',
      startedTimeBegin: 'number',
      startedTimeEnd: 'number',
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

