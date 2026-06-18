// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of items per page. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The robot name, which is the script name. You can view the names of scripts that have passed Review in the [Script Management](https://aiccs.console.aliyun.com/patter/list) interface.
   * 
   * @example
   * 机器人
   */
  robotName?: string;
  /**
   * @remarks
   * Job Status. Valid values:
   * 
   * - **INIT**: Not started.
   * - **RELEASE**: Parsing.
   * - **RUNNING**: Executing.
   * - **STOP**: Paused manually.
   * - **SYSTEM_STOP**: Paused by the system.
   * - **READY**: Pending execution.
   * - **CANCEL**: Stopped manually.
   * - **SYSTEM_CANCEL**: Stopped by the system.
   * - **DONE**: Completed.
   * 
   * @example
   * STOP
   */
  status?: string;
  /**
   * @remarks
   * The unique job ID of the robot calling job. You can view it in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface or obtain it by using the [CreateTask](https://help.aliyun.com/document_detail/223556.html) API.
   * 
   * @example
   * 12****
   */
  taskId?: number;
  /**
   * @remarks
   * The job name. You can view the names of created jobs in the [Task Management](https://aiccs.console.aliyun.com/job/list) interface.
   * 
   * @example
   * 任务测试
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      robotName: 'RobotName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      robotName: 'string',
      status: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

