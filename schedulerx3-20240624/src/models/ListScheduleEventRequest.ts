// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleEventRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end time of the retrieved events, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1728872796295
   */
  endTime?: number;
  /**
   * @remarks
   * The event ID. Valid values:
   * - Scheduled.
   * - Running.
   * - Succeed.
   * - Failed.
   * - Failing_Auto_Retry.
   * - Skip_Schedule.
   * - Execute_Log.
   * 
   * @example
   * Failed
   */
  event?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * JOB | WORKFLOW
   */
  eventType?: string;
  /**
   * @remarks
   * The job execution ID.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The query keyword.
   * 
   * @example
   * hello word
   */
  keyword?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start time of the retrieved events, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1581317873000
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
      jobExecutionId: 'string',
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

