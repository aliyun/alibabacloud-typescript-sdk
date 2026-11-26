// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. If you specify this parameter, you cannot enter an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. If you specify this parameter, you can enter an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class DescribeVSwitchesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: The system prechecks the request without creating resources. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): The system sends a normal request. If the request passes the precheck, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to query the vSwitches that have IPv6 CIDR blocks enabled in the specified region. Valid values:
   * 
   * - **true**: Queries the vSwitches that have IPv6 CIDR blocks enabled in the specified region.
   * 
   * - **false**: Does not query the vSwitches that have IPv6 CIDR blocks enabled in the specified region.
   * 
   * If you do not specify this parameter, the system queries all vSwitches in the specified region by default.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * Specifies whether to query the IPv6 single-stack vSwitches in the specified region. Valid values:
   * - **true**: Queries the IPv6 single-stack vSwitches in the specified region.
   * - **false**: Does not query the IPv6 single-stack vSwitches in the specified region.
   * 
   * If you do not specify this parameter, the system queries all vSwitches in the specified region by default.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  ipv6Only?: boolean;
  /**
   * @remarks
   * Specifies whether to query the default vSwitch in the specified region. Valid values: 
   * 
   * - **true**: Queries the default vSwitch in the specified region.  
   * 
   * - **false**: Does not query the default vSwitch in the specified region.  
   * 
   * If you do not specify this parameter, the system queries all vSwitches in the specified region by default.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the vSwitch belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * > You must specify at least one of the **RegionId** and **VpcId** parameters.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the vSwitch belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: DescribeVSwitchesRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to be queried.
   * 
   * @example
   * vsw-23dscddcffvf3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * vSwitch
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID for resource ownership.
   * 
   * @example
   * 2546073170691****
   */
  vSwitchOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch to be queried belongs. 
   * 
   * > You must specify at least one of the **RegionId** and **VpcId** parameters.
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs. You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      enableIpv6: 'EnableIpv6',
      ipv6Only: 'Ipv6Only',
      isDefault: 'IsDefault',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vSwitchOwnerId: 'VSwitchOwnerId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      enableIpv6: 'boolean',
      ipv6Only: 'boolean',
      isDefault: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVSwitchesRequestTag },
      vSwitchId: 'string',
      vSwitchName: 'string',
      vSwitchOwnerId: 'number',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

