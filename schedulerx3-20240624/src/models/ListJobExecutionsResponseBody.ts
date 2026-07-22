// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutionsResponseBodyDataRecords extends $dara.Model {
  appGroupId?: number;
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
   * The number of failed attempts.
   * 
   * @example
   * 1
   */
  attempt?: number;
  /**
   * @remarks
   * The data timestamp of the job.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  dataTime?: string;
  /**
   * @remarks
   * The total running duration.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * The end time of the job.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  endTime?: string;
  /**
   * @remarks
   * The executor ID.
   * 
   * @example
   * 1827811800526000
   */
  executor?: string;
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
   * The job ID.
   * 
   * @example
   * 74
   */
  jobId?: number;
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
   * The job type.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @remarks
   * The job parameters.
   * 
   * @example
   * name=zhangsan
   */
  parameters?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The routing strategy. Valid values:
   * - 1: round-robin.
   * - 2: random.
   * - 3: first.
   * - 4: last.
   * - 5: least frequently used.
   * - 6: least recently used.
   * - 7: consistent hashing.
   * - 8: shard broadcast.
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The scheduling time of the job.
   * 
   * @example
   * 2024-11-12 14:52:42
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The scheduling node.
   * 
   * @example
   * 28.0.168.46
   */
  serverIp?: string;
  /**
   * @remarks
   * The job execution status. Valid values:
   * - 0: UNKNOWN.
   * - 1: WAITING.
   * - 2: READY.
   * - 3: RUNNING.
   * - 4: SUCCESS.
   * - 5: FAILED.
   * - 6: PAUSED.
   * - 7: SUBMITTED.
   * - 8: REJECTED.
   * - 9: ACCEPTED.
   * - 10: PARTIAL_FAILED.
   * - 11: SKIPPED.
   * - 12: REMOVED.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The time type. Valid values:
   * - -1: none<br/>
   * - 1: cron<br/>
   * - 3: fix_rate<br/>
   * - 5: one_time<br/>
   * - 100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The tokens consumed by the AI job.
   * 
   * @example
   * 1000
   */
  totalTokens?: number;
  /**
   * @remarks
   * The job trigger type. Valid values:
   * - 0: unknown.
   * - 1: schedule.
   * - 2: rerun.
   * - 3: api.
   * - 4: user_retry.
   * - 5: system_retry.
   * - 6: manual.
   * 
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @remarks
   * The machine on which the job instance runs.
   * 
   * @example
   * http://192.168.1.9:9999/
   */
  workAddr?: string;
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 100
   */
  workflowExecutionId?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 10
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * myWorkflow
   */
  workflowName?: string;
  /**
   * @example
   * {"sessionId":"ac21f9f6-5a88-4f97-abd1-b51989166035"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      attempt: 'Attempt',
      dataTime: 'DataTime',
      duration: 'Duration',
      endTime: 'EndTime',
      executor: 'Executor',
      jobExecutionId: 'JobExecutionId',
      jobId: 'JobId',
      jobName: 'JobName',
      jobType: 'JobType',
      parameters: 'Parameters',
      result: 'Result',
      routeStrategy: 'RouteStrategy',
      scheduleTime: 'ScheduleTime',
      serverIp: 'ServerIp',
      status: 'Status',
      timeType: 'TimeType',
      totalTokens: 'TotalTokens',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
      workflowExecutionId: 'WorkflowExecutionId',
      workflowId: 'WorkflowId',
      workflowName: 'WorkflowName',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appName: 'string',
      attempt: 'number',
      dataTime: 'string',
      duration: 'number',
      endTime: 'string',
      executor: 'string',
      jobExecutionId: 'string',
      jobId: 'number',
      jobName: 'string',
      jobType: 'string',
      parameters: 'string',
      result: 'string',
      routeStrategy: 'number',
      scheduleTime: 'string',
      serverIp: 'string',
      status: 'number',
      timeType: 'number',
      totalTokens: 'number',
      triggerType: 'number',
      workAddr: 'string',
      workflowExecutionId: 'string',
      workflowId: 'number',
      workflowName: 'string',
      XAttrs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The list of job instances.
   */
  records?: ListJobExecutionsResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListJobExecutionsResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The query result.
   */
  data?: ListJobExecutionsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is required.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * 6BCE89B3-E882-511D-9A75-D452A56EC4B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListJobExecutionsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

