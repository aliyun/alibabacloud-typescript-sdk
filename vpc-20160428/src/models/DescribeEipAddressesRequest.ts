// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key for querying resources. Set the value to **CreationStartTime**, which specifies the start time when the resource was created.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value for querying resources. Specify the value in UTC. Format: `YYYY-MM-DDThh:mmZ`.
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
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 20 tag values. The tag value can be an empty string.
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

export class DescribeEipAddressesRequest extends $dara.Model {
  filter?: DescribeEipAddressesRequestFilter[];
  /**
   * @remarks
   * The ID of the EIP instance to query. 
   * 
   * You can specify up to 50 EIP instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * > If you specify both **EipAddress** and **AllocationId**, you can specify up to 50 EIP instance IDs for **AllocationId** and up to 50 EIP IP addresses for **EipAddress**.
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
   * The type of the cloud resource instance to attach. Valid values: 
   * - **EcsInstance** (default): an ECS instance in a VPC.
   * - **SlbInstance**: a CLB instance in a VPC.
   * - **Nat**: a NAT gateway.
   * - **HaVip**: a high-availability virtual IP address. 
   * - **NetworkInterface**: a secondary elastic network interface (ENI).
   * - **IpAddress**: an IP address.
   * 
   * > Each ECS instance, CLB instance, high-availability virtual IP address, and IP address can be attached with only one EIP at a time. A NAT gateway can be attached with multiple EIPs. The number of EIPs that can be attached to a secondary elastic network interface (ENI) depends on the EIP association pattern. For more information, see [EIP overview](https://help.aliyun.com/document_detail/72125.html).
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * - **PostPaid**: pay-as-you-go.
   * - **PrePaid**: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the EIP to query.
   * 
   * You can specify up to 50 EIP addresses. Separate multiple IP addresses with commas (,).
   * 
   * > If you specify both **EipAddress** and **AllocationId**, you can specify up to 50 EIP IP addresses for **EipAddress** and up to 50 EIP instance IDs for **AllocationId**.
   * 
   * @example
   * 47.75.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * The name must be 1 to 128 characters in length and must start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * EIP-01
   */
  eipName?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (multi-ISP) line. All regions support BGP (multi-ISP) EIPs.
   * - **BGP_PRO**: BGP (multi-ISP) Pro line. Only Hong Kong (China), Singapore, Tokyo (Japan), Kuala Lumpur (Malaysia), Manila (Philippines), Jakarta (Indonesia), and Bangkok (Thailand) regions support BGP (multi-ISP) Pro EIPs.
   * 
   * For more information about BGP (multi-ISP) and BGP (multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are a whitelist user of single-ISP bandwidth, you can also specify the following values:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you are a user of Alibaba Finance Cloud in the China (Hangzhou) region, this parameter is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * Specifies whether to include pending order data. Valid values:
   * 
   * - **false** (default): Does not include pending order data.
   * 
   * - **true**: Includes pending order data.
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The lock type. Valid values:
   * 
   * - **financial**: locked due to overdue payment.
   * 
   * - **security**: locked for security reasons.
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
   * The ID of the IP address pool to which the EIP belongs.
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the EIP.
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
   * Indicates whether Anti-DDoS (Enhanced) is enabled. Valid values:
   * - **false**: not enabled.
   * - **true**: enabled.
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
   * - **true**: a managed instance.
   * - **false**: not a managed instance.
   * 
   * If you leave this parameter empty, all instances are queried.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * - **Associating**: being associated.
   * 
   * - **Unassociating**: being disassociated.
   * 
   * - **InUse**: allocated.
   * 
   * - **Available**: available.
   * - **Releasing**: being released.
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

