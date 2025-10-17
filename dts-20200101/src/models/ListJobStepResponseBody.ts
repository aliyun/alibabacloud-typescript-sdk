// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobStepResponseBodyJobStepsErrorDetails extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
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
   * @example
   * Success
   */
  errorCode?: string;
  /**
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
   * @example
   * 2025-01-02T02:00:21Z
   */
  bootTime?: string;
  /**
   * @example
   * 03
   */
  code?: string;
  /**
   * @example
   * 2024-09-20T02:13:12Z
   */
  createTime?: string;
  /**
   * @example
   * UncaughtException:java.lang.NullPointerException
   */
  errMsg?: string;
  errorDetails?: ListJobStepResponseBodyJobStepsSubJobStepsErrorDetails[];
  /**
   * @example
   * 2024-03-15T02:15:14Z
   */
  finishTime?: string;
  /**
   * @example
   * 1
   */
  incLatencyMilliseconds?: string;
  /**
   * @example
   * 1
   */
  incLatencySeconds?: number;
  /**
   * @example
   * mj3z9w9s10am68o_0004_0000
   */
  jobStepId?: string;
  /**
   * @example
   * test
   */
  jobStepName?: string;
  /**
   * @example
   * 2024-08-22T02:04:35Z
   */
  modifyTime?: string;
  /**
   * @example
   * true
   */
  needAcceleration?: boolean;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * 123
   */
  serial?: number;
  /**
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
   * @example
   * 2024-04-11T09:33:23Z
   */
  bootTime?: string;
  /**
   * @example
   * 01
   */
  code?: string;
  /**
   * @example
   * 2023-11-28T17:13:51Z
   */
  createTime?: string;
  /**
   * @example
   * fullcheck find different records : 2372
   */
  errMsg?: string;
  errorDetails?: ListJobStepResponseBodyJobStepsErrorDetails[];
  /**
   * @example
   * 2024-03-15T02:15:14Z
   */
  finishTime?: string;
  /**
   * @example
   * 1
   */
  incLatencyMilliseconds?: number;
  /**
   * @example
   * -1
   */
  incLatencySeconds?: number;
  /**
   * @example
   * l02c1f7h179****
   */
  jobStepId?: string;
  jobStepName?: string;
  /**
   * @example
   * 2025-01-03T02:26:14Z
   */
  modifyTime?: string;
  /**
   * @example
   * true
   */
  needAcceleration?: boolean;
  /**
   * @example
   * 100
   */
  progress?: number;
  /**
   * @example
   * 1
   */
  serial?: number;
  /**
   * @example
   * ○ Finished
   */
  state?: string;
  /**
   * @example
   * 1
   */
  subJobCount?: number;
  subJobSteps?: ListJobStepResponseBodyJobStepsSubJobSteps[];
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  jobSteps?: ListJobStepResponseBodyJobSteps[];
  /**
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

