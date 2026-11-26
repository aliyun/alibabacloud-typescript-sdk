// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. This is the batch ID returned when callee data is imported. You can view the batch ID on the **Call task management** > **Details** > **Execution records** page, or use the batch ID returned when you call the [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) operation to import callee data. If the DetailIdList parameter is specified, this parameter is invalid.
   * 
   * @example
   * 4253331213*****
   */
  batchId?: string;
  /**
   * @remarks
   * The list of task detail IDs. If this parameter is specified, it takes precedence, and the BatchId and PhoneNumbers parameters are invalid.
   */
  detailIdListShrink?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - 0: No encryption.
   * - 1: MD5.
   * - 2: SHA256.
   * - 3: SM3.
   * 
   * @example
   * 0
   */
  encryptionType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The list of phone numbers. To use this parameter, you must specify the BatchId parameter. Otherwise, this parameter is considered invalid.
   */
  phoneNumbersShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID. You can view the task ID on the **Call task management** page or obtain the task ID by calling the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation.
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
      detailIdListShrink: 'DetailIdList',
      encryptionType: 'EncryptionType',
      ownerId: 'OwnerId',
      phoneNumbersShrink: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      detailIdListShrink: 'string',
      encryptionType: 'number',
      ownerId: 'number',
      phoneNumbersShrink: 'string',
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

