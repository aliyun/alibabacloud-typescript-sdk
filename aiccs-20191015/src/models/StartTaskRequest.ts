// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to start the task immediately. Valid values:
   * - **true**: Yes.
   * - **false**: No. The task is not started.
   * 
   * @example
   * true
   */
  startNow?: boolean;
  /**
   * @remarks
   * The unique ID of the chatbot outbound call task. You can view the ID on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or obtain it by calling the [CreateTask](https://help.aliyun.com/document_detail/223556.html) operation.
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

