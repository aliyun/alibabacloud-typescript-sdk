// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Indicates whether to start immediately. Valid values:
   * - **true**: Yes.
   * - **false**: No, which means the job will not be started.
   * 
   * @example
   * true
   */
  startNow?: boolean;
  /**
   * @remarks
   * The unique job ID of the robot calling task. You can view it on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or obtain it by using the [CreateTask](https://help.aliyun.com/document_detail/223556.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startNow: 'StartNow',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startNow: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

