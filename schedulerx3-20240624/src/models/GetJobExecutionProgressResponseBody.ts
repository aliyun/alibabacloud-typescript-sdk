// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataRootProgress extends $dara.Model {
  /**
   * @remarks
   * The number of finished items.
   * 
   * @example
   * 2
   */
  finished?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataShardingProgressStatusType extends $dara.Model {
  /**
   * @remarks
   * The task status code.
   * 
   * @example
   * 5
   */
  code?: string;
  /**
   * @remarks
   * The status name.
   * 
   * @example
   * TaskStatus.FAILED
   */
  name?: string;
  /**
   * @remarks
   * The tip information.
   */
  tips?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      tips: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.tips) {
      $dara.Model.validateMap(this.tips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataShardingProgress extends $dara.Model {
  /**
   * @remarks
   * ID。
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The shard execution ID.
   * 
   * @example
   * 1306189481388277762
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The shard execution result.
   * 
   * @example
   * 2,4,6,8,10
   */
  result?: string;
  /**
   * @remarks
   * The task execution status. Valid values:
   * - 0: unknown.
   * - 1: init.
   * - 2: pulled.
   * - 3: running.
   * - 4: success.
   * - 5: failed.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The status type.
   */
  statusType?: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType;
  /**
   * @remarks
   * The worker address.
   * 
   * @example
   * http://192.168.***.9:9999/
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jobExecutionId: 'JobExecutionId',
      result: 'Result',
      status: 'Status',
      statusType: 'StatusType',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      jobExecutionId: 'string',
      result: 'string',
      status: 'number',
      statusType: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType,
      workerAddr: 'string',
    };
  }

  validate() {
    if(this.statusType && typeof (this.statusType as any).validate === 'function') {
      (this.statusType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataTaskProgress extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 100
   */
  failed?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * calendar_test_2
   */
  name?: string;
  /**
   * @remarks
   * The number of pulled items.
   * 
   * @example
   * 10
   */
  pulled?: number;
  /**
   * @remarks
   * The number of items in the queue.
   * 
   * @example
   * 100
   */
  queue?: number;
  /**
   * @remarks
   * The number of running items.
   * 
   * @example
   * 1
   */
  running?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 100
   */
  success?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 1000
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      name: 'Name',
      pulled: 'Pulled',
      queue: 'Queue',
      running: 'Running',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      name: 'string',
      pulled: 'number',
      queue: 'number',
      running: 'number',
      success: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataTotalProgress extends $dara.Model {
  /**
   * @remarks
   * The number of finished items.
   * 
   * @example
   * 15
   */
  finished?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyDataWorkerProgress extends $dara.Model {
  /**
   * @remarks
   * The number of failed items.
   * 
   * @example
   * 20
   */
  failed?: number;
  /**
   * @remarks
   * The number of pulled items.
   * 
   * @example
   * 20
   */
  pulled?: number;
  /**
   * @remarks
   * The number of items in the queue.
   * 
   * @example
   * 20
   */
  queue?: number;
  /**
   * @remarks
   * The number of running items.
   * 
   * @example
   * 20
   */
  running?: number;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 20
   */
  success?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 1a0e97fb17244665327205402dbd6d
   */
  traceId?: string;
  /**
   * @remarks
   * The worker address.
   * 
   * @example
   * 10.***.***.53:61941
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      pulled: 'Pulled',
      queue: 'Queue',
      running: 'Running',
      success: 'Success',
      total: 'Total',
      traceId: 'TraceId',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      pulled: 'number',
      queue: 'number',
      running: 'number',
      success: 'number',
      total: 'number',
      traceId: 'string',
      workerAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1758594961000
   */
  endTime?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * 测试任务
   */
  jobDescription?: string;
  /**
   * @remarks
   * The root task progress.
   */
  rootProgress?: GetJobExecutionProgressResponseBodyDataRootProgress;
  /**
   * @remarks
   * The sharding task progress.
   */
  shardingProgress?: GetJobExecutionProgressResponseBodyDataShardingProgress[];
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1758506761000
   */
  startTime?: string;
  /**
   * @remarks
   * The subtask progress.
   */
  taskProgress?: GetJobExecutionProgressResponseBodyDataTaskProgress[];
  /**
   * @remarks
   * The overall task progress.
   */
  totalProgress?: GetJobExecutionProgressResponseBodyDataTotalProgress;
  /**
   * @remarks
   * The execution progress by worker.
   */
  workerProgress?: GetJobExecutionProgressResponseBodyDataWorkerProgress[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      jobDescription: 'JobDescription',
      rootProgress: 'RootProgress',
      shardingProgress: 'ShardingProgress',
      startTime: 'StartTime',
      taskProgress: 'TaskProgress',
      totalProgress: 'TotalProgress',
      workerProgress: 'WorkerProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      jobDescription: 'string',
      rootProgress: GetJobExecutionProgressResponseBodyDataRootProgress,
      shardingProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataShardingProgress },
      startTime: 'string',
      taskProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataTaskProgress },
      totalProgress: GetJobExecutionProgressResponseBodyDataTotalProgress,
      workerProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataWorkerProgress },
    };
  }

  validate() {
    if(this.rootProgress && typeof (this.rootProgress as any).validate === 'function') {
      (this.rootProgress as any).validate();
    }
    if(Array.isArray(this.shardingProgress)) {
      $dara.Model.validateArray(this.shardingProgress);
    }
    if(Array.isArray(this.taskProgress)) {
      $dara.Model.validateArray(this.taskProgress);
    }
    if(this.totalProgress && typeof (this.totalProgress as any).validate === 'function') {
      (this.totalProgress as any).validate();
    }
    if(Array.isArray(this.workerProgress)) {
      $dara.Model.validateArray(this.workerProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobExecutionProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetJobExecutionProgressResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 9B57FDD7-ABBE-5030-B348-86EB9943DB59
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetJobExecutionProgressResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

