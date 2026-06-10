// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @remarks
   * File URL. This field is deprecated.
   * 
   * @example
   * https://oss-cn-shanghai.aliyuncs.com/xx.zip
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * Export progress. This field is deprecated.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * Export status. This field is deprecated.
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

export class DescribeJobGroupResponseBodyJobGroupFlashSmsExtras extends $dara.Model {
  /**
   * @remarks
   * Flash SMS configuration ID.
   * 
   * @example
   * bebe23e6e2604f50bbeb12900c07703d
   */
  configId?: string;
  /**
   * @remarks
   * Flash SMS template ID.
   * 
   * @example
   * e080d737-5c0b-4350-b7d4-1162530579e7
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgressBriefs extends $dara.Model {
  /**
   * @remarks
   * Business result name.
   * 
   * @example
   * score
   */
  key?: string;
  /**
   * @remarks
   * Business result value.
   * 
   * @example
   * 5
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgressCategories extends $dara.Model {
  /**
   * @remarks
   * Custom statistics field name.
   * 
   * @example
   * success
   */
  key?: string;
  /**
   * @remarks
   * Custom statistics value.
   * 
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgress extends $dara.Model {
  /**
   * @remarks
   * Business result information. This field is deprecated.
   */
  briefs?: DescribeJobGroupResponseBodyJobGroupProgressBriefs[];
  /**
   * @remarks
   * Number of cancelled jobs.
   * 
   * @example
   * 0
   */
  cancelled?: number;
  /**
   * @remarks
   * Statistics in key-value format. This field is deprecated.
   */
  categories?: DescribeJobGroupResponseBodyJobGroupProgressCategories[];
  /**
   * @remarks
   * Job execution time. This field is deprecated.
   * 
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @remarks
   * Number of jobs in execution.
   * 
   * @example
   * 2
   */
  executing?: number;
  /**
   * @remarks
   * Number of failed jobs.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * Number of paused jobs.
   * 
   * @example
   * 0
   */
  paused?: number;
  /**
   * @remarks
   * Number of jobs being scheduled.
   * 
   * @example
   * 5
   */
  scheduling?: number;
  /**
   * @remarks
   * Start time of execution. This field is deprecated.
   * 
   * @example
   * 1578881227404
   */
  startTime?: number;
  /**
   * @remarks
   * Overall job execution status. This field is deprecated.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * Total number of completed jobs.
   * 
   * @example
   * 2
   */
  totalCompleted?: number;
  /**
   * @remarks
   * Total number of jobs.
   * 
   * @example
   * 10
   */
  totalJobs?: number;
  /**
   * @remarks
   * This field is deprecated.
   * 
   * @example
   * 1
   */
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      briefs: 'Briefs',
      cancelled: 'Cancelled',
      categories: 'Categories',
      duration: 'Duration',
      executing: 'Executing',
      failed: 'Failed',
      paused: 'Paused',
      scheduling: 'Scheduling',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefs: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupProgressBriefs },
      cancelled: 'number',
      categories: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupProgressCategories },
      duration: 'number',
      executing: 'number',
      failed: 'number',
      paused: 'number',
      scheduling: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.briefs)) {
      $dara.Model.validateArray(this.briefs);
    }
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupRecallStrategy extends $dara.Model {
  /**
   * @remarks
   * Do not dial nonexistent numbers.
   * 
   * @example
   * false
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Do not dial numbers with overdue payments.
   * 
   * @example
   * false
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Do not dial out-of-service numbers.
   * 
   * @example
   * false
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

export class DescribeJobGroupResponseBodyJobGroupResult extends $dara.Model {
  /**
   * @remarks
   * Number of calls hung up by the customer. This field is deprecated.
   * 
   * @example
   * 1
   */
  clientHangupNum?: number;
  /**
   * @remarks
   * Number of completed jobs. This field is deprecated.
   * 
   * @example
   * 1
   */
  finishedNum?: number;
  /**
   * @remarks
   * Number of calls with no interaction. This field is deprecated.
   * 
   * @example
   * 1
   */
  noInteractNum?: number;
  /**
   * @remarks
   * Number of calls hung up due to timeout. This field is deprecated.
   * 
   * @example
   * 1
   */
  timeoutHangupNum?: number;
  /**
   * @remarks
   * Number of unrecognized responses. This field is deprecated.
   * 
   * @example
   * 1
   */
  unrecognizedNum?: number;
  static names(): { [key: string]: string } {
    return {
      clientHangupNum: 'ClientHangupNum',
      finishedNum: 'FinishedNum',
      noInteractNum: 'NoInteractNum',
      timeoutHangupNum: 'TimeoutHangupNum',
      unrecognizedNum: 'UnrecognizedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHangupNum: 'number',
      finishedNum: 'number',
      noInteractNum: 'number',
      timeoutHangupNum: 'number',
      unrecognizedNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime extends $dara.Model {
  /**
   * @remarks
   * End time
   * 
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * End time.
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

export class DescribeJobGroupResponseBodyJobGroupStrategy extends $dara.Model {
  /**
   * @remarks
   * Custom data for the strategy. This is a legacy parameter and is no longer used.
   * 
   * @example
   * {}
   */
  customized?: string;
  /**
   * @remarks
   * End time of the scheduling strategy.
   * 
   * @example
   * 1579881227404
   */
  endTime?: number;
  /**
   * @remarks
   * Action to take after the execution period ends. This is a legacy parameter and is no longer used.
   * 
   * @example
   * NONE
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
   * Maximum number of calls per day when the call is not answered.
   * 
   * @example
   * 2
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * Minimum interval between retry attempts.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * Job repetition method.
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * Days on which the job repeats. Use with RepeatBy.
   * 
   * - If the recurrence is weekly, 0 means Sunday, and 1–6 mean Monday through Saturday.
   * 
   * - If the recurrence is monthly, 1–31 mean the 1st through 31st days of the month. Months without the specified day skip the job. For example, if you select the 30th, February skips it.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * Indicates whether this is a recurring job.
   * 
   * @example
   * false
   */
  repeatable?: boolean;
  /**
   * @remarks
   * Phone number routing policy.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * Start time of the strategy.
   * 
   * @example
   * 1578881227404
   */
  startTime?: number;
  /**
   * @remarks
   * Strategy description.
   * 
   * @example
   * 催收策略
   */
  strategyDescription?: string;
  /**
   * @remarks
   * Strategy ID.
   * 
   * @example
   * a2bff22c-2604-4df2-83d6-5952e2438c5a
   */
  strategyId?: string;
  /**
   * @remarks
   * Strategy name.
   * 
   * @example
   * 催收策略名字
   */
  strategyName?: string;
  /**
   * @remarks
   * Strategy type.
   * 
   * @example
   * Repeatable
   */
  type?: string;
  /**
   * @remarks
   * Working hours.
   */
  workingTime?: DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime[];
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
      repeatable: 'Repeatable',
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
      repeatable: 'boolean',
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime },
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

export class DescribeJobGroupResponseBodyJobGroup extends $dara.Model {
  /**
   * @remarks
   * Caller number list.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1578881227404
   */
  creationTime?: number;
  /**
   * @remarks
   * Export progress. This field is deprecated.
   * 
   * > Get this information from the ListJobGroups API instead.
   */
  exportProgress?: DescribeJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * Configuration parameters for flash SMS delivery. This is a JSON object that contains third-party flash SMS configuration details.
   */
  flashSmsExtras?: DescribeJobGroupResponseBodyJobGroupFlashSmsExtras;
  /**
   * @remarks
   * Job list parsing task ID. This parameter is deprecated.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * OSS file key for the uploaded job list. This parameter is deprecated.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * Job description.
   * 
   * @example
   * 催收作业组
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * Job group ID.
   * 
   * @example
   * 46a9ad0c-3e11-44da-a9a7-2c21bf5ce185
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job group name.
   * 
   * @example
   * 催收作业组
   */
  jobGroupName?: string;
  /**
   * @remarks
   * Minimum concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1578881227404
   */
  modifyTime?: string;
  /**
   * @remarks
   * Priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * Job progress.
   */
  progress?: DescribeJobGroupResponseBodyJobGroupProgress;
  /**
   * @remarks
   * Caller number list for redials. These numbers are used only when the first call fails. If not specified, the system uses the main caller number list.
   */
  recallCallingNumbers?: string[];
  /**
   * @remarks
   * Redial strategy.
   */
  recallStrategy?: DescribeJobGroupResponseBodyJobGroupRecallStrategy;
  /**
   * @remarks
   * Statistics. This is a legacy parameter and is no longer provided. This field is deprecated.
   */
  result?: DescribeJobGroupResponseBodyJobGroupResult;
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
   * Scenario ID. This is a legacy canvas parameter. For new canvases, this value is the same as ScriptId.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  scenarioId?: string;
  /**
   * @remarks
   * Script scenario ID.
   * 
   * @example
   * 49f00b0d-78ac-4d51-91de-a9e8e92b8470
   */
  scriptId?: string;
  /**
   * @remarks
   * Script scenario name.
   * 
   * @example
   * 催收话术
   */
  scriptName?: string;
  scriptNluEngine?: string;
  /**
   * @remarks
   * Script scenario version number.
   * 
   * @example
   * 49f00b0d-78ac-4d51-91de-a9e8e92b8470
   */
  scriptVersion?: string;
  /**
   * @remarks
   * Job status.
   * 
   * @example
   * Completed
   */
  status?: string;
  /**
   * @remarks
   * Job execution strategy.
   */
  strategy?: DescribeJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      flashSmsExtras: 'FlashSmsExtras',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      priority: 'Priority',
      progress: 'Progress',
      recallCallingNumbers: 'RecallCallingNumbers',
      recallStrategy: 'RecallStrategy',
      result: 'Result',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptNluEngine: 'ScriptNluEngine',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      exportProgress: DescribeJobGroupResponseBodyJobGroupExportProgress,
      flashSmsExtras: DescribeJobGroupResponseBodyJobGroupFlashSmsExtras,
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      progress: DescribeJobGroupResponseBodyJobGroupProgress,
      recallCallingNumbers: { 'type': 'array', 'itemType': 'string' },
      recallStrategy: DescribeJobGroupResponseBodyJobGroupRecallStrategy,
      result: DescribeJobGroupResponseBodyJobGroupResult,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptNluEngine: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: DescribeJobGroupResponseBodyJobGroupStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.callingNumbers)) {
      $dara.Model.validateArray(this.callingNumbers);
    }
    if(this.exportProgress && typeof (this.exportProgress as any).validate === 'function') {
      (this.exportProgress as any).validate();
    }
    if(this.flashSmsExtras && typeof (this.flashSmsExtras as any).validate === 'function') {
      (this.flashSmsExtras as any).validate();
    }
    if(this.progress && typeof (this.progress as any).validate === 'function') {
      (this.progress as any).validate();
    }
    if(Array.isArray(this.recallCallingNumbers)) {
      $dara.Model.validateArray(this.recallCallingNumbers);
    }
    if(this.recallStrategy && typeof (this.recallStrategy as any).validate === 'function') {
      (this.recallStrategy as any).validate();
    }
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
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

export class DescribeJobGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Job information.
   */
  jobGroup?: DescribeJobGroupResponseBodyJobGroup;
  /**
   * @remarks
   * API message.
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
   * Indicates whether the operation succeeded.
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
      jobGroup: DescribeJobGroupResponseBodyJobGroup,
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

