// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionProgressResponseBodyDataRootProgress extends $dara.Model {
  /**
   * @example
   * 2
   */
  finished?: number;
  /**
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
   * @example
   * 5
   */
  code?: string;
  /**
   * @example
   * TaskStatus.FAILED
   */
  name?: string;
  /**
   * @remarks
   * -
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
   * id
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 1306189481388277762
   */
  jobExecutionId?: string;
  /**
   * @example
   * 2,4,6,8,10
   */
  result?: string;
  /**
   * @example
   * 5
   */
  status?: number;
  statusType?: GetJobExecutionProgressResponseBodyDataShardingProgressStatusType;
  /**
   * @example
   * http://192.168.1.9:9999/
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
   * @example
   * 100
   */
  failed?: number;
  /**
   * @example
   * calendar_test_2
   */
  name?: string;
  /**
   * @example
   * 10
   */
  pulled?: number;
  /**
   * @example
   * 100
   */
  queue?: number;
  /**
   * @example
   * 1
   */
  running?: number;
  /**
   * @example
   * 100
   */
  success?: number;
  /**
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
   * @example
   * 15
   */
  finished?: number;
  /**
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
   * @example
   * 20
   */
  failed?: number;
  /**
   * @example
   * 20
   */
  pulled?: number;
  /**
   * @example
   * 20
   */
  queue?: number;
  /**
   * @example
   * 20
   */
  running?: number;
  /**
   * @example
   * 20
   */
  success?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  /**
   * @example
   * 1a0e97fb17244665327205402dbd6d
   */
  traceId?: string;
  /**
   * @example
   * 10.10.116.53:61941
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
  jobDescription?: string;
  rootProgress?: GetJobExecutionProgressResponseBodyDataRootProgress;
  shardingProgress?: GetJobExecutionProgressResponseBodyDataShardingProgress[];
  taskProgress?: GetJobExecutionProgressResponseBodyDataTaskProgress[];
  totalProgress?: GetJobExecutionProgressResponseBodyDataTotalProgress;
  workerProgress?: GetJobExecutionProgressResponseBodyDataWorkerProgress[];
  static names(): { [key: string]: string } {
    return {
      jobDescription: 'JobDescription',
      rootProgress: 'RootProgress',
      shardingProgress: 'ShardingProgress',
      taskProgress: 'TaskProgress',
      totalProgress: 'TotalProgress',
      workerProgress: 'WorkerProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDescription: 'string',
      rootProgress: GetJobExecutionProgressResponseBodyDataRootProgress,
      shardingProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataShardingProgress },
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
   * @example
   * Parameter format error
   */
  message?: string;
  /**
   * @example
   * 9B57FDD7-ABBE-5030-B348-86EB9943DB59
   */
  requestId?: string;
  /**
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

