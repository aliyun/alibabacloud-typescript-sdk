// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAiCallDetailsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 4253331213*****
   */
  batchId?: string;
  detailIdListShrink?: string;
  ownerId?: number;
  phoneNumbersShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1223123123****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      detailIdListShrink: 'DetailIdList',
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

