// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The task batch ID. This is the batch ID returned when callee data is imported. View the task batch ID on the **Call Task Management** > **Details** > **Execution Records** page, or use the batch ID returned when importing callee data by calling the [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 139*********216
   */
  batchId?: string;
  /**
   * @remarks
   * The task detail ID. View the task detail ID in the upper-left corner of the **Call Task Management** > **Details** > **Execution Records** > **Completed** > **Call Details** page, or retrieve it by calling the [QueryAiCallDetailPage](https://help.aliyun.com/document_detail/2926853.html) operation.
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
   * The task ID. View the task ID on the **Call Task Management** page or retrieve it by calling the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation.
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

