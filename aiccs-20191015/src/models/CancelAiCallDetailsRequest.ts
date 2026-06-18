// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID. This ID is returned when you import callee data. You can find the task batch ID on the **Call Task Management**>**Details**>**Execution Record** page, or use the import batch ID that is returned by the [ImportTaskNumberDatas](https://help.aliyun.com/document_detail/2926815.html) API operation. If DetailIdList is specified, this parameter is invalid.
   * 
   * @example
   * 4253331213*****
   */
  batchId?: string;
  /**
   * @remarks
   * A list of detail IDs. If you specify this parameter, `BatchId` and `PhoneNumbers` are ignored.
   */
  detailIdList?: string[];
  /**
   * @example
   * 36
   */
  encryptionType?: number;
  ownerId?: number;
  /**
   * @remarks
   * A list of phone numbers. This parameter takes effect only when `BatchId` is also specified.
   */
  phoneNumbers?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task ID. You can view the task ID on the **Call Task Management** page or obtain it by calling the [QueryAiCallTaskPage](https://help.aliyun.com/document_detail/2926799.html) operation.
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

