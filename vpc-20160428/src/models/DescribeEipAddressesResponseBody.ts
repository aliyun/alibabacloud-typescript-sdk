// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocksLockReason extends $dara.Model {
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
  key?: string;
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
  allocationId?: string;
  allocationTime?: string;
  bandwidth?: string;
  bandwidthPackageBandwidth?: string;
  bandwidthPackageId?: string;
  bandwidthPackageType?: string;
  bizType?: string;
  businessStatus?: string;
  chargeType?: string;
  deletionProtection?: boolean;
  description?: string;
  eipBandwidth?: string;
  expiredTime?: string;
  HDMonitorStatus?: string;
  hasReservationData?: string;
  ISP?: string;
  instanceId?: string;
  instanceRegionId?: string;
  instanceType?: string;
  internetChargeType?: string;
  ipAddress?: string;
  mode?: string;
  name?: string;
  netmode?: string;
  operationLocks?: DescribeEipAddressesResponseBodyEipAddressesEipAddressOperationLocks;
  privateIpAddress?: string;
  publicIpAddressPoolId?: string;
  regionId?: string;
  reservationActiveTime?: string;
  reservationBandwidth?: string;
  reservationInternetChargeType?: string;
  reservationOrderType?: string;
  resourceGroupId?: string;
  secondLimited?: boolean;
  securityProtectionTypes?: DescribeEipAddressesResponseBodyEipAddressesEipAddressSecurityProtectionTypes;
  segmentInstanceId?: string;
  serviceID?: number;
  serviceManaged?: number;
  status?: string;
  tags?: DescribeEipAddressesResponseBodyEipAddressesEipAddressTags;
  vpcId?: string;
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

