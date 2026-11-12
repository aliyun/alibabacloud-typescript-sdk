// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogEventRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * xxl-job-executor-perf-test-241
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-684d02ee5a6
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1721636220
   */
  endTime?: number;
  /**
   * @remarks
   * The event.
   * 
   * @example
   * INFO
   */
  event?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * JOB
   */
  eventType?: string;
  /**
   * @remarks
   * The job execution ID.
   * 
   * @example
   * 101
   */
  jobExecutionId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test
   */
  jobName?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * test_partition_tbl
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order. Valid values:
   * - **true**: Sorts the results in descending order.
   * - **false**: Sorts the results in ascending order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start time. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1721268302000
   */
  startTime?: number;
  /**
   * @remarks
   * The workflow execution ID.
   * 
   * @example
   * 1450568762586578000
   */
  workflowExecutionId?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * Workflow001
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

