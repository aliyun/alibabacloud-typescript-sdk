// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You must specify at least 1 and can specify up to 20 tag keys.
   * 
   * The tag key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * > The **Tag.N.Key** parameter is required when you call this operation, and cannot be an empty string.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You must specify at least 1 and can specify up to 20 tag values.
   * 
   * The tag value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * > The **Tag.N.Value** parameter is required when you call this operation, and can be an empty string.
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
   * The region ID of the resource to which you want to create and bind tags.
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
   * The resource IDs. You can specify up to 50 resource IDs.
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
   * - **VPC**: virtual private cloud (VPC) instance.
   * - **VSWITCH**: virtual switch instance.
   * - **ROUTETABLE**: route table instance.
   * - **EIP**: elastic IP address (EIP) instance.
   * - **VPNGATEWAY**: VPN gateway instance.
   * - **NATGATEWAY**: NAT gateway instance.
   * - **COMMONBANDWIDTHPACKAGE**: Internet Shared Bandwidth instance.
   * - **PREFIXLIST**: prefix list instance.
   * - **PUBLICIPADDRESSPOOL**: IP address pool instance.
   * - **IPV4GATEWAY**: IPv4 gateway instance.
   * - **IPV6GATEWAY**: IPv6 gateway instance.
   * - **NETWORKACL**: network ACL instance.
   * - **TRAFFICMIRRORFILTER**: traffic mirror filter instance.
   * - **TRAFFICMIRRORSESSION**: traffic mirror session instance.
   * - **FLOWLOG**: flow log instance.
   * - **HAVIP**: high-availability (HA) virtual IP address instance.
   * - **DHCPOPTIONSSET**: DHCP options set instance.
   * - **GATEWAYENDPOINT**: gateway endpoint instance.
   * - **IPV6ADDRESS**: IPv6 address instance.
   * 
   * 
   * > The resource type value is case-insensitive.
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

