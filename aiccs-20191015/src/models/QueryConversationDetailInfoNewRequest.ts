// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoNewRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the call.
   * 
   * @example
   * 1552********^1420********
   */
  callId?: string;
  /**
   * @remarks
   * The task detail ID. You can view the task detail ID in the upper-left corner of the **Call Task Management** > **Details** > **Execution Records** > **Completed** > **Call Details** page, or call the [QueryAiCallDetailPage](https://help.aliyun.com/document_detail/2926853.html) operation to obtain the task detail ID.
   * 
   * @example
   * 9662*************
   */
  detailId?: string;
  /**
   * @remarks
   * The custom business transaction ID passed from external systems. You can use a unique ID to associate business data.
   * 
   * @example
   * 123******
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID. You can view the task ID on the **Call Task Management** page or call the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 138************
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      detailId: 'DetailId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      detailId: 'string',
      outId: 'string',
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

