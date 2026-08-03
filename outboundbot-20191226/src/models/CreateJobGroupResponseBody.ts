// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @remarks
   * The file URL. [Deprecated]
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/sample
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * The progress. [Deprecated]
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The task export status. [Deprecated]
   * 
   * @example
   * FINISHED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
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

export class CreateJobGroupResponseBodyJobGroupRecallStrategy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether nonexistent numbers are excluded from redialing.
   * 
   * @example
   * true
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Indicates whether numbers with overdue payments are excluded from redialing.
   * 
   * @example
   * true
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Indicates whether out-of-service numbers are excluded from redialing.
   * 
   * @example
   * true
   */
  outOfServiceIgnore?: boolean;
  static names(): { [key: string]: string } {
    return {
      emptyNumberIgnore: 'EmptyNumberIgnore',
      inArrearsIgnore: 'InArrearsIgnore',
      outOfServiceIgnore: 'OutOfServiceIgnore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberIgnore: 'boolean',
      inArrearsIgnore: 'boolean',
      outOfServiceIgnore: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupStrategyWorkingTime extends $dara.Model {
  /**
   * @remarks
   * The window start time.
   * 
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The window end time.
   * 
   * @example
   * 12:00:00
   */
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupStrategy extends $dara.Model {
  /**
   * @remarks
   * The custom data of the strategy.
   * 
   * @example
   * {}
   */
  customized?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * The follow-up action after the execution cycle ends. This field is no longer in use.
   * 
   * @example
   * CONTINUE
   */
  followUpStrategy?: string;
  /**
   * @remarks
   * Indicates whether this is a template.
   * 
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The maximum number of daily call attempts when calls in the task are not connected.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The interval between call attempts.
   * 
   * @example
   * 3
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The repeat execution mode. Valid values: once (no repeat), day (repeat daily), week (repeat weekly), and month (repeat monthly).
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The repeat execution days.
   * - If **RepeatBy** is set to **Week**, 0 indicates Sunday and 1-6 indicate Monday through Saturday.
   * - If **RepeatBy** is set to **Month**, 1-31 indicate the 1st through 31st day. The task is not executed in months that do not have the specified day. For example, if the 30th is selected, the task is not executed in February.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * The number strategy. Valid values:
   * - None: no special rules.
   * - LocalFirst: local city numbers preferred.
   * - LocalProvinceFirst: local province numbers preferred.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1578550074000
   */
  startTime?: number;
  /**
   * @remarks
   * The strategy description.
   * 
   * @example
   * 催收策略
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The strategy ID.
   * 
   * @example
   * cc9a436e-03b0-4ada-8364-77ec2290aa39
   */
  strategyId?: string;
  /**
   * @remarks
   * The strategy name.
   * 
   * @example
   * 催收策略
   */
  strategyName?: string;
  /**
   * @remarks
   * The strategy type.
   * 
   * @example
   * Repeatable
   */
  type?: string;
  /**
   * @remarks
   * The strategy execution time window.
   */
  workingTime?: CreateJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  validate() {
    if(Array.isArray(this.repeatDays)) {
      $dara.Model.validateArray(this.repeatDays);
    }
    if(Array.isArray(this.workingTime)) {
      $dara.Model.validateArray(this.workingTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroup extends $dara.Model {
  /**
   * @remarks
   * The list of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * The export progress.
   * > This field is deprecated.
   */
  exportProgress?: CreateJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * The ID of the background asynchronous parsing operation for the uploaded task file.
   * > No value is returned if this field is empty.
   * 
   * @example
   * 744ff448-2b4c-40d4-94ca-51f246905b0f
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The OSS path of the task file.
   * > No value is returned if this field is empty.
   * 
   * @example
   * UPLOADED/JOB/b3865dc3-40fa-4afd-9fe4-dc7cda305a24/229eac13-379d-4abe-96e0-8cf026b56c0b_template (1).xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * 第一个的作业组
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 第一个作业组
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The guaranteed concurrency value. When the task starts, a minimum of N concurrent calls are guaranteed. The sum of guaranteed concurrency values for tasks with the same priority cannot exceed the instance concurrency. If the guaranteed concurrency value is set to 0, the system intelligently allocates idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1628425608429
   */
  modifyTime?: string;
  /**
   * @remarks
   * The job group priority. Valid values:
   * - **Urgent**: urgent task.
   * - **Daily**: daily task.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The list of redial calling numbers.
   */
  recallCallingNumbers?: string[];
  /**
   * @remarks
   * The redial strategy.
   */
  recallStrategy?: CreateJobGroupResponseBodyJobGroupRecallStrategy;
  /**
   * @remarks
   * The ringing duration.
   * 
   * @example
   * 30
   */
  ringingDuration?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
  /**
   * @remarks
   * The dialog flow scenario name.
   * 
   * @example
   * 话术
   */
  scriptName?: string;
  /**
   * @remarks
   * The dialog flow scenario version.
   * 
   * @example
   * 1628425608429
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * The task scheduling strategy.
   */
  strategy?: CreateJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      priority: 'Priority',
      recallCallingNumbers: 'RecallCallingNumbers',
      recallStrategy: 'RecallStrategy',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      exportProgress: CreateJobGroupResponseBodyJobGroupExportProgress,
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      recallCallingNumbers: { 'type': 'array', 'itemType': 'string' },
      recallStrategy: CreateJobGroupResponseBodyJobGroupRecallStrategy,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: CreateJobGroupResponseBodyJobGroupStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.callingNumbers)) {
      $dara.Model.validateArray(this.callingNumbers);
    }
    if(this.exportProgress && typeof (this.exportProgress as any).validate === 'function') {
      (this.exportProgress as any).validate();
    }
    if(Array.isArray(this.recallCallingNumbers)) {
      $dara.Model.validateArray(this.recallCallingNumbers);
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The task information.
   */
  jobGroup?: CreateJobGroupResponseBodyJobGroup;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: CreateJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobGroup && typeof (this.jobGroup as any).validate === 'function') {
      (this.jobGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

