// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M task IDs. Separate multiple IDs with commas (,).
   * 
   * > You can call [DescribeActiveOperationTasks](https://help.aliyun.com/document_detail/414458.html) to obtain O&M task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

