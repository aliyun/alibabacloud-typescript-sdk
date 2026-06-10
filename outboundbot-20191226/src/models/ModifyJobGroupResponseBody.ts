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
   * The progress of the export.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The export status.
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
   * Indicates whether to ignore an invalid number.
   * 
   * @example
   * false
   */
  emptyNumberIgnore?: boolean;
  /**
   * @remarks
   * Indicates whether to ignore a number in arrears.
   * 
   * @example
   * false
   */
  inArrearsIgnore?: boolean;
  /**
   * @remarks
   * Indicates whether to ignore an out-of-service number.
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
   * The start time.
   * 
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time.
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
   * The customized strategy data. [Deprecated]
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
   * The action to take when the execution cycle ends. [Deprecated]
   * 
   * @example
   * CONTINUE
   */
  followUpStrategy?: string;
  /**
   * @remarks
   * Indicates whether the strategy is a template. [Deprecated]
   * 
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The maximum attempts per day.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The minimum attempt interval.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The repeat mode. Valid values: `Once` (runs only once), `Day` (repeats daily), `Week` (repeats weekly), and `Month` (repeats monthly).
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The days of the week or month on which the job repeats.
   * 
   * If `RepeatBy` is set to `Week`, valid values are `0` to `6`, where `0` represents Sunday, and `1` to `6` represent Monday to Saturday.
   * If `RepeatBy` is set to `Month`, valid values are `1` to `31`. If a month is shorter than the specified day (for example, day 31 in February), the job does not run that month.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * The routing strategy.
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
   * 催收作业执行策略
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
   * The time windows for making outbound calls.
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
   * The list of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * > Call the `DescribeJobGroup` operation to obtain this value.
   * 
   * @example
   * 1578550074361
   */
  creationTime?: number;
  /**
   * @remarks
   * The export progress. [Deprecated]
   */
  exportProgress?: ModifyJobGroupResponseBodyJobGroupExportProgress;
  /**
   * @remarks
   * Extra parameters for the flash SMS service. The value is a JSON string that contains the configuration for a third-party provider.
   * 
   * `templateId`: The flash SMS template ID. `configId`: The flash SMS configuration ID.
   * 
   * @example
   * {"configId":"3157b3c8-3a3e-4ea9-894b-9c8a6", "templateId":"1234"}
   */
  flashSmsExtras?: string;
  /**
   * @remarks
   * The data parsing task ID. [Deprecated]
   * 
   * @example
   * e37d28cb-0413-4816-85ed-fd354d025ea3
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The job file path. [Deprecated]
   * 
   * @example
   * UPLOADED/JOB/d481cebe-0bb6-4d13-9649-42ce5074fb75/6c7d9132-98e1-4f08-8a76-8a266c7532fd_job_template - 副本.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The job group description.
   * 
   * @example
   * 催收的作业组
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job group name.
   * 
   * @example
   * 第一个催收
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The minimum number of concurrent calls to reserve for this job group. The sum of this value for all job groups with the same priority cannot exceed the total concurrency of the instance. If set to 0, the system dynamically allocates idle lines from a shared pool.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * > Call the `DescribeJobGroup` operation to obtain this value.
   * 
   * @example
   * 1628425608429
   */
  modifyTime?: string;
  /**
   * @remarks
   * The job group priority. Valid values:
   * 
   * `Urgent`: For high-priority jobs. `Daily`: For standard-priority jobs.
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
   * > This parameter is deprecated. To obtain the `ScriptId`, call the `DescribeJobGroup` operation.
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
   * 话术
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
   * The job group status.
   * 
   * @example
   * Scheduling
   */
  status?: string;
  /**
   * @remarks
   * The outbound strategy.
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
   * The job group details.
   */
  jobGroup?: ModifyJobGroupResponseBodyJobGroup;
  /**
   * @remarks
   * The API response message.
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

