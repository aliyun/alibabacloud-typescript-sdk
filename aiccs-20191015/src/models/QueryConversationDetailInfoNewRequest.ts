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
   * The task detail ID. View the task detail ID in the upper-left corner of the **Call Task Management** > **Details** > **Execution Records** > **Completed** > **Call Details** console, or call the [QueryAiCallDetailPage](https://help.aliyun.com/document_detail/2926853.html) operation to obtain the task detail ID.
   * 
   * @example
   * 9662*************
   */
  detailId?: string;
  /**
   * @remarks
   * The external business serial number reserved for external input. You can use a unique ID for business association.
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
   * The task ID. View the task ID in the **Call Task Management** console or call the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation to obtain the task ID.
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

