// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
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
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to query vSwitches with IPv6 enabled in the region. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * If you do not set this parameter, the system queries all vSwitches in the specified region by default.
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
   * Specifies whether to query the default vSwitches in the specified region. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * If you do not set this parameter, the system queries all vSwitches in the specified region by default.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the vSwitch. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * >  You must set at least one of **RegionId** and **VpcId**.
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
   * The tags.
   */
  tag?: DescribeVSwitchesRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch that you want to query.
   * 
   * @example
   * vsw-23dscddcffvf3****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch name.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * vSwitch
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the vSwitch belongs.
   * 
   * @example
   * 2546073170691****
   */
  vSwitchOwnerId?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the vSwitches belong.
   * 
   * >  You must set at least one of **RegionId** and **VpcId**.
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitches belong. You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      enableIpv6: 'EnableIpv6',
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

