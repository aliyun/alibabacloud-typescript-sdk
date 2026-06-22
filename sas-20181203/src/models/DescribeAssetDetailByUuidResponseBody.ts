// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetDetailByUuidResponseBodyAssetDetail extends $dara.Model {
  /**
   * @remarks
   * The asset type. Valid values:  
   * - **0**: Elastic Compute Service (ECS) server.
   * - **1**: Server Load Balancer (SLB).
   * - **2**: NAT gateway.
   * - **3**: ApsaraDB RDS database.
   * - **4**: MongoDB database.
   * - **5**: Redis database.
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
   * The status of the China China agent client. Valid values:  
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
   * The version of the agent client.
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
   * The collection of disk information.
   */
  diskInfoList?: string[];
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
   * 192.168.XX.XX
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
   * 192.168.XX.XX
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
   * The MAC addresses.
   */
  macList?: string[];
  /**
   * @remarks
   * The memory size, in GB.
   * 
   * @example
   * 32
   */
  mem?: number;
  /**
   * @remarks
   * The memory size, in MB.
   * 
   * @example
   * 512
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
   * -
   */
  osName?: string;
  /**
   * @remarks
   * The region where the server resides.
   * 
   * @example
   * cn-hangzhou-dg-a01
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
   * The ID of the VPC instance where the server resides.
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
      clientVersion: 'string',
      cpu: 'number',
      cpuInfo: 'string',
      createTime: 'number',
      diskInfoList: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeAssetDetailByUuidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset details.
   */
  assetDetail?: DescribeAssetDetailByUuidResponseBodyAssetDetail;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 39031E31-6BBA-5C99-A870-D807E78918CD
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
      assetDetail: DescribeAssetDetailByUuidResponseBodyAssetDetail,
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

