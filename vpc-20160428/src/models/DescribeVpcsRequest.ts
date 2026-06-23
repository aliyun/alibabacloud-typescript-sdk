// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class DescribeVpcsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DHCP options set.
   * 
   * @example
   * dopt-o6w0df4epg9zo8isy****
   */
  dhcpOptionsSetId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. If the check succeeds, an HTTP 2xx status code is returned and the resource is queried.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to query VPCs that have IPv6 CIDR blocks enabled in the specified region. The default value is empty, which means no filtering is performed based on IPv6 enablement. Valid values:
   * 
   * - **false**: IPv6 is not enabled.
   * - **true**: IPv6 is enabled.
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
   * Specifies whether to query the default VPC in the specified region. Valid values: 
   * 
   * - **true** (default): Queries the default VPC in the specified region.  
   * 
   * - **false**: Does not query the default VPC.
   * 
   * @example
   * false
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
   * The number of entries per page for paging. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the VPC. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the VPC belongs.
   * 
   * @example
   * rg-acfmxvfvazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: DescribeVpcsRequestTag[];
  /**
   * @remarks
   * The ID of the VPC. 
   * 
   * You can specify up to 20 VPC IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * vpc-bp1b1xjllp3ve5yze****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Vpc-1
   */
  vpcName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the VPC owner.
   * 
   * @example
   * 253460731706911258
   */
  vpcOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSetId: 'DhcpOptionsSetId',
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
      tag: 'Tag',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dhcpOptionsSetId: 'string',
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
      tag: { 'type': 'array', 'itemType': DescribeVpcsRequestTag },
      vpcId: 'string',
      vpcName: 'string',
      vpcOwnerId: 'number',
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

