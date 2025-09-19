// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetDetailByUuidResponseBodyAssetDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **0**: ECS instance
   * *   **1**: Server Load Balancer (SLB) instance
   * *   **2**: NAT gateway
   * *   **3**: ApsaraDB RDS database
   * *   **4**: ApsaraDB for MongoDB database
   * *   **5**: ApsaraDB for Redis database
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
   * The edition of Security Center that is authorized to protect the asset. Valid values:
   * 
   * *   **1**: Basic edition (Unauthorized)
   * *   **6**: Anti-virus edition
   * *   **5**: Advanced edition
   * *   **3**: Enterprise edition
   * *   **7**: Ultimate edition
   * 
   * @example
   * 7
   */
  authVersion?: number;
  /**
   * @remarks
   * Indicates whether Security Center is authorized to protect the asset. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:
   * 
   * *   **pause**: The Security Center agent suspends protection for your server.
   * *   **online**: The Security Center agent is protecting your server.
   * *   **offline**: The Security Center agent does not protect your server.
   * 
   * @example
   * online
   */
  clientStatus?: string;
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
   * An array that consists of the information about the disk.
   */
  diskInfoList?: string[];
  /**
   * @remarks
   * Indicates whether the asset is provided by Alibaba Cloud. Valid values:
   * 
   * *   **0**: yes
   * *   **1**: no
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
   * The IP address that is assigned to the Elastic Compute Service (ECS) instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP addresses of the server.
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
   * The media access control (MAC) addresses of the server.
   */
  macList?: string[];
  /**
   * @remarks
   * The memory size of the server. Unit: GB.
   * 
   * @example
   * 32
   */
  mem?: number;
  /**
   * @remarks
   * The memory size of the server. Unit: MB.
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
   * The operating system version of the server.
   * 
   * @example
   * Linux 64bit
   */
  osDetail?: string;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * -
   */
  osName?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-hangzhou-dg-a01
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
   * The details of the server.
   */
  assetDetail?: DescribeAssetDetailByUuidResponseBodyAssetDetail;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

