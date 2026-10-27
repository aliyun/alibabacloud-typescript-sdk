// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime extends $dara.Model {
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

export class CreateBatchJobsResponseBodyBatchJobStrategy extends $dara.Model {
  /**
   * @remarks
   * The custom information of the strategy.
   * 
   * @example
   * {}
   */
  customized?: string;
  /**
   * @remarks
   * The end time of the scheduling strategy. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * The follow-up strategy for outbound calls that are not completed in the previous cycle.
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
   * The maximum number of retries per day after a call fails.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * The minimum interval between retries.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The repetition mode. Valid values:
   * - Once: The job is not repeated.
   * - Day: The job is repeated every day.
   * - Week: The job is repeated every week.
   * - Month: The job is repeated every month.
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * The list of days on which the job is repeated.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * The recording strategy for the calling number.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The time when the job group starts to be executed. The time is a UNIX timestamp in milliseconds.
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
   * Job execution strategy
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
   * Strategy
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
   * The time periods during which the job is executed in a day.
   */
  workingTime?: CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime[];
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
      workingTime: { 'type': 'array', 'itemType': CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime },
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

export class CreateBatchJobsResponseBodyBatchJob extends $dara.Model {
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 5a7e8b09-baf9-4cab-b540-c971f47a7146
   */
  batchJobId?: string;
  /**
   * @remarks
   * The list of calling numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * The time when the job group was created. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579068424000
   */
  creationTime?: number;
  /**
   * @remarks
   * The key of the uploaded Excel file.
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
   * First batch job
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The name of the job group.
   * 
   * @example
   * Batch job 01
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The scenario ID of the job group.
   * 
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
  /**
   * @remarks
   * The job execution strategy.
   */
  strategy?: CreateBatchJobsResponseBodyBatchJobStrategy;
  static names(): { [key: string]: string } {
    return {
      batchJobId: 'BatchJobId',
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupName: 'JobGroupName',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJobId: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupName: 'string',
      scenarioId: 'string',
      strategy: CreateBatchJobsResponseBodyBatchJobStrategy,
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

export class CreateBatchJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job group information.
   */
  batchJob?: CreateBatchJobsResponseBodyBatchJob;
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
      batchJob: 'BatchJob',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJob: CreateBatchJobsResponseBodyBatchJob,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.batchJob && typeof (this.batchJob as any).validate === 'function') {
      (this.batchJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

