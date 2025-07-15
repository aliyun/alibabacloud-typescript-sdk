// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the EIP is locked. Valid values:
   * 
   * *   **financial**: The EIP is locked due to overdue payments.
   * *   **security**: The EIP is locked for security reasons.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks extends $dara.Model {
  lockReason?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason },
    };
  }

  validate() {
    if(Array.isArray(this.lockReason)) {
      $dara.Model.validateArray(this.lockReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressSecurityProtectionTypes extends $dara.Model {
  securityProtectionType?: string[];
  static names(): { [key: string]: string } {
    return {
      securityProtectionType: 'SecurityProtectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityProtectionType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityProtectionType)) {
      $dara.Model.validateArray(this.securityProtectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the EIP.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the EIP.
   * 
   * @example
   * ValueTest
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

export class DescribeEipAddressesResponseBodyEipAddressesEipAddressTags extends $dara.Model {
  tag?: DescribeEipAddressesResponseBodyEipAddressesEipAddressTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddressTagsTag },
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

export class DescribeEipAddressesResponseBodyEipAddressesEipAddress extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-2zeerraiwb7ujcdvf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The time when the EIP was created. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-04-23T01:37:38Z
   */
  allocationTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Internet Shared Bandwidth instance with which the EIP is associated. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  bandwidthPackageBandwidth?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * @example
   * cbwp-bp1ego3i4j07ccdvf****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The type of the bandwidth. Only **CommonBandwidthPackage** may be returned, which indicates Internet Shared Bandwidth.
   * 
   * @example
   * CommonBandwidthPackage
   */
  bandwidthPackageType?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   **CloudBox** Only cloud box users can select this type.
   * *   **Default** (default)
   * 
   * @example
   * CloudBox
   */
  bizType?: string;
  /**
   * @remarks
   * The service state of the EIP. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   **PostPaid**: pay-as-you-go.
   * *   **PrePaid**: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The description of the EIP.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The maximum bandwidth of the EIP when it is not associated with an Internet Shared Bandwidth instance. Unit: Mbit/s.
   * 
   * @example
   * 101
   */
  eipBandwidth?: string;
  /**
   * @remarks
   * The time when the EIP expires. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-05-23T02:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether fine-grained monitoring is enabled for the EIP. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  HDMonitorStatus?: string;
  /**
   * @remarks
   * Indicates whether renewal data is included. Valid values:
   * 
   * *   **false**
   * *   **true** A value of **true** is returned only when **IncludeReservationData** is set to **true** and some orders have not taken effect.
   * 
   * @example
   * false
   */
  hasReservationData?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP**: BGP (Multi-ISP). The BGP (Multi-ISP) line is supported in all regions.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro line is supported only in the China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.
   * 
   * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see the [Line types](https://help.aliyun.com/document_detail/32321.html) section of the "What is EIP?" topic.
   * 
   * If you are allowed to use single-ISP bandwidth, one of the following values may be returned:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, **BGP_FinanceCloud** is returned.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * The ID of the associated instance.
   * 
   * @example
   * i-bp15zckdt37cdvf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the associated instance.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the associated instance. Valid values:
   * 
   * *   **EcsInstance**: an ECS instance in a VPC.
   * *   **SlbInstance**: a CLB instance in a VPC.
   * *   **Nat**: a NAT gateway.
   * *   **HaVip**: an HAVIP.
   * *   **NetworkInterface**: a secondary ENI.
   * *   **IpAddress**: an IP address.
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   **PayByBandwidth**
   * *   **PayByTraffic**
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 47.75.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * - **NAT**: NAT mode
   * - **MULTI_BINDED**: multi-EIP-to-ENI mode
   * - **BINDED**: cut-through mode
   * 
   * @example
   * NAT
   */
  mode?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * @example
   * EIP-01
   */
  name?: string;
  /**
   * @remarks
   * The network type. Only **public** may be returned.
   * 
   * @example
   * public
   */
  netmode?: string;
  /**
   * @remarks
   * The details about the locked EIP.
   */
  operationLocks?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks;
  /**
   * @remarks
   * The private IP address of the secondary ENI with which the EIP is associated.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the renewal took effect. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-05-23T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.
   * 
   * @example
   * 12
   */
  reservationBandwidth?: string;
  /**
   * @remarks
   * The metering method that is used after the renewal takes effect. Valid values:
   * 
   * *   **PayByBandwidth**
   * *   **PayByTraffic**
   * 
   * @example
   * PayByBandwidth
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The type of the renewal order. Valid values:
   * 
   * *   **RENEWCHANGE**: renewal with an upgrade or a downgrade.
   * *   **TEMP_UPGRADE**: temporary upgrade.
   * *   **UPGRADE**: upgrade.
   * 
   * @example
   * RENEWCHANGE
   */
  reservationOrderType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazcdxs****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether level-2 throttling is configured. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  secondLimited?: boolean;
  /**
   * @remarks
   * The edition of Anti-DDoS.
   * 
   * *   If an empty value is returned, it indicates that Anti-DDoS Origin Basic is used.
   * *   If **AntiDDoS_Enhanced** is returned, it indicates that Anti-DDoS Pro/Premium is used.
   */
  securityProtectionTypes?: DescribeEipAddressesResponseBodyEipAddressesEipAddressSecurityProtectionTypes;
  /**
   * @remarks
   * The ID of the contiguous EIP group.
   * 
   * This value is returned only when you query contiguous EIPs.
   * 
   * @example
   * eipsg-t4nr90yik5oy38xd****
   */
  segmentInstanceId?: string;
  /**
   * @remarks
   * The ID of the service provider to which the managed instance belongs.
   * > This is only valid when the ServiceManaged parameter is set to True.
   * 
   * @example
   * 197*************
   */
  serviceID?: number;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  serviceManaged?: number;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **InUse**
   * *   **Available**
   * *   **Releasing**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the EIP.
   */
  tags?: DescribeEipAddressesResponseBodyEipAddressesEipAddressTags;
  /**
   * @remarks
   * The ID of the VPC in which an IPv4 gateway is created and that is deployed in the same region as the EIP.
   * 
   * When you associate an EIP with an IP address, the system can enable the IP address to access the Internet based on VPC route configurations.
   * 
   * >  This parameter is returned if the value of **InstanceType** is **IpAddress**. In this case, the EIP is associated with an IP address.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone of the EIP.
   * 
   * This parameter is returned only when the service type is CloudBox.
   * 
   * @example
   * cn-hangzhou-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      allocationTime: 'AllocationTime',
      bandwidth: 'Bandwidth',
      bandwidthPackageBandwidth: 'BandwidthPackageBandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthPackageType: 'BandwidthPackageType',
      bizType: 'BizType',
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      eipBandwidth: 'EipBandwidth',
      expiredTime: 'ExpiredTime',
      HDMonitorStatus: 'HDMonitorStatus',
      hasReservationData: 'HasReservationData',
      ISP: 'ISP',
      instanceId: 'InstanceId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      ipAddress: 'IpAddress',
      mode: 'Mode',
      name: 'Name',
      netmode: 'Netmode',
      operationLocks: 'OperationLocks',
      privateIpAddress: 'PrivateIpAddress',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      regionId: 'RegionId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
      resourceGroupId: 'ResourceGroupId',
      secondLimited: 'SecondLimited',
      securityProtectionTypes: 'SecurityProtectionTypes',
      segmentInstanceId: 'SegmentInstanceId',
      serviceID: 'ServiceID',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      allocationTime: 'string',
      bandwidth: 'string',
      bandwidthPackageBandwidth: 'string',
      bandwidthPackageId: 'string',
      bandwidthPackageType: 'string',
      bizType: 'string',
      businessStatus: 'string',
      chargeType: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      eipBandwidth: 'string',
      expiredTime: 'string',
      HDMonitorStatus: 'string',
      hasReservationData: 'string',
      ISP: 'string',
      instanceId: 'string',
      instanceRegionId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      ipAddress: 'string',
      mode: 'string',
      name: 'string',
      netmode: 'string',
      operationLocks: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks,
      privateIpAddress: 'string',
      publicIpAddressPoolId: 'string',
      regionId: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'string',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
      resourceGroupId: 'string',
      secondLimited: 'boolean',
      securityProtectionTypes: DescribeEipAddressesResponseBodyEipAddressesEipAddressSecurityProtectionTypes,
      segmentInstanceId: 'string',
      serviceID: 'number',
      serviceManaged: 'number',
      status: 'string',
      tags: DescribeEipAddressesResponseBodyEipAddressesEipAddressTags,
      vpcId: 'string',
      zone: 'string',
    };
  }

  validate() {
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.securityProtectionTypes && typeof (this.securityProtectionTypes as any).validate === 'function') {
      (this.securityProtectionTypes as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBodyEipAddresses extends $dara.Model {
  eipAddress?: DescribeEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  validate() {
    if(Array.isArray(this.eipAddress)) {
      $dara.Model.validateArray(this.eipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the EIPs.
   */
  eipAddresses?: DescribeEipAddressesResponseBodyEipAddresses;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipAddresses: 'EipAddresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddresses: DescribeEipAddressesResponseBodyEipAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipAddresses && typeof (this.eipAddresses as any).validate === 'function') {
      (this.eipAddresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

