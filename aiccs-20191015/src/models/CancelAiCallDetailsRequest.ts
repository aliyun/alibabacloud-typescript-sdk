// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsRequest extends $dara.Model {
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
  detailIdList?: string[];
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
  phoneNumbers?: string[];
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
      detailIdList: 'DetailIdList',
      encryptionType: 'EncryptionType',
      ownerId: 'OwnerId',
      phoneNumbers: 'PhoneNumbers',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      detailIdList: { 'type': 'array', 'itemType': 'string' },
      encryptionType: 'number',
      ownerId: 'number',
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailIdList)) {
      $dara.Model.validateArray(this.detailIdList);
    }
    if(Array.isArray(this.phoneNumbers)) {
      $dara.Model.validateArray(this.phoneNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

