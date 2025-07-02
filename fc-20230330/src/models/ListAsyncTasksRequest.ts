// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return input parameters of the asynchronous tasks. Valid values:
   * 
   * *   true: returns the `invocationPayload` parameter in the response.
   * *   false: does not return the `invocationPayload` parameter in the response.
   * 
   * >  The `invocationPayload` parameter indicates the input parameters of an asynchronous task.
   * 
   * @example
   * true
   */
  includePayload?: boolean;
  /**
   * @remarks
   * The number of asynchronous tasks to return. The default value is 20. Valid values: [1,100].
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID prefix of asynchronous tasks. If this parameter is specified, a list of asynchronous tasks whose IDs match the prefix is returned.
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
   * The order in which the returned asynchronous tasks are sorted.
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * @example
   * asc
   */
  sortOrderByTime?: string;
  /**
   * @remarks
   * The start time of the period during which the asynchronous tasks are initiated.
   * 
   * @example
   * 1640966400000
   */
  startedTimeBegin?: number;
  /**
   * @remarks
   * The end time of the period during which the asynchronous tasks are initiated.
   * 
   * @example
   * 1640966400000
   */
  startedTimeEnd?: number;
  /**
   * @remarks
   * The state of asynchronous tasks. The following items list the states of an asynchronous task:
   * 
   * *   Enqueued: The asynchronous invocation is enqueued and waiting to be executed.
   * *   Dequeued: The asynchronous invocation is dequeued and waiting to be triggered.
   * *   Running: The invocation is being executed.
   * *   Succeeded: The invocation is successful.
   * *   Failed: The invocation fails.
   * *   Stopped: The invocation is terminated.
   * *   Stopping: The invocation is being terminated.
   * *   Expired: The maximum validity period of messages is specified for asynchronous invocation. The invocation is discarded and not executed because the specified maximum validity period of messages expires.
   * *   Invalid: The invocation is invalid and not executed due to specific reasons. For example, the function is deleted.
   * *   Retrying: The asynchronous invocation is being retried due to an execution error.
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

