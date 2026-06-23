// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys.
   * 
   * The tag key can be up to 128 characters in length. It cannot be an empty string. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * > You must specify at least one of the **ResourceId.N** and **Tag.N** (**Tag.N.Key** and **Tag.N.Value**) parameters.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values.
   * 
   * The tag value can be up to 128 characters in length and can be an empty string. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * > You must specify at least one of the **ResourceId.N** and **Tag.N** (**Tag.N.Key** and **Tag.N.Value**) parameters.
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If this is the first query or no next query exists, you do not need to set this parameter.
   * 
   * - If a next query exists, set the value to the **NextToken** value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the resource.
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
   * The IDs of the resources. You can specify up to 50 resource IDs.
   * 
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * - **VPC**: VPC instance.
   * - **VSWITCH**: vSwitch instance.
   * - **ROUTETABLE**: route table instance.
   * - **EIP**: Elastic IP Address (EIP) instance.
   * - **VPNGATEWAY**: VPN gateway instance.
   * - **NATGATEWAY**: NAT gateway instance.
   * - **COMMONBANDWIDTHPACKAGE**: EIP bandwidth plan instance.
   * - **PREFIXLIST**: prefix list instance.
   * - **PUBLICIPADDRESSPOOL**: IP address pool instance.
   * - **IPV4GATEWAY**: IPv4 gateway instance.
   * - **IPV6GATEWAY**: IPv6 gateway instance.
   * - **NETWORKACL**: network ACL instance.
   * - **TRAFFICMIRRORFILTER**: traffic mirroring filter instance.
   * - **TRAFFICMIRRORSESSION**: traffic mirroring session instance.
   * - **FLOWLOG**: flow log instance.
   * - **HAVIP**: high-availability virtual IP address (HAVIP) instance.
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
   * The tag information.
   * 
   * @example
   * ListTagResources
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
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
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
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

