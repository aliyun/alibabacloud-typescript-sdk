// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * failed to xxx
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The event action.
   * 
   * @example
   * start
   */
  action?: string;
  /**
   * @remarks
   * The event level.
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * start to xxx
   */
  message?: string;
  /**
   * @remarks
   * The reason for the event.
   * 
   * @example
   * NodePoolUpgradeStart
   */
  reason?: string;
  /**
   * @remarks
   * The source of the event.
   * 
   * @example
   * ACK
   */
  source?: string;
  /**
   * @remarks
   * The time the event was generated.
   * 
   * @example
   * 1669706229286
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      level: 'level',
      message: 'message',
      reason: 'reason',
      source: 'source',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      level: 'string',
      message: 'string',
      reason: 'string',
      source: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyStages extends $dara.Model {
  /**
   * @remarks
   * The end time of the task stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The message for the task stage.
   * 
   * @example
   * success to xxxxx
   */
  message?: string;
  /**
   * @remarks
   * The output of the task stage.
   */
  outputs?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the task stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the task stage.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'end_time',
      message: 'message',
      outputs: 'outputs',
      startTime: 'start_time',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      message: 'string',
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyTarget extends $dara.Model {
  /**
   * @remarks
   * The ID of the task target.
   * 
   * @example
   * c78592bfe92244365b3c3ad47f1de****
   */
  id?: string;
  /**
   * @remarks
   * The type of the task target.
   * 
   * @example
   * cluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskInfoResponseBodyTaskResult extends $dara.Model {
  /**
   * @remarks
   * The resource that the task operates on. For example, for a scale-out task that operates on an instance, this field is the instance ID.
   * 
   * @example
   * i-xxx
   */
  data?: string;
  /**
   * @remarks
   * The scale-out state of the resource. Valid values:
   * 
   * - `success`: The scale-out succeeded.
   * 
   * - `failed`: The scale-out failed.
   * 
   * - `initial`: The resource is initializing.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class DescribeTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c78592bfe92244365b3c3ad47f1de****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time the task was created.
   * 
   * @example
   * 2020-11-10T16:02:04+08:00
   */
  created?: string;
  /**
   * @remarks
   * The current stage of the task.
   * 
   * @example
   * DrainNodes
   */
  currentStage?: string;
  /**
   * @remarks
   * Error information for the task.
   */
  error?: DescribeTaskInfoResponseBodyError;
  /**
   * @remarks
   * Events generated by the task.
   */
  events?: DescribeTaskInfoResponseBodyEvents[];
  outputs?: { [key: string]: any };
  /**
   * @remarks
   * The task parameters.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The task stages.
   */
  stages?: DescribeTaskInfoResponseBodyStages[];
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * - `running`: The task is in progress.
   * 
   * - `fail`: The task failed.
   * 
   * - `success`: The task succeeded.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The target of the task.
   */
  target?: DescribeTaskInfoResponseBodyTarget;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5faa48fb31b6b8078d000006
   */
  taskId?: string;
  /**
   * @remarks
   * The details of the task execution.
   */
  taskResult?: DescribeTaskInfoResponseBodyTaskResult[];
  /**
   * @remarks
   * The type of the task. For a scale-out task, the value is `cluster_scaleout`.
   * 
   * @example
   * cluster_scaleout
   */
  taskType?: string;
  /**
   * @remarks
   * The time the task was last updated.
   * 
   * @example
   * 2020-11-10T16:03:06+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      currentStage: 'current_stage',
      error: 'error',
      events: 'events',
      outputs: 'outputs',
      parameters: 'parameters',
      stages: 'stages',
      state: 'state',
      target: 'target',
      taskId: 'task_id',
      taskResult: 'task_result',
      taskType: 'task_type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
      currentStage: 'string',
      error: DescribeTaskInfoResponseBodyError,
      events: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyEvents },
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      stages: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyStages },
      state: 'string',
      target: DescribeTaskInfoResponseBodyTarget,
      taskId: 'string',
      taskResult: { 'type': 'array', 'itemType': DescribeTaskInfoResponseBodyTaskResult },
      taskType: 'string',
      updated: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    if(Array.isArray(this.taskResult)) {
      $dara.Model.validateArray(this.taskResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

