// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTasksResponseBodyTasksRunConfig extends $dara.Model {
  /**
   * @remarks
   * The extra parameters.
   * 
   * @example
   * {"batchSize":"1000"}
   */
  extraParams?: string;
  /**
   * @remarks
   * The maximum number of steps.
   * 
   * @example
   * 10
   */
  maxSteps?: number;
  /**
   * @remarks
   * The list of skill IDs.
   * 
   * @example
   * ["sk-abc"]
   */
  skills?: string[];
  /**
   * @remarks
   * The timeout period in seconds.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      maxSteps: 'MaxSteps',
      skills: 'Skills',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      maxSteps: 'number',
      skills: { 'type': 'array', 'itemType': 'string' },
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 0 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-01T00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-06-12T10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The list of bound instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The last execution time.
   * 
   * @example
   * 2026-06-12T00:00:00
   */
  lastExecutionAt?: string;
  /**
   * @remarks
   * The next execution time.
   * 
   * @example
   * 2026-06-13T00:00:00
   */
  nextExecutionAt?: string;
  /**
   * @remarks
   * The run configuration.
   */
  runConfig?: DescribeScheduledTasksResponseBodyTasksRunConfig;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * @example
   * sch-260705-agb*****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The task configuration ID.
   * 
   * @example
   * tsk-260615-*****
   */
  taskConfigId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * DailyDataSyncTask
   */
  taskName?: string;
  /**
   * @remarks
   * The total number of executions.
   * 
   * @example
   * 100
   */
  totalExecutions?: number;
  /**
   * @remarks
   * The total number of failures.
   * 
   * @example
   * 2
   */
  totalFailures?: number;
  /**
   * @remarks
   * The user prompt or task description.
   * 
   * @example
   * Execute daily data sync task
   */
  userPrompt?: string;
  /**
   * @remarks
   * The CAS version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceIds: 'InstanceIds',
      lastExecutionAt: 'LastExecutionAt',
      nextExecutionAt: 'NextExecutionAt',
      runConfig: 'RunConfig',
      scheduledId: 'ScheduledId',
      status: 'Status',
      taskConfigId: 'TaskConfigId',
      taskName: 'TaskName',
      totalExecutions: 'TotalExecutions',
      totalFailures: 'TotalFailures',
      userPrompt: 'UserPrompt',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lastExecutionAt: 'string',
      nextExecutionAt: 'string',
      runConfig: DescribeScheduledTasksResponseBodyTasksRunConfig,
      scheduledId: 'string',
      status: 'string',
      taskConfigId: 'string',
      taskName: 'string',
      totalExecutions: 'number',
      totalFailures: 'number',
      userPrompt: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.runConfig && typeof (this.runConfig as any).validate === 'function') {
      (this.runConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScheduledTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The maximum number of entries to return in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The pagination token that indicates the position from which to start reading. Leave this parameter empty to read from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A51B1DF-96FF-3BCC-B08C-783161D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of scheduled tasks.
   */
  tasks?: DescribeScheduledTasksResponseBodyTasks[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeScheduledTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

