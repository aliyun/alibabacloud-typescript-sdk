// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetDetailByUuidsResponseBodyAssetList extends $dara.Model {
  /**
   * @remarks
   * The type of the asset.
   * 
   * The value is fixed as **0**, which indicates ECS instances.
   * 
   * @example
   * 0
   */
  assetType?: string;
  /**
   * @remarks
   * The timestamp when Security Center is authorized to protect the instance. Unit: milliseconds.
   * 
   * @example
   * 1627974044000
   */
  authModifyTime?: number;
  /**
   * @remarks
   * The edition of Security Center that is authorized to protect the instance. Valid values:
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
   * Indicates whether Security Center is authorized to protect the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:
   * 
   * *   **online**
   * *   **offline**
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
   * 4
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
   * The timestamp when Security Center records the details of the instance. Unit: milliseconds.
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
   * The type of the asset by source. Valid values:
   * 
   * *   **0**: The asset is provided by Alibaba Cloud.
   * *   **1**: The asset is not provided by Alibaba Cloud.
   * *   **2**: The asset resides in a data center.
   * *   **3**, **4**, **5**, and **7**: other cloud asset.
   * *   **8**: light-weight assets.
   * 
   * @example
   * 0
   */
  flag?: number;
  /**
   * @remarks
   * The group to which the instance belongs. By default, the instances that are not grouped belong to the **Default** group.
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
   * The ID of the ECS instance.
   * 
   * @example
   * i-rj9gda4wolo0zixi****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * TestInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the ECS instance.
   * 
   * @example
   * 10.10.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the ECS instance.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address of the ECS instance.
   * 
   * >  If the ECS instance has a public IP address, the value of this parameter is the public IP address of the ECS instance. If the ECS instance does not have a public IP address, the value of this parameter is the private IP address of the ECS instance.
   * 
   * @example
   * 10.10.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP addresses of the instances.
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
   * The media access control (MAC) addresses of the instances.
   */
  macList?: string[];
  /**
   * @remarks
   * The memory size of the instance. Unit: GB.
   * 
   * @example
   * 4
   */
  mem?: number;
  /**
   * @remarks
   * The memory size of the instance. Unit: MB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The operating system of the ECS instance.
   * 
   * @example
   * Linux
   */
  os?: string;
  /**
   * @remarks
   * The operating system version of the instance.
   * 
   * @example
   * Linux 64bit
   */
  osDetail?: string;
  /**
   * @remarks
   * The name of the operating system run by the ECS instance.
   * 
   * @example
   * CentOS 7.6 64-bit
   */
  osName?: string;
  /**
   * @remarks
   * The region in which the ECS instance resides.
   * 
   * @example
   * cn-guangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region in which the ECS instance resides.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region in which the ECS instance resides.
   * 
   * @example
   * cn-shenzhen
   */
  regionName?: string;
  /**
   * @remarks
   * The operating system information about the instance.
   * 
   * @example
   * CentOS Linux 8.0.1905
   */
  sysInfo?: string;
  /**
   * @remarks
   * The tag added to the instance.
   * 
   * @example
   * test
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the ECS instance.
   * 
   * @example
   * 2a98f149-0256-414c-a29a-a69f8a75****
   */
  uuid?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
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
   * An array that consists of the details of the instances.
   */
  assetList?: DescribeAssetDetailByUuidsResponseBodyAssetList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

