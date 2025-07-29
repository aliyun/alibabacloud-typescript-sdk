// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskInfoResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
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
   * The action of the event.
   * 
   * @example
   * start
   */
  action?: string;
  /**
   * @remarks
   * The severity level of the event.
   * 
   * @example
   * Normal
   */
  level?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * start to xxx
   */
  message?: string;
  /**
   * @remarks
   * The cause of the event.
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
   * The timestamp when the event was generated.
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
   * The end time of the stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The message about the stage.
   * 
   * @example
   * success to xxxxx
   */
  message?: string;
  /**
   * @remarks
   * The output generated at the stage.
   */
  outputs?: { [key: string]: any };
  /**
   * @remarks
   * The start time of the stage.
   * 
   * @example
   * 2022-12-15 23:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the stage.
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
   * The ID of the object.
   * 
   * @example
   * c78592bfe92244365b3c3ad47f1de****
   */
  id?: string;
  /**
   * @remarks
   * The type of the object.
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
   * The resources that are managed by the task. For a scale-out task, the value of this parameter is the ID of the instance that is added by the task.
   * 
   * @example
   * i-xxx
   */
  data?: string;
  /**
   * @remarks
   * The status of the scale-out task. Valid values:
   * 
   * *   `success`: The scale-out task is successful.
   * *   `success`: The scale-out task failed.
   * *   `initial`: The scale-out task is being initialized.
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
   * The time when the task was created.
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
   * The error returned for the task.
   */
  error?: DescribeTaskInfoResponseBodyError;
  /**
   * @remarks
   * The event generated by the task.
   */
  events?: DescribeTaskInfoResponseBodyEvents[];
  /**
   * @remarks
   * The task parameters.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * Detailed information about the stage of the task.
   */
  stages?: DescribeTaskInfoResponseBodyStages[];
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   `running`: The task is running.
   * *   `failed`: The task failed.
   * *   `success`: The task is complete.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The object of the task.
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
   * The execution details of the task.
   */
  taskResult?: DescribeTaskInfoResponseBodyTaskResult[];
  /**
   * @remarks
   * The task type. A value of `cluster_scaleout` indicates a scale-out task.
   * 
   * @example
   * cluster_scaleout
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the task was updated.
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

