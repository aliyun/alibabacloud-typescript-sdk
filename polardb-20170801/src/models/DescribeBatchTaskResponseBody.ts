// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchTaskResponseBodySubTasks extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * aliuid:1422133474238823 assumeOssRole not exist,serviceName:aliyunesarealtimelogpushossrole
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * pc-pz5f6mvi1p84t35d7
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the subtask.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2026/05/28T17:38:20Z
   */
  taskBegin?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2026/05/28T20:38:20Z
   */
  taskEnd?: string;
  /**
   * @remarks
   * The ID of the subtask.
   * 
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
   * @remarks
   * The target application type of the batch task.
   * 
   * @example
   * polarclaw
   */
  applicationType?: string;
  /**
   * @remarks
   * The batch ID of the scheduled task execution.
   * 
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
   * @remarks
   * The status of the task.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The list of subtasks.
   */
  subTasks?: DescribeBatchTaskResponseBodySubTasks[];
  /**
   * @remarks
   * The total number of domain names or DNS records that are successfully processed.
   * 
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2026/05/28T16:38:20Z
   */
  taskBegin?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2026/05/28T15:23:47Z
   */
  taskEnd?: string;
  /**
   * @remarks
   * The description of the model service.
   * 
   * @example
   * batch_task_test
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * polarclaw_install_skills
   */
  taskType?: string;
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
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
      applicationType: 'string',
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

