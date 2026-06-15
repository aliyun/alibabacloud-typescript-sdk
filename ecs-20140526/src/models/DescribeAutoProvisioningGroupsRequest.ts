// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The key can be up to 128 characters in length and cannot be an empty string. It cannot start with `aliyun` or `acs:` or contain http\\:// or https\\://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value can be up to 128 characters in length and can be an empty string. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoProvisioningGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the auto provisioning groups. You can specify up to 20 IDs.
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
   * The statuses of the auto provisioning groups.
   * 
   * @example
   * active
   */
  autoProvisioningGroupStatus?: string[];
  autoProvisioningGroupTypes?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * Start value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the auto provisioning group is located.
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
   * The tags used to filter auto provisioning groups. You can specify up to 20 tags.
   */
  tag?: DescribeAutoProvisioningGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      autoProvisioningGroupName: 'AutoProvisioningGroupName',
      autoProvisioningGroupStatus: 'AutoProvisioningGroupStatus',
      autoProvisioningGroupTypes: 'AutoProvisioningGroupTypes',
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
      autoProvisioningGroupTypes: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.autoProvisioningGroupTypes)) {
      $dara.Model.validateArray(this.autoProvisioningGroupTypes);
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

