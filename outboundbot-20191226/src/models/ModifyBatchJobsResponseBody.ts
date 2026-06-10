// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBatchJobsResponseBodyJobGroupStrategyWorkingTime extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1581937093000
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1581997093000
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

export class ModifyBatchJobsResponseBodyJobGroupStrategy extends $dara.Model {
  /**
   * @remarks
   * The custom data for the policy.
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
   * The follow-up action after an execution epoch ends.
   * 
   * @example
   * CONTINUE
   */
  followUpStrategy?: string;
  /**
   * @remarks
   * Indicates whether the policy is a template.
   * 
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @remarks
   * The maximum number of redials after a call fails.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The interval between redials.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The repeat mode.
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The days of the week on which to repeat the execution.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * The number routing policy.
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
   * The policy description.
   * 
   * @example
   * 催收作业执行策略
   */
  strategyDescription?: string;
  /**
   * @remarks
   * The policy ID.
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
   * 催收策略
   */
  strategyName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * Repeatable
   */
  type?: string;
  /**
   * @remarks
   * The time frames during which the policy is executed.
   */
  workingTime?: ModifyBatchJobsResponseBodyJobGroupStrategyWorkingTime[];
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
      workingTime: { 'type': 'array', 'itemType': ModifyBatchJobsResponseBodyJobGroupStrategyWorkingTime },
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

export class ModifyBatchJobsResponseBodyJobGroup extends $dara.Model {
  /**
   * @remarks
   * The list of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The time when the job group was created.
   * 
   * @example
   * 1579068424000
   */
  creationTime?: number;
  /**
   * @remarks
   * The key of the job file after it is uploaded.
   * 
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * The description of the job group.
   * 
   * @example
   * 第一个催收作业组
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 5a7e8b09-baf9-4cab-b540-c971f47a7146
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * 第一个催收作业组
   */
  jobGroupName?: string;
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
   * The execution policy.
   */
  strategy?: ModifyBatchJobsResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      scenarioId: 'string',
      strategy: ModifyBatchJobsResponseBodyJobGroupStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.callingNumbers)) {
      $dara.Model.validateArray(this.callingNumbers);
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

export class ModifyBatchJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the API call.
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
   * The information about the job group.
   */
  jobGroup?: ModifyBatchJobsResponseBodyJobGroup;
  /**
   * @remarks
   * The message returned for the API call.
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
   * Indicates whether the call was successful.
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
      jobGroup: ModifyBatchJobsResponseBodyJobGroup,
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

