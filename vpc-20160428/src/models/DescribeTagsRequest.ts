// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys.
   * 
   * A tag key can be up to 128 characters in length. It cannot be an empty string or start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values.
   * 
   * A tag value can be up to 128 characters in length. It can be an empty string but cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class DescribeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResult?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If this is the first query or no subsequent query exists, leave this parameter empty.
   * - If a subsequent query exists, set this parameter to the NextToken value returned by the previous API call.
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
   * The resource ID. You can specify up to 50 resource IDs.
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
   * - **HAVIP**: high-availability virtual IP address instance.
   * - **DHCPOPTIONSSET**: DHCP options set instance.
   * - **GATEWAYENDPOINT**: gateway endpoint instance.
   * 
   * > The resource type value is case-insensitive.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: DescribeTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResult: 'MaxResult',
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
      maxResult: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTagsRequestTag },
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

