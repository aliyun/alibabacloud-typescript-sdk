// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerResponseBodyWuyingServerListDataDisk extends $dara.Model {
  /**
   * @remarks
   * The data cloud disk type.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @example
   * d-bp1234567890abcde
   */
  dataDiskId?: string;
  /**
   * @example
   * 1
   */
  dataDiskNo?: string;
  /**
   * @remarks
   * The performance level of the data cloud disk.
   * 
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The data cloud disk size. Unit: GB.
   * 
   * @example
   * 200
   */
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskId: 'DataDiskId',
      dataDiskNo: 'DataDiskNo',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskId: 'string',
      dataDiskNo: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerResponseBodyWuyingServerListInstanceInfoList extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * p-0ceitx****c5
   */
  instanceId?: string;
  /**
   * @remarks
   * The network interface controller (NIC) ID.
   * 
   * @example
   * eni-uf65b****dfnt3wb
   */
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerResponseBodyWuyingServerListPrivateIpSets extends $dara.Model {
  /**
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @example
   * 10.0.0.1
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 96
   */
  cpu?: string;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 4
   */
  gpu?: string;
  /**
   * @remarks
   * The GPU memory size. Unit: MB.
   * 
   * @example
   * 196,608
   */
  gpuMemory?: number;
  /**
   * @example
   * NVIDIA T4
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 393,216
   */
  memory?: number;
  /**
   * @remarks
   * The workstation instance type.
   * 
   * @example
   * eds.proworkstation_flagship_elite_ne.96c384g.192g4x
   */
  serverInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuMemory: 'GpuMemory',
      gpuSpec: 'GpuSpec',
      memory: 'Memory',
      serverInstanceType: 'ServerInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpu: 'string',
      gpuMemory: 'number',
      gpuSpec: 'string',
      memory: 'number',
      serverInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerResponseBodyWuyingServerListSessions extends $dara.Model {
  /**
   * @example
   * 2026-01-01T08:00:00Z
   */
  resourceSessionStartTime?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceSessionStartTime: 'ResourceSessionStartTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceSessionStartTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerResponseBodyWuyingServerList extends $dara.Model {
  /**
   * @remarks
   * The status of joining a virtual node pool.
   * 
   * @example
   * Added
   */
  addVirtualNodePoolStatus?: string;
  /**
   * @example
   * 1234567890123456
   */
  aliUid?: number;
  /**
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-08-02T16:52:11.000+00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The list of data cloud disks.
   */
  dataDisk?: ListWuyingServerResponseBodyWuyingServerListDataDisk[];
  /**
   * @example
   * 10
   */
  eniPrivateIpAddressQuantity?: number;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2025-09-03T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @example
   * 2.0.0
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-06****oagaev
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Alibaba Cloud Linux 3.2104 LTS 64位
   */
  imageName?: string;
  /**
   * @remarks
   * The list of workstation instance information.
   */
  instanceInfoList?: ListWuyingServerResponseBodyWuyingServerListInstanceInfoList[];
  /**
   * @example
   * 0.5
   */
  maxPrice?: number;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.80.21.149
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-1b****ayv2
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * exampleOfficeSite
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The office network type.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Linux
   */
  osType?: string;
  policyGroupIdList?: string[];
  privateIpSets?: ListWuyingServerResponseBodyWuyingServerListPrivateIpSets[];
  /**
   * @example
   * Connected
   */
  resourceSessionStatus?: string;
  /**
   * @remarks
   * The list of security group IDs.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The instance type information.
   */
  serverInstanceTypeInfo?: ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo;
  sessions?: ListWuyingServerResponseBodyWuyingServerListSessions[];
  /**
   * @remarks
   * The workstation status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * spot
   */
  subPayType?: string;
  /**
   * @remarks
   * The system cloud disk type.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @example
   * d-bp1234567890abcde
   */
  systemDiskId?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @example
   * tg-bp1234567890abcde
   */
  timerGroupId?: string;
  users?: string[];
  /**
   * @example
   * 10.0.0.100
   */
  virtualKubeletIp?: string;
  /**
   * @remarks
   * The virtual node pool ID.
   * 
   * @example
   * vnp-bp1234567890abcde
   */
  virtualNodePoolId?: string;
  vkUpgradeNeeded?: boolean;
  /**
   * @example
   * 1.0.0
   */
  vkVersion?: string;
  /**
   * @remarks
   * The workstation ID.
   * 
   * @example
   * ws-0byd****8wn2lwi
   */
  wuyingServerId?: string;
  /**
   * @remarks
   * The workstation name.
   * 
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      addVirtualNodePoolStatus: 'AddVirtualNodePoolStatus',
      aliUid: 'AliUid',
      bandwidth: 'Bandwidth',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      dataDisk: 'DataDisk',
      eniPrivateIpAddressQuantity: 'EniPrivateIpAddressQuantity',
      expiredTime: 'ExpiredTime',
      fotaVersion: 'FotaVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceInfoList: 'InstanceInfoList',
      maxPrice: 'MaxPrice',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      policyGroupIdList: 'PolicyGroupIdList',
      privateIpSets: 'PrivateIpSets',
      resourceSessionStatus: 'ResourceSessionStatus',
      securityGroupIds: 'SecurityGroupIds',
      serverInstanceTypeInfo: 'ServerInstanceTypeInfo',
      sessions: 'Sessions',
      status: 'Status',
      subPayType: 'SubPayType',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskId: 'SystemDiskId',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      timerGroupId: 'TimerGroupId',
      users: 'Users',
      virtualKubeletIp: 'VirtualKubeletIp',
      virtualNodePoolId: 'VirtualNodePoolId',
      vkUpgradeNeeded: 'VkUpgradeNeeded',
      vkVersion: 'VkVersion',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVirtualNodePoolStatus: 'string',
      aliUid: 'number',
      bandwidth: 'number',
      bizRegionId: 'string',
      chargeType: 'string',
      createTime: 'string',
      dataDisk: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerListDataDisk },
      eniPrivateIpAddressQuantity: 'number',
      expiredTime: 'string',
      fotaVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceInfoList: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerListInstanceInfoList },
      maxPrice: 'number',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      policyGroupIdList: { 'type': 'array', 'itemType': 'string' },
      privateIpSets: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerListPrivateIpSets },
      resourceSessionStatus: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      serverInstanceTypeInfo: ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo,
      sessions: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerListSessions },
      status: 'string',
      subPayType: 'string',
      systemDiskCategory: 'string',
      systemDiskId: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      timerGroupId: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
      virtualKubeletIp: 'string',
      virtualNodePoolId: 'string',
      vkUpgradeNeeded: 'boolean',
      vkVersion: 'string',
      wuyingServerId: 'string',
      wuyingServerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(Array.isArray(this.instanceInfoList)) {
      $dara.Model.validateArray(this.instanceInfoList);
    }
    if(Array.isArray(this.policyGroupIdList)) {
      $dara.Model.validateArray(this.policyGroupIdList);
    }
    if(Array.isArray(this.privateIpSets)) {
      $dara.Model.validateArray(this.privateIpSets);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.serverInstanceTypeInfo && typeof (this.serverInstanceTypeInfo as any).validate === 'function') {
      (this.serverInstanceTypeInfo as any).validate();
    }
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWuyingServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workstation information.
   */
  wuyingServerList?: ListWuyingServerResponseBodyWuyingServerList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      wuyingServerList: 'WuyingServerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      wuyingServerList: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerList },
    };
  }

  validate() {
    if(Array.isArray(this.wuyingServerList)) {
      $dara.Model.validateArray(this.wuyingServerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

