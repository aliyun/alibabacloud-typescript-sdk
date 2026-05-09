// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTaskResponseBodySubTasks extends $dara.Model {
  /**
   * @example
   * aliuid:1422133474238823 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @example
   * pc-pz5f6mvi1p84t35d7
   */
  instanceId?: string;
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @example
   * 2026/05/28T17:38:20Z
   */
  taskBegin?: string;
  /**
   * @example
   * 2026/05/28T20:38:20Z
   */
  taskEnd?: string;
  /**
   * @example
   * 629271331
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      instanceId: 'InstanceId',
      status: 'Status',
      taskBegin: 'TaskBegin',
      taskEnd: 'TaskEnd',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      instanceId: 'string',
      status: 'string',
      taskBegin: 'string',
      taskEnd: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchTaskResponseBody extends $dara.Model {
  /**
   * @example
   * pcb-xxx
   */
  batchId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB
   */
  requestId?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  subTasks?: DescribeBatchTaskResponseBodySubTasks[];
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * 2026/05/28T16:38:20Z
   */
  taskBegin?: string;
  /**
   * @example
   * 2026/05/28T15:23:47Z
   */
  taskEnd?: string;
  /**
   * @example
   * batch_task_test
   */
  taskName?: string;
  /**
   * @example
   * polarclaw_install_skills
   */
  taskType?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      requestId: 'RequestId',
      status: 'Status',
      subTasks: 'SubTasks',
      successCount: 'SuccessCount',
      taskBegin: 'TaskBegin',
      taskEnd: 'TaskEnd',
      taskName: 'TaskName',
      taskType: 'TaskType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      requestId: 'string',
      status: 'string',
      subTasks: { 'type': 'array', 'itemType': DescribeBatchTaskResponseBodySubTasks },
      successCount: 'number',
      taskBegin: 'string',
      taskEnd: 'string',
      taskName: 'string',
      taskType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

