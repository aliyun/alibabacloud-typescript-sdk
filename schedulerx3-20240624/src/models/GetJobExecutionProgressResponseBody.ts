// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataRootProgress extends $dara.Model {
  /**
   * @remarks
   * The number of finished items in the root task.
   * 
   * @example
   * 2
   */
  finished?: number;
  /**
   * @remarks
   * The total number of items in the root task.
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
   * The status code.
   * 
   * @example
   * 5
   */
  code?: string;
  /**
   * @remarks
   * The name of the status.
   * 
   * @example
   * TaskStatus.FAILED
   */
  name?: string;
  /**
   * @remarks
   * Informational messages about the status.
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
   * The shard ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The execution ID of the sharding task.
   * 
   * @example
   * 1306189481388277762
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The execution result of the sharding task.
   * 
   * @example
   * 2,4,6,8,10
   */
  result?: string;
  /**
   * @remarks
   * The execution status of the sharding task. Valid values:
   * 
   * - 0: UNKNOWN
   * 
   * - 1: INIT
   * 
   * - 2: PULLED
   * 
   * - 3: RUNNING
   * 
   * - 4: SUCCESS
   * 
   * - 5: FAILED
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * Detailed information about the execution status.
   */
  statusType?: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType;
  /**
   * @remarks
   * The address of the Worker.
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
   * The name of the subtask.
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
   * The number of items in the subtask\\"s queue.
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
   * The total number of items in the subtask.
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
   * The number of finished items in the job.
   * 
   * @example
   * 15
   */
  finished?: number;
  /**
   * @remarks
   * The total number of items in the job.
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
   * The number of items that failed on this Worker.
   * 
   * @example
   * 20
   */
  failed?: number;
  /**
   * @remarks
   * The number of items pulled by this Worker.
   * 
   * @example
   * 20
   */
  pulled?: number;
  /**
   * @remarks
   * The number of items in this Worker\\"s queue.
   * 
   * @example
   * 20
   */
  queue?: number;
  /**
   * @remarks
   * The number of items this Worker is currently running.
   * 
   * @example
   * 20
   */
  running?: number;
  /**
   * @remarks
   * The number of items successfully processed by this Worker.
   * 
   * @example
   * 20
   */
  success?: number;
  /**
   * @remarks
   * The total number of items processed by this Worker.
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
   * The address of the Worker.
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
   * The job end time, in Unix milliseconds.
   * 
   * @example
   * 1758594961000
   */
  endTime?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * 测试任务
   */
  jobDescription?: string;
  /**
   * @remarks
   * The progress of the root task.
   */
  rootProgress?: GetJobExecutionProgressResponseBodyDataRootProgress;
  /**
   * @remarks
   * A list of progress details for each sharding task.
   */
  shardingProgress?: GetJobExecutionProgressResponseBodyDataShardingProgress[];
  /**
   * @remarks
   * The job start time, in Unix milliseconds.
   * 
   * @example
   * 1758506761000
   */
  startTime?: string;
  /**
   * @remarks
   * A list of progress details for each subtask.
   */
  taskProgress?: GetJobExecutionProgressResponseBodyDataTaskProgress[];
  /**
   * @remarks
   * The overall progress of the job.
   */
  totalProgress?: GetJobExecutionProgressResponseBodyDataTotalProgress;
  /**
   * @remarks
   * A list of execution progress details for each Worker.
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * - The data returned by the request.
   */
  data?: GetJobExecutionProgressResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier for the request, generated by Alibaba Cloud. Use this ID to troubleshoot issues.
   * 
   * @example
   * 9B57FDD7-ABBE-5030-B348-86EB9943DB59
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * - **true**: The request succeeded.
   * 
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

