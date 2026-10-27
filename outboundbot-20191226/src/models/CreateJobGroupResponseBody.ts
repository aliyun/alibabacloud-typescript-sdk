// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The file URL.
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/sample
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * **[Deprecated]** The progress.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * **[Deprecated]** The job export status.
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
   * Indicates whether nonexistent numbers are skipped.
   * 
   * @example
   * true
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Indicates whether numbers with overdue payments are skipped.
   * 
   * @example
   * true
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Indicates whether suspended numbers are skipped.
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
   * The start time of the window. Format: HH:mm:ss.
   * 
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the window. Format: HH:mm:ss.
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
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * The follow-up processing method after the execution cycle ends. This field is no longer used.
   * 
   * @example
   * CONTINUE
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
   * The maximum number of call attempts per day when the call is not answered in the job.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The call interval.
   * 
   * @example
   * 3
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The repetition method. Valid values: once (no repetition), day (daily repetition), week (weekly repetition), and month (monthly repetition).
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The execution days for repetition.
   * - If the repetition cycle **RepeatBy** is **Week**, 0 represents Sunday, and 1 to 6 represent Monday to Saturday.
   * - If the repetition cycle **RepeatBy** is **Month**, 1 to 31 represent the 1st to the 31st day. Months without the specified date are not executed. For example, if the 30th is selected, the job is not executed in February.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * The number strategy. Valid values:
   * - None: no special rules.
   * - LocalFirst: local numbers first.
   * - LocalProvinceFirst: local province numbers first.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
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
   * Collection strategy
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
   * Collection strategy
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
   * The execution time window of the strategy.
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
   * The list of caller numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * The export progress.
   * >**[Deprecated]** This field is deprecated in the current parameter.
   */
  exportProgress?: CreateJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * The ID of the background asynchronous parsing operation corresponding to the uploaded job file. If no value exists, this parameter is not returned.
   * 
   * @example
   * 744ff448-2b4c-40d4-94ca-51f246905b0f
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The OSS path of the job file. If no value exists, this parameter is not returned.
   * 
   * @example
   * UPLOADED/JOB/b3865dc3-40fa-4afd-9fe4-dc7cda305a24/229eac13-379d-4abe-96e0-8cf026b56c0b_template (1).xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * First job group
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * First job group
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The guaranteed concurrency.
   * - When the job starts, a minimum of N concurrent calls are guaranteed.
   * - The sum of guaranteed concurrency for jobs of the same priority cannot exceed the instance concurrency.
   * - If the guaranteed concurrency is set to 0, the system intelligently allocates idle concurrency.
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
   * 1628425608429
   */
  modifyTime?: string;
  /**
   * @remarks
   * The priority of the job group. Valid values:
   * - **Urgent**: urgent job.
   * - **Daily**: daily job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The list of caller numbers for redialing.
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
   * The script scenario name.
   * 
   * @example
   * Script
   */
  scriptName?: string;
  /**
   * @remarks
   * The script scenario version.
   * 
   * @example
   * 1628425608429
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * The job scheduling strategy.
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
   * The job information.
   */
  jobGroup?: CreateJobGroupResponseBodyJobGroup;
  /**
   * @remarks
   * The message.
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

