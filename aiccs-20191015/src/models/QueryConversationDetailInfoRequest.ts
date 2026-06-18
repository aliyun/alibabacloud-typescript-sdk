// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. This ID is returned by the [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) operation when you import callee data. You can view this ID on the **execution history** page by navigating to **call task management** > **details**.
   * 
   * This parameter is required.
   * 
   * @example
   * 139*********216
   */
  batchId?: string;
  /**
   * @remarks
   * The detail ID. You can find this ID in the upper-left corner of the page by navigating to **call task management** > **details** > **execution history** > **completed** > **call details**, or get it by calling the [QueryAiCallDetailPage](https://help.aliyun.com/document_detail/2926853.html) operation.
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
   * The task ID. You can find this ID on the **call task management** page or get it by calling the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation.
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

