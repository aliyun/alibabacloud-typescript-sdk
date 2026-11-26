// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The task batch ID. This is the batch ID returned when you import called numbers. You can view the task batch ID on the **Call task management** > **Details** > **Execution records** page or obtain the batch ID returned when you call the [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) operation to import called numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 139*********216
   */
  batchId?: string;
  /**
   * @remarks
   * The task detail ID. You can view the task detail ID in the upper-left corner of the **Call task management** > **Details** > **Execution records** > **Completed** > **Call details** page or call the [QueryAiCallDetailPage](https://help.aliyun.com/document_detail/2926853.html) operation to obtain the task detail ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9662*************
   */
  detailId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID. You can view the task ID on the **Call task management** page or call the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 138************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      detailId: 'DetailId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      detailId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

