// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetDetailByUuidsResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The type of the asset.
   * 
   * The only valid value is **0**, which indicates an ECS instance.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The timestamp when the asset authorization was bound. Unit: milliseconds.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * 
   * - **1**: Free Edition (unauthorized)
   * - **6**: Anti-virus Edition
   * - **5**: Advanced Edition
   * - **3**: Enterprise Edition
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
   * - **true**: bound to an authorization
   * - **false**: not bound to an authorization.
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The status of the China China China agent client. Valid values:
   * - **online**: online
   * - **offline**: offline.
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
   * 4
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
   * The timestamp when Security Center recorded the asset information. Unit: milliseconds.
   * 
   * @example
   * 1603863599000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of disk information.
   */
  diskInfoList?: string[];
  /**
   * @remarks
   * The asset vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: asset outside the cloud
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: third-party cloud asset
   * - **8**: lightweight asset.
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
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-rj9gda4wolo0zixi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * TestInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 10.10.XX.XX
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
   * The IP address of the server.
   * 
   * > If a public IP address exists, this value is the public IP address. If no public IP address exists but a private IP address exists, this value is the private IP address.
   * 
   * @example
   * 10.10.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The list of IP addresses of the server.
   */
  ipList?: string[];
  /**
   * @remarks
   * The Milvus version of the operating system kernel.
   * 
   * @example
   * 4.18.0-80.11.2.el8_0.x86_64
   */
  kernel?: string;
  /**
   * @remarks
   * The list of MAC addresses.
   */
  macList?: string[];
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 4
   */
  mem?: number;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The operating system type of the server.
   * 
   * @example
   * Linux
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
   * The name of the operating system of the server asset.
   * 
   * @example
   * CentOS  7.6 64位
   */
  osName?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * cn-guangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region in which the server resides.
   * 
   * @example
   * cn-shenzhen
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
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 2a98f149-0256-414c-a29a-a69f8a75****
   */
  uuid?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * 13231-331331
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

export class DescribeAssetDetailByUuidsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of asset details.
   */
  assetList?: DescribeAssetDetailByUuidsResponseBodyAssetList[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 92016EC8-D52D-49D8-9FF7-9EA340A950B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeAssetDetailByUuidsResponseBodyAssetList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

