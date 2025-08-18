// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerResponseBodyWuyingServerListDataDisk extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
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
   * @example
   * p-0ceitx****c5
   */
  instanceId?: string;
  /**
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
   * @example
   * 96
   */
  cpu?: string;
  /**
   * @example
   * 4
   */
  gpu?: string;
  /**
   * @example
   * 196,608
   */
  gpuMemory?: number;
  /**
   * @example
   * 393,216
   */
  memory?: number;
  /**
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
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2025-08-02T16:52:11.000+00:00
   */
  createTime?: string;
  dataDisk?: ListWuyingServerResponseBodyWuyingServerListDataDisk[];
  /**
   * @example
   * 2025-09-03T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @example
   * imgc-06****oagaev
   */
  imageId?: string;
  imageName?: string;
  instanceInfoList?: ListWuyingServerResponseBodyWuyingServerListInstanceInfoList[];
  /**
   * @example
   * 10.80.21.149
   */
  networkInterfaceIp?: string;
  /**
   * @example
   * cn-hangzhou+dir-1b****ayv2
   */
  officeSiteId?: string;
  /**
   * @example
   * exampleOfficeSite
   */
  officeSiteName?: string;
  /**
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @example
   * Linux
   */
  osType?: string;
  serverInstanceTypeInfo?: ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @example
   * ws-0byd****8wn2lwi
   */
  wuyingServerId?: string;
  /**
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
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
      serverInstanceTypeInfo: 'ServerInstanceTypeInfo',
      status: 'Status',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      serverInstanceTypeInfo: ListWuyingServerResponseBodyWuyingServerListServerInstanceTypeInfo,
      status: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
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

