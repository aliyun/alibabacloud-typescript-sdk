// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetDetailByUuidResponseBodyAssetDetailDiskInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * /dev/vda1
   */
  diskName?: string;
  /**
   * @remarks
   * The total disk space. Unit: GB.
   * 
   * @example
   * 40
   */
  totalSize?: number;
  /**
   * @remarks
   * The total disk space. Unit: bytes.
   * 
   * @example
   * 42140479488
   */
  totalSizeByte?: number;
  /**
   * @remarks
   * The amount of the used disk space. Unit: GB.
   * 
   * @example
   * 2
   */
  useSize?: number;
  /**
   * @remarks
   * The amount of the used disk space. Unit: bytes.
   * 
   * @example
   * 2998996992
   */
  useSizeByte?: number;
  static names(): { [key: string]: string } {
    return {
      diskName: 'DiskName',
      totalSize: 'TotalSize',
      totalSizeByte: 'TotalSizeByte',
      useSize: 'UseSize',
      useSizeByte: 'UseSizeByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskName: 'string',
      totalSize: 'number',
      totalSizeByte: 'number',
      useSize: 'number',
      useSizeByte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailByUuidResponseBodyAssetDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the server. Valid values:
   * 
   * *   **0**: ECS instance
   * *   **1**: Server Load Balancer (SLB) instance
   * *   **2**: NAT gateway
   * *   **3**: ApsaraDB RDS instance
   * *   **4**: ApsaraDB for MongoDB instance
   * *   **5**: ApsaraDB for Redis instance
   * *   **6**: image
   * *   **7**: container
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The timestamp when Security Center is authorized to protect the asset. Unit: milliseconds.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The edition of Security Center that is authorized to protect the server. Valid values:
   * 
   * *   **1**: Basic (Unauthorized).
   * *   **6**: Anti-virus.
   * *   **5**: Advanced.
   * *   **3**: Enterprise.
   * *   **7**: Ultimate.
   * 
   * @example
   * 7
   */
  authVersion?: number;
  /**
   * @remarks
   * Indicates whether Security Center is authorized to protect the asset. Valid values:
   * 
   * *   **true**: Security Center is authorized to protect the asset.
   * *   **false**: Security Center is not authorized to protect the asset.
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:
   * 
   * *   **pause**: The Security Center agent stops protecting your server.
   * *   **online**: The Security Center agent is protecting your server.
   * *   **offline**: The Security Center agent does not protect your server.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The sub-status of the Security Center agent on the server. Valid values:
   * 
   * *   **online**: The Security Center agent on the asset is **enabled**.
   * *   **offline**: The Security Center agent on the asset is **disabled**.
   * *   **pause**: The Security Center agent is **suspended**.
   * *   **uninstalled**: The Security Center agent is **not installed**.
   * *   **stopped**: The asset is **shut down**.
   * 
   * @example
   * online
   */
  clientSubStatus?: string;
  /**
   * @remarks
   * The version of the Security Center agent.
   * 
   * @example
   * 2.0.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The details of the CPU.
   * 
   * @example
   * Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
   */
  cpuInfo?: string;
  /**
   * @remarks
   * The timestamp when Security Center records the details of the server. Unit: milliseconds.
   * 
   * @example
   * 1603863599000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of information about the disk.
   */
  diskInfoList?: GetAssetDetailByUuidResponseBodyAssetDetailDiskInfoList[];
  /**
   * @remarks
   * Indicates whether the asset is provided by Alibaba Cloud. Valid values:
   * 
   * *   **0**: The server is provided by Alibaba Cloud.
   * *   **1**: The server is not provided by Alibaba Cloud.
   * 
   * @example
   * 0
   */
  flag?: number;
  /**
   * @remarks
   * The group to which the server belongs. By default, the servers that are not grouped belong to the **Default** group.
   * 
   * @example
   * default
   */
  groupTrace?: string;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * qewrqwerqs****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-uf6h7p2fgk6rkk0g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * i-fasdfasdfadfafa****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 120.47.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address that is assigned to the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * 120.47.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * An array that consists of the IP addresses of the server.
   */
  ipList?: string[];
  /**
   * @remarks
   * The kernel version of the operating system.
   * 
   * @example
   * 4.18.0-80.11.2.el8_0.x86_64
   */
  kernel?: string;
  /**
   * @remarks
   * An array that consists of the media access control (MAC) addresses of the server.
   */
  macList?: string[];
  /**
   * @remarks
   * The memory size of the server. Unit: GB.
   * 
   * @example
   * 16
   */
  mem?: number;
  /**
   * @remarks
   * The memory size of the server. Unit: MB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * The operating system type of the server.
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The operating system version of the server.
   * 
   * @example
   * Linux 64bit
   */
  osDetail?: string;
  /**
   * @remarks
   * The name of the operating system that the server runs.
   * 
   * @example
   * CentOS  7.4 64bit
   */
  osName?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region in which the asset resides.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region in which the server resides.
   * 
   * @example
   * China (Hohhot)
   */
  regionName?: string;
  /**
   * @remarks
   * The operating system information about the server.
   * 
   * @example
   * CentOS Linux 8.0.1905
   */
  sysInfo?: string;
  /**
   * @remarks
   * The tag that is added to the server.
   * 
   * @example
   * InternetIp
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 9e6cad93-a379-46fd-a701-9bbf02f4****
   */
  uuid?: string;
  /**
   * @remarks
   * The account to which the AccessKey pair belongs.
   * 
   * >  This parameter is returned only by third-party cloud servers. If the parameter value is empty, it will not be returned.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the server resides.
   * 
   * @example
   * vpc-bp1fs3bwonlfq503w****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      authModifyTime: 'AuthModifyTime',
      authVersion: 'AuthVersion',
      bind: 'Bind',
      clientStatus: 'ClientStatus',
      clientSubStatus: 'ClientSubStatus',
      clientVersion: 'ClientVersion',
      cpu: 'Cpu',
      cpuInfo: 'CpuInfo',
      createTime: 'CreateTime',
      diskInfoList: 'DiskInfoList',
      flag: 'Flag',
      groupTrace: 'GroupTrace',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      ipList: 'IpList',
      kernel: 'Kernel',
      macList: 'MacList',
      mem: 'Mem',
      memory: 'Memory',
      os: 'Os',
      osDetail: 'OsDetail',
      osName: 'OsName',
      region: 'Region',
      regionId: 'RegionId',
      regionName: 'RegionName',
      sysInfo: 'SysInfo',
      tag: 'Tag',
      uuid: 'Uuid',
      vendorAuthAlias: 'VendorAuthAlias',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      authModifyTime: 'number',
      authVersion: 'number',
      bind: 'boolean',
      clientStatus: 'string',
      clientSubStatus: 'string',
      clientVersion: 'string',
      cpu: 'number',
      cpuInfo: 'string',
      createTime: 'number',
      diskInfoList: { 'type': 'array', 'itemType': GetAssetDetailByUuidResponseBodyAssetDetailDiskInfoList },
      flag: 'number',
      groupTrace: 'string',
      hostName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      ipList: { 'type': 'array', 'itemType': 'string' },
      kernel: 'string',
      macList: { 'type': 'array', 'itemType': 'string' },
      mem: 'number',
      memory: 'number',
      os: 'string',
      osDetail: 'string',
      osName: 'string',
      region: 'string',
      regionId: 'string',
      regionName: 'string',
      sysInfo: 'string',
      tag: 'string',
      uuid: 'string',
      vendorAuthAlias: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskInfoList)) {
      $dara.Model.validateArray(this.diskInfoList);
    }
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    if(Array.isArray(this.macList)) {
      $dara.Model.validateArray(this.macList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailByUuidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the server.
   */
  assetDetail?: GetAssetDetailByUuidResponseBodyAssetDetail;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4892B68B-47BC-5E56-B327-9C2ACC6C1C09
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetDetail: 'AssetDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDetail: GetAssetDetailByUuidResponseBodyAssetDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assetDetail && typeof (this.assetDetail as any).validate === 'function') {
      (this.assetDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

