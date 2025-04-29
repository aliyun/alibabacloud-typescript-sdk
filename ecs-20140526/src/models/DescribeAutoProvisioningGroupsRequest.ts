// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupsRequestTag } from "./DescribeAutoProvisioningGroupsRequestTag";


export class DescribeAutoProvisioningGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto provisioning group. You can specify up to 20 IDs.
   * 
   * @example
   * apg-sn54avj8htgvtyh8****
   */
  autoProvisioningGroupId?: string[];
  /**
   * @remarks
   * The name of the auto provisioning group.
   * 
   * @example
   * testAutoProvisioningGroupName
   */
  autoProvisioningGroupName?: string;
  /**
   * @remarks
   * The status of the auto provisioning group.
   * 
   * @example
   * active
   */
  autoProvisioningGroupStatus?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the auto provisioning group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the auto provisioning group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the auto provisioning group.
   */
  tag?: DescribeAutoProvisioningGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupStatus: 'AutoProvisioningGroupStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: { 'type': 'array', 'itemType': 'string' },
      autoProvisioningGroupName: 'string',
      autoProvisioningGroupStatus: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroupId)) {
      $dara.Model.validateArray(this.autoProvisioningGroupId);
    }
    if(Array.isArray(this.autoProvisioningGroupStatus)) {
      $dara.Model.validateArray(this.autoProvisioningGroupStatus);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

