// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkInterfacePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the permission. Set this parameter to `true` to force the deletion.
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the permission for the elastic network interface.
   * 
   * This parameter is required.
   */
  networkInterfacePermissionId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the elastic network interface is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the latest region list.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      networkInterfacePermissionId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

