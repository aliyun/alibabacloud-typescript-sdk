// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerResponseBodyWuyingServerListDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The PL of the data disk.
   * 
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GB.
   * 
   * @example
   * 200
   */
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
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
   * The ID of the instance.
   * 
   * @example
   * p-0ceitx****c5
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the ENI.
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
   * The memory size. Unit: MB.
   * 
   * @example
   * 196,608
   */
  gpuMemory?: number;
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
   * Workstation specifications.
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
      memory: 'Memory',
      serverInstanceType: 'ServerInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpu: 'string',
      gpuMemory: 'number',
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

export class ListWuyingServerResponseBodyWuyingServerList extends $dara.Model {
  addVirtualNodePoolStatus?: string;
  /**
   * @remarks
   * Region.
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
   * The time when the storage resource was created.
   * 
   * @example
   * 2025-08-02T16:52:11.000+00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: ListWuyingServerResponseBodyWuyingServerListDataDisk[];
  /**
   * @remarks
   * The time when the subscription instance expires.
   * 
   * @example
   * 2025-09-03T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * imgc-06****oagaev
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   */
  imageName?: string;
  /**
   * @remarks
   * The list of information about the workstation instance.
   */
  instanceInfoList?: ListWuyingServerResponseBodyWuyingServerListInstanceInfoList[];
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.80.21.149
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The ID of the office network.
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
   * The type of the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * The OS type.
   * 
   * @example
   * Linux
   */
  osType?: string;
  securityGroupIds?: string[];
  /**
   * @remarks
   * The specifications.
   */
  serverInstanceTypeInfo?: ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo;
  /**
   * @remarks
   * The status of the workstation.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The type of the system disk.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The ID of the workstation.
   * 
   * @example
   * ws-0byd****8wn2lwi
   */
  wuyingServerId?: string;
  /**
   * @remarks
   * The name of the workstation.
   * 
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      addVirtualNodePoolStatus: 'AddVirtualNodePoolStatus',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      dataDisk: 'DataDisk',
      expiredTime: 'ExpiredTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceInfoList: 'InstanceInfoList',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      osType: 'OsType',
      securityGroupIds: 'SecurityGroupIds',
      serverInstanceTypeInfo: 'ServerInstanceTypeInfo',
      status: 'Status',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      virtualNodePoolId: 'VirtualNodePoolId',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVirtualNodePoolStatus: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      createTime: 'string',
      dataDisk: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerListDataDisk },
      expiredTime: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceInfoList: { 'type': 'array', 'itemType': ListWuyingServerResponseBodyWuyingServerListInstanceInfoList },
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      osType: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      serverInstanceTypeInfo: ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo,
      status: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      virtualNodePoolId: 'string',
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
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(this.serverInstanceTypeInfo && typeof (this.serverInstanceTypeInfo as any).validate === 'function') {
      (this.serverInstanceTypeInfo as any).validate();
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

