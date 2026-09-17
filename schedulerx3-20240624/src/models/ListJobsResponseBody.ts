// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1625
   */
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
   * The error retry interval, in seconds.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The calendar.
   * 
   * @example
   * work-day
   */
  calendar?: string;
  /**
   * @remarks
   * The child task ID.
   * 
   * @example
   * 1246
   */
  childJobId?: string;
  /**
   * @remarks
   * The cleanup mode.
   * 
   * @example
   * {"cleanMode":"NUM_ONLY","totalRemain":300}
   */
  cleanMode?: string;
  /**
   * @remarks
   * The timestamp when the task was created.
   * 
   * @example
   * 1786354281000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @remarks
   * The current execution status. Valid values:
   * - 0: Not started.
   * - 1: Running.
   * - 2: Queued.
   * - 3: Waiting.
   * 
   * @example
   * 3
   */
  currentExecuteStatus?: number;
  /**
   * @remarks
   * The data offset.
   * 
   * @example
   * 3
   */
  dataOffset?: number;
  /**
   * @remarks
   * The dependency check policy.
   * 
   * @example
   * 1
   */
  dependentStrategy?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * job01 standalone task
   */
  description?: string;
  /**
   * @remarks
   * The client blocking strategy. Valid values:
   * - 1: Serial execution on a single machine.
   * - 2: Ignore subsequent scheduling.
   * - 3: Override previous scheduling.
   * 
   * @example
   * 1
   */
  executorBlockStrategy?: string;
  /**
   * @remarks
   * The `jobhandler` name.
   * 
   * @example
   * jobDemoHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @remarks
   * The task label information.
   * 
   * @example
   * {key:value}
   */
  label?: string;
  /**
   * @remarks
   * The end time of the last execution.
   * 
   * @example
   * 2025-06-29 15:56:36
   */
  lastExecuteEndTime?: string;
  /**
   * @remarks
   * The result of the last execution. Valid values:
   * - 4: Succeeded.
   * - 5: Failed.
   * 
   * @example
   * 4
   */
  lastExecuteStatus?: number;
  /**
   * @remarks
   * The maximum number of error retries. Set this parameter based on your business requirements.
   * 
   * @example
   * 5
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The overall concurrency threshold.
   * 
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * job01
   */
  name?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * 1
   */
  nodeType?: number;
  /**
   * @remarks
   * The `Notice` configuration.
   * 
   * @example
   * {"failLimitTimes":1,"failEnable":true,"timeoutKillEnable":false,"missWorkerEnable":true,"timeoutEnable":true,"sendChannel":"","timeout":300,"successNotice":false}
   */
  noticeConfig?: string;
  /**
   * @remarks
   * The notification contacts.
   * 
   * @example
   * [{"contactType":1,"name":"John"}]
   */
  noticeContacts?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * name=10
   */
  parameters?: string;
  /**
   * @remarks
   * The execution job priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The routing strategy. Valid values:
   * - 1: Round-robin.
   * - 2: Random.
   * - 3: First.
   * - 4: Last.
   * - 5: Least frequently used.
   * - 6: Least recently used.
   * - 7: Consistent hashing.
   * - 8: Shard broadcast.
   * 
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * #!/bin/bash
   * echo "xxl-job: hello shell"
   * echo "Good bye!"
   * exit 0
   */
  script?: string;
  /**
   * @remarks
   * The start time type.
   * 
   * @example
   * 1
   */
  startTimeType?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - 0: DISABLE (Disabled).
   * - 1: ENABLE (Enabled).
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time expression.
   * 
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. The following types are supported:
   * 
   * - -1: none.
   * - 1: cron.
   * - 3: fix_rate.
   * - 5: one_time.
   * - 100: api.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Hongkong
   */
  timeZone?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * HangKong
   */
  timezone?: string;
  /**
   * @remarks
   * The timestamp when the task was last updated.
   * 
   * @example
   * 1786354281000
   */
  updateTime?: number;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * 1963096506470832
   */
  updater?: string;
  /**
   * @remarks
   * The task weight.
   * 
   * @example
   * 1
   */
  weight?: number;
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
   * The extended attributes.
   * > Not supported.
   * 
   * @example
   * N/A
   */
  xattrs?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      childJobId: 'ChildJobId',
      cleanMode: 'CleanMode',
      createTime: 'CreateTime',
      creator: 'Creator',
      currentExecuteStatus: 'CurrentExecuteStatus',
      dataOffset: 'DataOffset',
      dependentStrategy: 'DependentStrategy',
      description: 'Description',
      executorBlockStrategy: 'ExecutorBlockStrategy',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      jobType: 'JobType',
      label: 'Label',
      lastExecuteEndTime: 'LastExecuteEndTime',
      lastExecuteStatus: 'LastExecuteStatus',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      nodeType: 'NodeType',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      script: 'Script',
      startTimeType: 'StartTimeType',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeZone: 'TimeZone',
      timezone: 'Timezone',
      updateTime: 'UpdateTime',
      updater: 'Updater',
      weight: 'Weight',
      workflowId: 'WorkflowId',
      xattrs: 'Xattrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      childJobId: 'string',
      cleanMode: 'string',
      createTime: 'number',
      creator: 'string',
      currentExecuteStatus: 'number',
      dataOffset: 'number',
      dependentStrategy: 'number',
      description: 'string',
      executorBlockStrategy: 'string',
      jobHandler: 'string',
      jobId: 'number',
      jobType: 'string',
      label: 'string',
      lastExecuteEndTime: 'string',
      lastExecuteStatus: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      nodeType: 'number',
      noticeConfig: 'string',
      noticeContacts: 'string',
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      script: 'string',
      startTimeType: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timeZone: 'string',
      timezone: 'string',
      updateTime: 'number',
      updater: 'string',
      weight: 'number',
      workflowId: 'number',
      xattrs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListJobsResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 65
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
      records: { 'type': 'array', 'itemType': ListJobsResponseBodyDataRecords },
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

export class ListJobsResponseBody extends $dara.Model {
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
   * -
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 1DF6732E-15D8-5E1F-95E3-C10077F556B5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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
      data: ListJobsResponseBodyData,
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

