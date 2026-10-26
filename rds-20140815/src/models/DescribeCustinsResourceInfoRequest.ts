// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustinsResourceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-wz9s06u4drm******
   */
  DBInstanceIds?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIds: 'DBInstanceIds',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIds: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

