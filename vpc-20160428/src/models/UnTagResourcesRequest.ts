// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags from the resources. Valid values:
   * - **true**: Unbinds all tags from the resources.
   * - **false** (default): Does not unbind all tags from the resources.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * - **VSWITCH**: vSwitch instance.
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
   * - **HAVIP**: high-availability virtual IP address (HaVip) instance.
   * - **DHCPOPTIONSSET**: DHCP options set instance.
   * - **GATEWAYENDPOINT**: gateway endpoint instance.
   * - **IPV6ADDRESS**: IPv6 address instance.
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
   * The tag keys to unbind. You can specify up to 20 tag keys.
   * 
   * Each tag key can be up to 128 characters in length, can be an empty string, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

