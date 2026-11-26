// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDialogRequest extends $dara.Model {
  /**
   * @remarks
   * The called number. You can view the called number on the [**Task Management**](https://aiccs.console.aliyun.com/job/list) > **Details** page or obtain it by calling the [ListTaskDetail](https://help.aliyun.com/document_detail/2718009.html) operation. The **Called** parameter returned by the operation is the called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  called?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique task ID of the robot call task. You can view the ID on the [Task Management](https://aiccs.console.aliyun.com/job/list) page or obtain it by calling the [CreateTask](https://help.aliyun.com/document_detail/223556.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      called: 'Called',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      called: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

