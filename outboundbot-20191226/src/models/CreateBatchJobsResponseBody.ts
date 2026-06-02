// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime extends $dara.Model {
  /**
   * @example
   * 09:00:00
   */
  beginTime?: string;
  /**
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
   * @example
   * {}
   */
  customized?: string;
  /**
   * @example
   * 2209702074000
   */
  endTime?: number;
  /**
   * @example
   * CONTINUE
   */
  followUpStrategy?: string;
  /**
   * @example
   * false
   */
  isTemplate?: boolean;
  /**
   * @example
   * 3
   */
  maxAttemptsPerDay?: number;
  /**
   * @example
   * 10
   */
  minAttemptInterval?: number;
  /**
   * @example
   * Once
   */
  repeatBy?: string;
  repeatDays?: string[];
  /**
   * @example
   * LocalFirst
   */
  routingStrategy?: string;
  /**
   * @example
   * 1578550074000
   */
  startTime?: number;
  strategyDescription?: string;
  /**
   * @example
   * f718798d-96be-40e4-bef6-317b54855708
   */
  strategyId?: string;
  strategyName?: string;
  /**
   * @example
   * Repeatable
   */
  type?: string;
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
   * @example
   * 5a7e8b09-baf9-4cab-b540-c971f47a7146
   */
  batchJobId?: string;
  callingNumbers?: string[];
  /**
   * @example
   * 1579068424000
   */
  creationTime?: number;
  /**
   * @example
   * 52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx
   */
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupName?: string;
  /**
   * @example
   * 6cea9bed-63e6-439e-ae4c-b3333efff53d
   */
  scenarioId?: string;
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
  batchJob?: CreateBatchJobsResponseBodyBatchJob;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

