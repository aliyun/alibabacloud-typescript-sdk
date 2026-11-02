// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key used when querying resources. Set the value to **CreationStartTime**, which specifies the start time of resource creation.
   * 
   * @example
   * CreationStartTime
   */
  key?: string;
  /**
   * @remarks
   * The filter value used when querying resources. Specify the time in UTC in the `YYYY-MM-DDThh:mmZ` format.
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
   * The tag key. You can enter up to 20 tag keys. If you specify this parameter, it cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can enter up to 20 tag values. If you specify this parameter, it can be an empty string.
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
   * The ID of the EIP to query. 
   * 
   * You can enter up to 50 EIP instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * > If you specify both **EipAddress** and **AllocationId**, you can enter up to 50 EIP instance IDs for **AllocationId** and up to 50 EIP addresses for **EipAddress**.
   * 
   * @example
   * eip-2zeerraiwb7ujxscd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * i-2zebb08phyccdvf****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud service instance to attach to the EIP. Valid values: 
   * - **EcsInstance** (default): an ECS instance in a VPC.
   * - **SlbInstance**: a CLB instance in a VPC.
   * - **Nat**: a NAT gateway.
   * - **HaVip**: a high-availability virtual IP address. 
   * - **NetworkInterface**: a secondary elastic network interface controller (NIC).
   * - **IpAddress**: an IP address.
   * 
   * > You can attach only one EIP to each ECS instance, CLB instance, high-availability virtual IP address, or IP address at a time. You can attach multiple EIPs to a NAT gateway. The number of EIPs that can be attached to a secondary elastic network interface controller (NIC) depends on the EIP attach pattern. For more information, see [Overview of elastic IP addresses](https://help.aliyun.com/document_detail/72125.html).
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
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: sends a check request and does not query the resource status. The system checks whether required parameters are specified, the request format is valid, and the service limits are met. If the request fails the check, the corresponding error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a regular request. After the request passes the check, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IP address of the EIP to query.
   * 
   * You can enter up to 50 EIP addresses. Separate multiple IP addresses with commas (,).
   * 
   * > If you specify both **EipAddress** and **AllocationId**, you can enter up to 50 EIP addresses for **EipAddress** and up to 50 EIP instance IDs for **AllocationId**.
   * 
   * @example
   * 47.75.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * The name must be 1 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * EIP-01
   */
  eipName?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * - **BGP** (default): BGP (multi-ISP) line. BGP (multi-ISP) EIPs are supported in all regions.
   * - **BGP_PRO**: BGP (multi-ISP) Pro line. BGP (multi-ISP) Pro EIPs are supported only in the Hong Kong (China), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * For more information about BGP (multi-ISP) and BGP (multi-ISP) Pro lines, see [EIP line types](https://help.aliyun.com/document_detail/32321.html).
   * 
   * If you are a whitelisted user for single-ISP bandwidth, you can also select the following types:
   * - **ChinaTelecom**: China Telecom
   * - **ChinaUnicom**: China Unicom
   * - **ChinaMobile**: China Mobile
   * - **ChinaTelecom_L2**: China Telecom L2
   * - **ChinaUnicom_L2**: China Unicom L2
   * - **ChinaMobile_L2**: China Mobile L2
   * 
   * If you are an Alibaba Finance Cloud user in the China (Hangzhou) region, this parameter is required. Set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * Specifies whether to include inactive subscription data. Valid values:
   * 
   * - **false** (default): Does not include inactive subscription data.
   * 
   * - **true**: Includes inactive subscription data.
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The lock type. Valid values:
   * 
   * - **financial**: The EIP is locked due to an overdue payment.
   * 
   * - **security**: The EIP is locked due to security reasons.
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
   * The number of entries per page for a paged query. Maximum value: **100**. Default value: **10**.
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
   * Specifies whether Anti-DDoS (Enhanced) is enabled. Valid values:
   * - **false**: Anti-DDoS (Enhanced) is disabled.
   * - **true**: Anti-DDoS (Enhanced) is enabled.
   * 
   * @example
   * false
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The instance ID of the contiguous EIP.
   * 
   * @example
   * eipsg-t4nr90yik5oy38xdy****
   */
  segmentInstanceId?: string;
  /**
   * @remarks
   * Specifies whether the instance is a managed instance. Valid values:
   * - **true**: The instance is a managed instance.
   * - **false**: The instance is not a managed instance.
   * 
   * If you do not specify this parameter, all instances are queried by default.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * - **Associating**: The EIP is being associated.
   * 
   * - **Unassociating**: The EIP is being disassociated.
   * 
   * - **InUse**: The EIP is allocated.
   * 
   * - **Available**: The EIP is available.
   * 
   * - **Releasing**: The EIP is being released.
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

