// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogEventRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * xxl-job-executor-perf-test-241
   */
  appName?: string;
  /**
   * @remarks
   * The unique identifier for the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-684d02ee5a6
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the query\\"s time range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1721636220
   */
  endTime?: number;
  /**
   * @remarks
   * The severity level for filtering events.
   * 
   * @example
   * INFO
   */
  event?: string;
  /**
   * @remarks
   * The type of event to retrieve.
   * 
   * @example
   * JOB
   */
  eventType?: string;
  /**
   * @remarks
   * The unique identifier for the job execution.
   * 
   * @example
   * 101
   */
  jobExecutionId?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * test
   */
  jobName?: string;
  /**
   * @remarks
   * A keyword to search for in log events.
   * 
   * @example
   * test_partition_tbl
   */
  keyword?: string;
  /**
   * @remarks
   * The page number to retrieve.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the sort order of events.
   * 
   * - **true**: Sorts events in descending order.
   * 
   * - **false**: Sorts events in ascending order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start of the query\\"s time range, specified as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1721268302000
   */
  startTime?: number;
  /**
   * @remarks
   * The unique identifier for the workflow execution.
   * 
   * @example
   * 1450568762586578000
   */
  workflowExecutionId?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * 流程001
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      event: 'Event',
      eventType: 'EventType',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      startTime: 'StartTime',
      workflowExecutionId: 'WorkflowExecutionId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      event: 'string',
      eventType: 'string',
      jobExecutionId: 'number',
      jobName: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      startTime: 'number',
      workflowExecutionId: 'number',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

