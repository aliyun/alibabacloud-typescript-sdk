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
   * The total disk capacity, in GB.
   * 
   * @example
   * 40
   */
  totalSize?: number;
  /**
   * @remarks
   * The total disk capacity, in bytes.
   * 
   * @example
   * 42140479488
   */
  totalSizeByte?: number;
  /**
   * @remarks
   * The used disk capacity, in GB.
   * 
   * @example
   * 2
   */
  useSize?: number;
  /**
   * @remarks
   * The used disk capacity, in bytes.
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
   * The asset type. Valid values:  
   * - **0**: Elastic Compute Service (ECS) server.
   * - **1**: Server Load Balancer (SLB).
   * - **2**: NAT gateway.
   * - **3**: ApsaraDB RDS database.
   * - **4**: ApsaraDB for MongoDB database.
   * - **5**: ApsaraDB for Redis database.
   * - **6**: container image.
   * - **7**: container.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The timestamp when the asset authorization was bound, in milliseconds.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * 
   * - **1**: Free Edition (unauthorized).
   * - **6**: Anti-virus Edition.
   * - **5**: Advanced Edition.
   * - **3**: Enterprise Edition.
   * - **7**: Ultimate Edition.
   * 
   * @example
   * 7
   */
  authVersion?: number;
  /**
   * @remarks
   * Indicates whether the asset is bound to an authorization. Valid values:
   * 
   * - **true**: The asset is bound to an authorization.
   * - **false**: The asset is not bound to an authorization.
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:  
   * - **pause**: Protection paused.
   * - **online**: Protected.
   * - **offline**: Not protected.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The sub-status of the client on the instance. Valid values:
   * 
   * - **online**: Online. The Security Center agent is **enabled**.
   * - **offline**: Offline. The Security Center agent is **disabled**.
   * - **pause**: Paused. The Security Center agent is in **protection paused** state.
   * - **uninstalled**: Not installed. The Security Center agent is **not installed**.
   * - **stopped**: Server shut down. The Security Center agent is in **server shut down** state.
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
   * The CPU details.
   * 
   * @example
   * Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz
   */
  cpuInfo?: string;
  /**
   * @remarks
   * The timestamp when Security Center recorded the asset information, in milliseconds.
   * 
   * @example
   * 1603863599000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of disk information.
   */
  diskInfoList?: GetAssetDetailByUuidResponseBodyAssetDetailDiskInfoList[];
  /**
   * @remarks
   * Indicates whether the asset is an Alibaba Cloud asset. Valid values:
   * 
   * - **0**: Alibaba Cloud asset.
   * - **1**: Non-Alibaba Cloud asset.
   * 
   * @example
   * 0
   */
  flag?: number;
  /**
   * @remarks
   * The group to which the server belongs. Servers that are not assigned to a group belong to the **Ungrouped** group by default.
   * 
   * @example
   * default
   */
  groupTrace?: string;
  /**
   * @remarks
   * The hostname.
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
   * The IP address assigned by ECS.
   * 
   * @example
   * 120.47.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The list of IP addresses of the server.
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
   * The MAC address.
   */
  macList?: string[];
  /**
   * @remarks
   * The memory size, in GB.
   * 
   * @example
   * 16
   */
  mem?: number;
  /**
   * @remarks
   * The memory size, in MB.
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
   * The operating system version and architecture of the server.
   * 
   * @example
   * Linux 64bit
   */
  osDetail?: string;
  /**
   * @remarks
   * The operating system name of the server.
   * 
   * @example
   * CentOS  7.4 64bit
   */
  osName?: string;
  /**
   * @remarks
   * The region where the server resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hanghzou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the server resides.
   * 
   * @example
   * China (Hohhot)
   */
  regionName?: string;
  /**
   * @remarks
   * The operating system information of the server.
   * 
   * @example
   * CentOS Linux 8.0.1905
   */
  sysInfo?: string;
  /**
   * @remarks
   * The tag of the server.
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
   * The name of the account to which the AccessKey pair belongs.
   * > This parameter is returned only for third-party host assets. If the value is empty, this parameter is not returned.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance where the server resides.
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
   * The asset details.
   */
  assetDetail?: GetAssetDetailByUuidResponseBodyAssetDetail;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

