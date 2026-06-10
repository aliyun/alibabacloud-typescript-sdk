// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime extends $dara.Model {
  /**
   * @remarks
   * Start time.
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

export class CreateBatchJobsResponseBodyBatchJobStrategy extends $dara.Model {
  /**
   * @remarks
   * Custom information for the policy.
   * 
   * @example
   * {}
   */
  customized?: string;
  /**
   * @remarks
   * End time of the scheduling policy.
   * 
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @remarks
   * Action to take for outbound calls that were not completed in the previous cycle.
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
   * Maximum number of retries per day after a failed call.
   * 
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @remarks
   * Minimum interval between retries.
   * 
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * How often the job repeats. Valid values: Once, Day, Week, and Month.
   * 
   * @example
   * Once
   */
  repeatBy?: string;
  /**
   * @remarks
   * List of days on which the job repeats.
   */
  repeatDays?: string[];
  /**
   * @remarks
   * Recording policy for caller numbers.
   * 
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @remarks
   * Start time when the job group begins execution.
   * 
   * @example
   * 1578550074000
   */
  startTime?: number;
  /**
   * @remarks
   * Description of the policy.
   * 
   * @example
   * 作业执行策略
   */
  strategyDescription?: string;
  /**
   * @remarks
   * ID of the policy.
   * 
   * @example
   * f718798d-96be-40e4-bef6-317b54855708
   */
  strategyId?: string;
  /**
   * @remarks
   * Name of the policy.
   * 
   * @example
   * 策略
   */
  strategyName?: string;
  /**
   * @remarks
   * Type of the policy.
   * 
   * @example
   * Repeatable
   */
  type?: string;
  /**
   * @remarks
   * Time periods during which the job runs each day.
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
   * ID of the job group.
   * 
   * @example
   * 5a7e8b09-baf9-4cab-b540-c971f47a7146
   */
  batchJobId?: string;
  /**
   * @remarks
   * List of caller numbers.
   */
  callingNumbers?: string[];
  /**
   * @remarks
   * Time when the job group was created.
   * 
   * @example
   * 1579068424000
   */
  creationTime?: number;
  /**
   * @remarks
   * Key of the uploaded Excel file.
   * 
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  jobFilePath?: string;
  /**
   * @remarks
   * Description of the job group.
   * 
   * @example
   * 第一个批量作业
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * Name of the job group.
   * 
   * @example
   * 批量作业01
   */
  jobGroupName?: string;
  /**
   * @remarks
   * ID of the scenario for the job group.
   * 
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
  /**
   * @remarks
   * Job execution policy.
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
   * Information about the job group.
   */
  batchJob?: CreateBatchJobsResponseBodyBatchJob;
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
   * Response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
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

