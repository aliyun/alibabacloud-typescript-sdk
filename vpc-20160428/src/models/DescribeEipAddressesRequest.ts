// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key for querying resources. The value must be **CreationStartTime**, which specifies the start time when the resource was created.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value for querying resources. Specify the value in UTC in the `YYYY-MM-DDThh:mmZ` format.
   * 
   * @example
   * 2023-01-01T01:00Z
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

export class DescribeEipAddressesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
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

export class DescribeEipAddressesRequest extends $dara.Model {
  filter?: DescribeEipAddressesRequestFilter[];
  /**
   * @remarks
   * The ID of the EIP instance to query.
   * 
   * @example
   * eip-2zeerraiwb7ujxscd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The instance ID of the cloud resource.
   * 
   * @example
   * i-2zebb08phyccdvf****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud resource instance to be associated. Valid values:
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the EIP to query.
   * 
   * @example
   * 47.75.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * @example
   * EIP-01
   */
  eipName?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * Specifies whether to include subscription data that has not taken effect. Valid values:
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The lock type. Valid values:
   * 
   * @example
   * financial
   */
  lockReason?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the IP address pool to which the EIP to query belongs.
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the EIP belongs.
   * 
   * @example
   * rg-acfmxazb4pcdvf****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether Anti-DDoS (Enhanced) is enabled. Valid values:
   * 
   * @example
   * false
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the contiguous EIP group.
   * 
   * @example
   * eipsg-t4nr90yik5oy38xdy****
   */
  segmentInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the instance is a managed instance. Valid values:
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags used to filter EIPs.
   */
  tag?: DescribeEipAddressesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      chargeType: 'ChargeType',
      dryRun: 'DryRun',
      eipAddress: 'EipAddress',
      eipName: 'EipName',
      ISP: 'ISP',
      includeReservationData: 'IncludeReservationData',
      lockReason: 'LockReason',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      segmentInstanceId: 'SegmentInstanceId',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeEipAddressesRequestFilter },
      allocationId: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      chargeType: 'string',
      dryRun: 'boolean',
      eipAddress: 'string',
      eipName: 'string',
      ISP: 'string',
      includeReservationData: 'boolean',
      lockReason: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      publicIpAddressPoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionEnabled: 'boolean',
      segmentInstanceId: 'string',
      serviceManaged: 'boolean',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEipAddressesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

