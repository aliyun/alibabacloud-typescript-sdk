// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The file URL.
   * 
   * @example
   * https://oss-cn-shanghai.aliyuncs.com/xx.zip
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * **[Deprecated]** The export progress.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * **[Deprecated]** The export status.
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
   * The ID of the flash SMS configuration.
   * 
   * @example
   * bebe23e6e2604f50bbeb12900c07703d
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the flash SMS template.
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
   * The name of the business result.
   * 
   * @example
   * score
   */
  key?: string;
  /**
   * @remarks
   * The value of the business result.
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
   * The name of the custom statistics information field.
   * 
   * @example
   * success
   */
  key?: string;
  /**
   * @remarks
   * The custom statistics information value (IV).
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
   * **[Deprecated]** The business result information.
   */
  briefs?: DescribeJobGroupResponseBodyJobGroupProgressBriefs[];
  /**
   * @remarks
   * The number of canceled jobs.
   * 
   * @example
   * 0
   */
  cancelled?: number;
  /**
   * @remarks
   * **[Deprecated]** The statistics information in key-value format.
   */
  categories?: DescribeJobGroupResponseBodyJobGroupProgressCategories[];
  /**
   * @remarks
   * **[Deprecated]** The execution duration of the job.
   * 
   * @example
   * 1000
   */
  duration?: number;
  /**
   * @remarks
   * The number of executing jobs.
   * 
   * @example
   * 2
   */
  executing?: number;
  /**
   * @remarks
   * The number of failed jobs.
   * 
   * @example
   * 0
   */
  failed?: number;
  /**
   * @remarks
   * The number of paused jobs.
   * 
   * @example
   * 0
   */
  paused?: number;
  /**
   * @remarks
   * The number of jobs being scheduled.
   * 
   * @example
   * 5
   */
  scheduling?: number;
  /**
   * @remarks
   * **[Deprecated]** The start time of the execution. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578881227404
   */
  startTime?: number;
  /**
   * @remarks
   * **[Deprecated]** The overall execution status of the job.
   * 
   * @example
   * Executing
   */
  status?: string;
  /**
   * @remarks
   * The total number of completed jobs.
   * 
   * @example
   * 2
   */
  totalCompleted?: number;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 10
   */
  totalJobs?: number;
  /**
   * @remarks
   * **[Deprecated]** The total number of unanswered jobs.
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
   * Specifies whether to stop calling nonexistent numbers.
   * 
   * @example
   * false
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Specifies whether to stop calling numbers with overdue payments.
   * 
   * @example
   * false
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Specifies whether to stop calling out-of-service numbers.
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
   * **[Deprecated]** The number of hang-ups by the customer.
   * 
   * @example
   * 1
   */
  clientHangupNum?: number;
  /**
   * @remarks
   * **[Deprecated]** The number of completed jobs.
   * 
   * @example
   * 1
   */
  finishedNum?: number;
  /**
   * @remarks
   * **[Deprecated]** The number of jobs without interaction.
   * 
   * @example
   * 1
   */
  noInteractNum?: number;
  /**
   * @remarks
   * **[Deprecated]** The number of hang-ups due to timeout.
   * 
   * @example
   * 1
   */
  timeoutHangupNum?: number;
  /**
   * @remarks
   * **[Deprecated]** The number of unrecognized utterances.
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
   * The start time. The format is HH:mm:ss.
   * 
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time. The format is HH:mm:ss.
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
   * The custom data of the strategy. This is a legacy parameter and is no longer used.
   * 
   * @example
   * {}
   */
  customized?: string;
  /**
   * @remarks
   * The overall end time of the scheduling strategy. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579881227404
   */
  endTime?: number;
  /**
   * @remarks
   * The processing method after the execution cycle ends. This is a legacy parameter and is no longer used.
   * 
   * @example
   * NONE
   */
  followUpStrategy?: string;
  /**
   * @remarks
   * Indicates whether the strategy is a template.
   * 
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The maximum number of calls per day when the call is not answered.
   * 
   * @example
   * 2
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The interval for redialing.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The repetition method of the job.
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The days for repeated execution. This parameter is used in combination with RepeatBy.
   * - If the repetition cycle is weekly, 0 indicates Sunday, and 1 to 6 indicate Monday to Saturday.  
   * - If the repetition cycle is monthly, 1 to 31 indicate the 1st to the 31st day of the month. The job is not executed in months that do not have the specified day. For example, if the 30th day is selected, the job is not executed in February.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * Indicates whether the job is a recurring task.
   * 
   * @example
   * false
   */
  repeatable?: boolean;
  /**
   * @remarks
   * The number routing strategy.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The overall start time of the strategy. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578881227404
   */
  startTime?: number;
  /**
   * @remarks
   * The description of the strategy.
   * 
   * @example
   * Collection strategy
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The ID of the strategy.
   * 
   * @example
   * a2bff22c-2604-4df2-83d6-5952e2438c5a
   */
  strategyId?: string;
  /**
   * @remarks
   * The name of the strategy.
   * 
   * @example
   * Collection strategy name
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
   * The working hours.
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
   * The list of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578881227404
   */
  creationTime?: number;
  /**
   * @remarks
   * **[Deprecated]** The export progress.
   * 
   * > This information is obtained from the ListJobGroups operation.
   */
  exportProgress?: DescribeJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * The configuration parameters for flash SMS push in JSON format, including the configuration information of third-party flash SMS.
   */
  flashSmsExtras?: DescribeJobGroupResponseBodyJobGroupFlashSmsExtras;
  /**
   * @remarks
   * **[Deprecated]** The ID of the job list parsing operation.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * **[Deprecated]** The OSS file key of the uploaded job list.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The description of the job group.
   * 
   * @example
   * Collection job group
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The ID of the job group.
   * 
   * @example
   * 46a9ad0c-3e11-44da-a9a7-2c21bf5ce185
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * Collection job group
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The minimum concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578881227404
   */
  modifyTime?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The job progress.
   */
  progress?: DescribeJobGroupResponseBodyJobGroupProgress;
  /**
   * @remarks
   * The list of calling numbers used for recall calls when the initial call fails. If not specified, it defaults to the primary calling number list.
   */
  recallCallingNumbers?: string[];
  /**
   * @remarks
   * The redial strategy.
   */
  recallStrategy?: DescribeJobGroupResponseBodyJobGroupRecallStrategy;
  /**
   * @remarks
   * **[Deprecated]** The statistics information. This is a legacy parameter and is no longer provided.
   */
  result?: DescribeJobGroupResponseBodyJobGroupResult;
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
   * The scenario ID. This is a legacy canvas parameter. For the new canvas, the scenario ID is the same as the ScriptId.
   * 
   * @example
   * fce6c599-8ede-40e3-9f78-0928eda7b4e8
   */
  scenarioId?: string;
  /**
   * @remarks
   * The ID of the script scenario.
   * 
   * @example
   * 49f00b0d-78ac-4d51-91de-a9e8e92b8470
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script scenario.
   * 
   * @example
   * Collection script
   */
  scriptName?: string;
  /**
   * @remarks
   * The natural language understanding (NLU) engine used by the script.
   * 
   * @example
   * Prompts
   */
  scriptNluEngine?: string;
  /**
   * @remarks
   * The version number of the script scenario.
   * 
   * @example
   * 49f00b0d-78ac-4d51-91de-a9e8e92b8470
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Completed
   */
  status?: string;
  /**
   * @remarks
   * The execution strategy of the job.
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
   * The API status code.
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
   * The job group information.
   */
  jobGroup?: DescribeJobGroupResponseBodyJobGroup;
  /**
   * @remarks
   * The API message.
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
   * Indicates whether the request is successful.
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

