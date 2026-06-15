// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The network interface ID. You must specify either `NetworkInterfaceId` or `NetworkInterfacePermissionId.N` to determine the query scope.
   * 
   * @example
   * eni-bp17pdijfczax****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * An array of network interface permission IDs. The array can contain 1 to 100 IDs.
   * 
   * @example
   * eni-perm-bp1cs4lwn56lfb****
   */
  networkInterfacePermissionId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * Starting value: 1
   * 
   * Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 100
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region for the network interface permission. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to obtain the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      networkInterfacePermissionId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfacePermissionId)) {
      $dara.Model.validateArray(this.networkInterfacePermissionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

