// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the resource. You can specify at most 20 tag keys.
   * 
   * The key cannot exceed 128 characters in length. The key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * > When you call this operation, the **Tag.N.Key** parameter is required and cannot be an empty string.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the resource. You can specify at most 20 tag values.
   * 
   * The tag value cannot exceed 128 characters in length. The value cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * > When you call this operation, the **Tag.N.Value** parameter is required and can be an empty string.
   * 
   * @example
   * FinanceJoshua
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

export class TagResourcesRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID. You can specify at most 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **VPC**: a VPC
   * *   **VSWITCH**: a vSwitch
   * *   **ROUTETABLE**: a route table
   * *   **EIP**: an EIP
   * *   **VpnGateway**: a VPN gateway
   * *   **NATGATEWAY**: a NAT gateway
   * *   **COMMONBANDWIDTHPACKAGE**: an EIP bandwidth plan
   * 
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * This parameter is required.
   * 
   * @example
   * TagResources
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

