// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobStepResponseBodyJobStepsErrorDetails extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * URL of the help document.
   * 
   * @example
   * ****
   */
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStepResponseBodyJobStepsSubJobStepsErrorDetails extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * URL of the help document.
   * 
   * @example
   * ****
   */
  helpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      helpUrl: 'HelpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      helpUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStepResponseBodyJobStepsSubJobSteps extends $dara.Model {
  /**
   * @remarks
   * The time when the sub-job was started, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2025-01-02T02:00:21Z
   */
  bootTime?: string;
  /**
   * @remarks
   * Sub-task step identity.
   * 
   * @example
   * 03
   */
  code?: string;
  /**
   * @remarks
   * The time when the sub-job was created, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-09-20T02:13:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * UncaughtException:java.lang.NullPointerException
   */
  errMsg?: string;
  /**
   * @remarks
   * Error message.
   */
  errorDetails?: ListJobStepResponseBodyJobStepsSubJobStepsErrorDetails[];
  /**
   * @remarks
   * End time of the sub-task, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-03-15T02:15:14Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Incremental data latency, in milliseconds.
   * 
   * @example
   * 1
   */
  incLatencyMilliseconds?: string;
  /**
   * @remarks
   * Incremental data latency, in seconds.
   * 
   * @example
   * 1
   */
  incLatencySeconds?: number;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * mj3z9w9s10am68o_0004_0000
   */
  jobStepId?: string;
  /**
   * @remarks
   * Sub-job step information. Valid values are as follows:
   * 
   * - Precheck: precheck phase
   * - Incremental data service: incremental data collection phase
   * - dts.step.struct.load: schema migration phase
   * - dts.step.data.load: full migration phase
   * - etl-check: extract, transform, and load (ETL) phase
   * - Consistency validation: data verification phase
   * - Synchronization: incremental synchronization phase
   * 
   * @example
   * test
   */
  jobStepName?: string;
  /**
   * @remarks
   * The time when the sub-job was updated, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-08-22T02:04:35Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * Indicates whether the acceleration feature is required.
   * 
   * @example
   * true
   */
  needAcceleration?: boolean;
  /**
   * @remarks
   * Progress of the sub-job step.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Serial number of the sub-task step. Indicates the task execution order; the smaller the numeric value, the earlier the execution order.
   * 
   * @example
   * 123
   */
  serial?: number;
  /**
   * @remarks
   * Status of the sub-task step. Valid values:
   * - Failed: failed.
   * - Pause: paused.
   * - Schedule: scheduled.
   * - Init: initialization.
   * - Running: synchronizing.
   * - Catched: waiting for synchronization.
   * - Finished: ended.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      code: 'Code',
      createTime: 'CreateTime',
      errMsg: 'ErrMsg',
      errorDetails: 'ErrorDetails',
      finishTime: 'FinishTime',
      incLatencyMilliseconds: 'IncLatencyMilliseconds',
      incLatencySeconds: 'IncLatencySeconds',
      jobStepId: 'JobStepId',
      jobStepName: 'JobStepName',
      modifyTime: 'ModifyTime',
      needAcceleration: 'NeedAcceleration',
      progress: 'Progress',
      serial: 'Serial',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      code: 'string',
      createTime: 'string',
      errMsg: 'string',
      errorDetails: { 'type': 'array', 'itemType': ListJobStepResponseBodyJobStepsSubJobStepsErrorDetails },
      finishTime: 'string',
      incLatencyMilliseconds: 'string',
      incLatencySeconds: 'number',
      jobStepId: 'string',
      jobStepName: 'string',
      modifyTime: 'string',
      needAcceleration: 'boolean',
      progress: 'number',
      serial: 'number',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStepResponseBodyJobSteps extends $dara.Model {
  /**
   * @remarks
   * The job start time, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-04-11T09:33:23Z
   */
  bootTime?: string;
  /**
   * @remarks
   * Task step identity.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The job creation time, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-11-28T17:13:51Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * fullcheck find different records : 2372
   */
  errMsg?: string;
  /**
   * @remarks
   * The error message.
   */
  errorDetails?: ListJobStepResponseBodyJobStepsErrorDetails[];
  /**
   * @remarks
   * Task end time, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-03-15T02:15:14Z
   */
  finishTime?: string;
  /**
   * @remarks
   * Incremental data latency, in milliseconds.
   * 
   * @example
   * 1
   */
  incLatencyMilliseconds?: number;
  /**
   * @remarks
   * Incremental data latency, in seconds.
   * 
   * @example
   * -1
   */
  incLatencySeconds?: number;
  /**
   * @remarks
   * The task step ID.
   * 
   * @example
   * l02c1f7h179****
   */
  jobStepId?: string;
  /**
   * @remarks
   * Task step information. Valid values:
   * 
   * - Precheck: precheck phase
   * - Incremental data service: incremental data collection phase
   * - dts.step.struct.load: schema migration phase
   * - dts.step.data.load: full migration phase
   * - etl-check: extract, transform, and load phase
   * - Consistency validation: data verification phase
   * - Synchronization: incremental synchronization phase
   * 
   * @example
   * 预检查
   */
  jobStepName?: string;
  /**
   * @remarks
   * The time when the job was updated, in the format <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2025-01-03T02:26:14Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * Indicates whether the acceleration feature should be provided.
   * 
   * @example
   * true
   */
  needAcceleration?: boolean;
  /**
   * @remarks
   * The progress of the task step.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * Task step serial number. Indicates the task execution order. A smaller value indicates an earlier execution order.
   * 
   * @example
   * 1
   */
  serial?: number;
  /**
   * @remarks
   * Task step status.
   * 
   * @example
   * ○ Finished
   */
  state?: string;
  /**
   * @remarks
   * The number of sub-jobs.
   * 
   * @example
   * 1
   */
  subJobCount?: number;
  /**
   * @remarks
   * Step information of the sub-job.
   */
  subJobSteps?: ListJobStepResponseBodyJobStepsSubJobSteps[];
  /**
   * @remarks
   * Used to distinguish between the Redis full and incremental phases. Valid values:
   * - full: Full phase
   * - inc: Incremental phase
   * 
   * @example
   * full
   */
  redisPhaseType?: string;
  static names(): { [key: string]: string } {
    return {
      bootTime: 'BootTime',
      code: 'Code',
      createTime: 'CreateTime',
      errMsg: 'ErrMsg',
      errorDetails: 'ErrorDetails',
      finishTime: 'FinishTime',
      incLatencyMilliseconds: 'IncLatencyMilliseconds',
      incLatencySeconds: 'IncLatencySeconds',
      jobStepId: 'JobStepId',
      jobStepName: 'JobStepName',
      modifyTime: 'ModifyTime',
      needAcceleration: 'NeedAcceleration',
      progress: 'Progress',
      serial: 'Serial',
      state: 'State',
      subJobCount: 'SubJobCount',
      subJobSteps: 'SubJobSteps',
      redisPhaseType: 'redisPhaseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootTime: 'string',
      code: 'string',
      createTime: 'string',
      errMsg: 'string',
      errorDetails: { 'type': 'array', 'itemType': ListJobStepResponseBodyJobStepsErrorDetails },
      finishTime: 'string',
      incLatencyMilliseconds: 'number',
      incLatencySeconds: 'number',
      jobStepId: 'string',
      jobStepName: 'string',
      modifyTime: 'string',
      needAcceleration: 'boolean',
      progress: 'number',
      serial: 'number',
      state: 'string',
      subJobCount: 'number',
      subJobSteps: { 'type': 'array', 'itemType': ListJobStepResponseBodyJobStepsSubJobSteps },
      redisPhaseType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    if(Array.isArray(this.subJobSteps)) {
      $dara.Model.validateArray(this.subJobSteps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobStepResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The task step information.
   */
  jobSteps?: ListJobStepResponseBodyJobSteps[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
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
  /**
   * @remarks
   * Indicates whether the Console 2.0 API is used.
   * 
   * @example
   * True
   */
  useV2API?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobSteps: 'JobSteps',
      requestId: 'RequestId',
      success: 'Success',
      useV2API: 'UseV2API',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobSteps: { 'type': 'array', 'itemType': ListJobStepResponseBodyJobSteps },
      requestId: 'string',
      success: 'boolean',
      useV2API: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.jobSteps)) {
      $dara.Model.validateArray(this.jobSteps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

