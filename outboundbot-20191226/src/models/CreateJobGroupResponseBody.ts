// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @remarks
   * File URL. [Deprecated]
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/sample
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * Progress. [Deprecated]
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * Job export status. [Deprecated]
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
   * Do not make outbound calls to nonexistent numbers.
   * 
   * @example
   * true
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Do not make outbound calls to numbers with overdue payment.
   * 
   * @example
   * true
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Do not make outbound calls to numbers that are out of service.
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
   * End Time of the window.
   * 
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * Start Time of the window.
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
   * Custom policy data
   * 
   * @example
   * {}
   */
  customized?: string;
  /**
   * @remarks
   * End Time
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * Post-execution handling method after the epoch ends (this field is deprecated).
   * 
   * @example
   * CONTINUE
   */
  followUpStrategy?: string;
  /**
   * @remarks
   * Indicates whether it is a template.
   * 
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The maximum number of attempts per day when a call in the job fails to connect.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * Calling interval.
   * 
   * @example
   * 3
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * Repetition mode: "once" for no repetition, "day" for daily repetition, "week" for weekly repetition, and "month" for monthly repetition.
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * Days on which execution repeats.
   * - If the recurrence **RepeatBy** is set to **Week**, 0 represents Sunday, and 1–6 represent Monday through Saturday, respectively.
   * - If the recurrence **RepeatBy** is set to **Month**, values 1–31 represent the 1st through the 31st day of the month. Months that do not contain the specified date will not execute the task. For example, if the 30th is selected, the task will not run in February.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * Number routing policy.
   * - None: No special rule.
   * - LocalFirst: Local city numbers are prioritized.
   * - LocalProvinceFirst: Numbers from the same province are prioritized.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * Start Time.
   * 
   * @example
   * 1578550074000
   */
  startTime?: number;
  /**
   * @remarks
   * Policy Description
   * 
   * @example
   * 催收策略
   */
  strategyDescription?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * cc9a436e-03b0-4ada-8364-77ec2290aa39
   */
  strategyId?: string;
  /**
   * @remarks
   * Policy Name.
   * 
   * @example
   * 催收策略
   */
  strategyName?: string;
  /**
   * @remarks
   * Policy Type.
   * 
   * @example
   * Repeatable
   */
  type?: string;
  /**
   * @remarks
   * Time window for policy execution.
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
   * List of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * Export progress.  
   * > This field is deprecated in the current parameter.
   */
  exportProgress?: CreateJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * The ID of the asynchronous parsing operation in the backend corresponding to the uploaded job file.  
   * > If empty, it is not returned.
   * 
   * @example
   * 744ff448-2b4c-40d4-94ca-51f246905b0f
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * OSS path of the job file.  
   * > If empty, it is not returned.
   * 
   * @example
   * UPLOADED/JOB/b3865dc3-40fa-4afd-9fe4-dc7cda305a24/229eac13-379d-4abe-96e0-8cf026b56c0b_template (1).xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * Task description.
   * 
   * @example
   * 第一个的作业组
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Task Name.
   * 
   * @example
   * 第一个作业组
   */
  jobGroupName?: string;
  /**
   * @remarks
   * Concurrent guarantee value.  
   * When the job starts, it guarantees a minimum of N concurrent instances.  
   * The sum of concurrent guarantee values for jobs with the same priority must not exceed the instance concurrency limit.  
   * If the concurrent guarantee value is set to 0, the system intelligently assigns available idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * Updated At.
   * 
   * @example
   * 1628425608429
   */
  modifyTime?: string;
  /**
   * @remarks
   * Job group priority. Valid values:  
   * - **Urgent**: Urgent job.  
   * - **Daily**: Daily job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * List of recall calling numbers
   */
  recallCallingNumbers?: string[];
  /**
   * @remarks
   * Redial policy.
   */
  recallStrategy?: CreateJobGroupResponseBodyJobGroupRecallStrategy;
  /**
   * @remarks
   * Ringing duration.
   * 
   * @example
   * 30
   */
  ringingDuration?: number;
  /**
   * @remarks
   * Scenario ID.
   * 
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
  /**
   * @remarks
   * Scenario name.
   * 
   * @example
   * 话术
   */
  scriptName?: string;
  /**
   * @remarks
   * Script scenario version.
   * 
   * @example
   * 1628425608429
   */
  scriptVersion?: string;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * Job scheduling policy.
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
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP return code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Job information.
   */
  jobGroup?: CreateJobGroupResponseBodyJobGroup;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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

