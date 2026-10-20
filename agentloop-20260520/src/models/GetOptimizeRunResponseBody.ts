// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOptimizeRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of executed attempts.
   * 
   * @example
   * 1
   */
  attemptCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-12T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The current execution stage.
   * 
   * @example
   * attribution
   */
  currentStage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InternalError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The optimize run failed.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The type-related information and immutable result references. For efficiency analysis, frozen outputBindings and tokenPublication release receipts are returned.
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2026-08-12T10:01:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The maximum number of attempts.
   * 
   * @example
   * 3
   */
  maxAttempts?: number;
  /**
   * @remarks
   * The ID of the execution instance.
   * 
   * @example
   * or-20260812-0001
   */
  optimizeRunId?: string;
  /**
   * @remarks
   * The name of the optimization task.
   * 
   * @example
   * efficiency-analysis
   */
  optimizeTaskName?: string;
  /**
   * @remarks
   * The current execution progress. The fields are defined by the task type.
   */
  progress?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The initial start time.
   * 
   * @example
   * 2026-08-12T10:00:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The number of analysis trajectories.
   * 
   * @example
   * 100
   */
  trajectoryCount?: number;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * Scheduled
   */
  triggerType?: string;
  /**
   * @remarks
   * The task type snapshot.
   * 
   * @example
   * EfficiencyAnalysis
   */
  type?: string;
  /**
   * @remarks
   * The end time of the analysis window, in UNIX seconds.
   * 
   * @example
   * 1786432690000
   */
  windowEndTime?: number;
  /**
   * @remarks
   * The start time of the analysis window, in UNIX seconds.
   * 
   * @example
   * 1786432688000
   */
  windowStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      attemptCount: 'attemptCount',
      createTime: 'createTime',
      currentStage: 'currentStage',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      extra: 'extra',
      finishTime: 'finishTime',
      maxAttempts: 'maxAttempts',
      optimizeRunId: 'optimizeRunId',
      optimizeTaskName: 'optimizeTaskName',
      progress: 'progress',
      requestId: 'requestId',
      startTime: 'startTime',
      status: 'status',
      trajectoryCount: 'trajectoryCount',
      triggerType: 'triggerType',
      type: 'type',
      windowEndTime: 'windowEndTime',
      windowStartTime: 'windowStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptCount: 'number',
      createTime: 'string',
      currentStage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      finishTime: 'string',
      maxAttempts: 'number',
      optimizeRunId: 'string',
      optimizeTaskName: 'string',
      progress: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      trajectoryCount: 'number',
      triggerType: 'string',
      type: 'string',
      windowEndTime: 'number',
      windowStartTime: 'number',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(this.progress) {
      $dara.Model.validateMap(this.progress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

