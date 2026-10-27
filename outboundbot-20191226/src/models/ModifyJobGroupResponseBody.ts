// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobGroupResponseBodyJobGroupExportProgress extends $dara.Model {
  /**
   * @remarks
   * The file URL.
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/sample
   */
  fileHttpUrl?: string;
  /**
   * @remarks
   * The progress.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The status.
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

export class ModifyJobGroupResponseBodyJobGroupRecallStrategy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore nonexistent numbers for outbound calls.
   * 
   * @example
   * false
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Specifies whether to ignore numbers with overdue payments for outbound calls.
   * 
   * @example
   * false
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Specifies whether to ignore out-of-service numbers for outbound calls.
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

export class ModifyJobGroupResponseBodyJobGroupStrategyWorkingTime extends $dara.Model {
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

export class ModifyJobGroupResponseBodyJobGroupStrategy extends $dara.Model {
  /**
   * @remarks
   * The custom strategy data. This is a legacy parameter and is no longer used.
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
   * The processing method after the execution cycle ends. This is a legacy parameter and is no longer used.
   * 
   * @example
   * CONTINUE
   */
  followUpStrategy?: string;
  /**
   * @remarks
   * Indicates whether it is a template. This is a legacy parameter and is no longer used.
   * 
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The maximum number of attempts.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The retry interval after a failure.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The recurrence type. Valid values: Once (no recurrence), Day (daily), Week (weekly), and Month (monthly).
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The execution days for recurrence.
   * 
   * If the recurrence type RepeatBy is Week, 0 indicates Sunday, and 1 to 6 indicate Monday to Saturday.
   * If the recurrence type RepeatBy is Month, 1 to 31 indicate the 1st to the 31st day of the month. If a month does not have the specified day, the job is not executed in that month. For example, if the 30th is selected, the job is not executed in February.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * The phone number routing strategy.
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
   * Collection job execution strategy
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The strategy ID.
   * 
   * @example
   * f718798d-96be-40e4-bef6-317b54855708
   */
  strategyId?: string;
  /**
   * @remarks
   * The policy name.
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
   * The time period during which outbound calls are allowed.
   */
  workingTime?: ModifyJobGroupResponseBodyJobGroupStrategyWorkingTime[];
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
      workingTime: { 'type': 'array', 'itemType': ModifyJobGroupResponseBodyJobGroupStrategyWorkingTime },
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

export class ModifyJobGroupResponseBodyJobGroup extends $dara.Model {
  /**
   * @remarks
   * The list of caller numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * > You can obtain this value from the response of the DescribeJobGroup operation. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * The export information. This is a legacy parameter and is no longer used.
   */
  exportProgress?: ModifyJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * The configuration parameters for flash message push in JSON format, including the configuration information of third-party flash messages.
   * 
   * templateId: the flash message template ID.
   * configId: the flash message configuration ID.
   * 
   * @example
   * {"configId":"3157b3c8-3a3e-4ea9-894b-9c8a6", "templateId":"1234"}
   */
  flashSmsExtras?: string;
  /**
   * @remarks
   * **[Deprecated]** The ID of the parsing task corresponding to the outbound job file.
   * 
   * @example
   * e37d28cb-0413-4816-85ed-fd354d025ea3
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * **[Deprecated]** The OSS storage path of the job file.
   * 
   * @example
   * UPLOADED/JOB/d481cebe-0bb6-4d13-9649-42ce5074fb75/6c7d9132-98e1-4f08-8a76-8a266c7532fd_job_template - Copy.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Collection job group
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
   * First collection
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The guaranteed concurrency.
   * When a job starts, a minimum of N concurrent calls are guaranteed.
   * The sum of guaranteed concurrency values for jobs of the same priority cannot exceed the instance concurrency.
   * If the guaranteed concurrency is set to 0, the system intelligently allocates idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The modification time.
   * > You can obtain this value from the response of the DescribeJobGroup operation. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1628425608429
   */
  modifyTime?: string;
  /**
   * @remarks
   * The job group priority. Valid values:
   * 
   * Urgent: urgent job.
   * Daily: daily job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The recall strategy.
   */
  recallStrategy?: ModifyJobGroupResponseBodyJobGroupRecallStrategy;
  /**
   * @remarks
   * The ringing duration.
   * 
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * > This parameter returns a legacy value. You can obtain the specific ScriptId from the response of the DescribeJobGroup operation.
   * 
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * Script
   */
  scriptName?: string;
  /**
   * @remarks
   * The script version.
   * 
   * @example
   * 1628425608429
   */
  scriptVersion?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * The outbound call strategy.
   */
  strategy?: ModifyJobGroupResponseBodyJobGroupStrategy;
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
      exportProgress: ModifyJobGroupResponseBodyJobGroupExportProgress,
      flashSmsExtras: 'string',
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      recallStrategy: ModifyJobGroupResponseBodyJobGroupRecallStrategy,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: ModifyJobGroupResponseBodyJobGroupStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.callingNumbers)) {
      $dara.Model.validateArray(this.callingNumbers);
    }
    if(this.exportProgress && typeof (this.exportProgress as any).validate === 'function') {
      (this.exportProgress as any).validate();
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

export class ModifyJobGroupResponseBody extends $dara.Model {
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
   * The job information.
   */
  jobGroup?: ModifyJobGroupResponseBodyJobGroup;
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
      jobGroup: ModifyJobGroupResponseBodyJobGroup,
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

