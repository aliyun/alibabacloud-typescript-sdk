// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts extends $dara.Model {
  /**
   * @remarks
   * The host account. You can call the [CreateDedicatedHostAccount](https://help.aliyun.com/document_detail/196877.html) operation to create a host account.
   * 
   * @example
   * test123
   */
  accountName?: string;
  /**
   * @remarks
   * Specifies whether instances can be deployed on the host. Valid values:
   * 
   * *   **0**: Instances cannot be deployed on the host.
   * *   **1**: Instances can be deployed on the host.
   * 
   * @example
   * 1
   */
  allocationStatus?: string;
  /**
   * @remarks
   * The bastion host ID.
   * 
   * @example
   * bastionhost-cn-m7xxxxxxxx
   */
  bastionInstanceId?: string;
  /**
   * @remarks
   * The core overcommitment ratio of the dedicated cluster. Unit: percentage. For more information about the core overcommitment ratio, see [Manage a dedicated cluster](https://help.aliyun.com/document_detail/182328.html).
   * 
   * @example
   * 200
   */
  CPUAllocationRatio?: string;
  /**
   * @remarks
   * The number of used CPU cores on the host. Unit: cores.
   * 
   * @example
   * 4
   */
  cpuUsed?: string;
  /**
   * @remarks
   * The time when the host was created.
   * 
   * @example
   * 2021-03-25 17:29:06.0
   */
  createdTime?: string;
  /**
   * @remarks
   * The dedicated cluster ID.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * i-bpxxxxxxx
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The disk overcommitment ratio of the dedicated cluster. Unit: percentage. For more information about the core overcommitment ratio, see [Manage a dedicated cluster](https://help.aliyun.com/document_detail/182328.html).
   * 
   * @example
   * 200
   */
  diskAllocationRatio?: string;
  /**
   * @remarks
   * The time when the host expires.
   * 
   * @example
   * 2021-04-25T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine of instances that are created on the host.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The total number of CPU cores that are configured for the host. Unit: cores.
   * 
   * @example
   * 8
   */
  hostCPU?: string;
  /**
   * @remarks
   * The instance type of the host.
   * 
   * @example
   * ecs.i2.16xlarge
   */
  hostClass?: string;
  /**
   * @remarks
   * The total memory space of the host. Unit: MB.
   * 
   * @example
   * 32238
   */
  hostMem?: string;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The status of the host. Valid values:
   * 
   * *   **0**: creating
   * *   **1**: running
   * *   **2**: faulty
   * *   **3**: being replaced
   * *   **4**: deprecated
   * *   **5**: deleting
   * *   **6**: restarting
   * 
   * @example
   * 1
   */
  hostStatus?: string;
  /**
   * @remarks
   * The storage capacity of the host. Unit: MB.
   * 
   * @example
   * 2097152
   */
  hostStorage?: string;
  /**
   * @remarks
   * The storage type of the host. Valid values:
   * 
   * *   **dhg_cloud_ssd**: ESSD
   * *   **dhg_local_ssd**: local SSD
   * 
   * @example
   * dhg_cloud_ssd
   */
  hostType?: string;
  /**
   * @remarks
   * The internal IP address of the host.
   * 
   * @example
   * 192.xx.xx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The host image. This parameter is returned only when the **Engine** parameter is set to **mssql**. Valid values:
   * 
   * *   **WindowsWithMssqlStdLicense**: a Windows image that contains the licenses of SQL Server Standard Edition
   * *   **WindowsWithMssqlEntLisence**: a Windows image that contains the licenses of SQL Server Enterprise Edition
   * *   **WindowsWithMssqlWebLisence**: a Windows image that contains the licenses of SQL Server Web Edition
   * 
   * @example
   * WindowsWithMssqlStdLicense
   */
  imageCategory?: string;
  /**
   * @remarks
   * The total number of instances that are created on the host.
   * 
   * @example
   * 4
   */
  instanceNumber?: string;
  /**
   * @remarks
   * The maximum memory usage per host in the dedicated cluster.
   * 
   * @example
   * 90
   */
  memAllocationRatio?: string;
  /**
   * @remarks
   * The size of the used memory. Unit: MB.
   * 
   * @example
   * 16384
   */
  memoryUsed?: string;
  /**
   * @remarks
   * Indicates whether the feature that allows you to have the OS permissions on the host is enabled. Valid values:
   * 
   * *   **0** or **null**: The permissions cannot be granted.
   * *   **1**: The permissions can be granted.
   * *   **3**: The permissions have been granted.
   * 
   * @example
   * 3
   */
  openPermission?: string;
  /**
   * @remarks
   * The amount of used storage space on the host.
   * 
   * @example
   * 0
   */
  storageUsed?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the host belongs.
   * 
   * @example
   * vpc-bpxxxxxxx
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the specified VPC.
   * 
   * @example
   * vsw-bpxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the host.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      allocationStatus: 'AllocationStatus',
      bastionInstanceId: 'BastionInstanceId',
      CPUAllocationRatio: 'CPUAllocationRatio',
      cpuUsed: 'CpuUsed',
      createdTime: 'CreatedTime',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      diskAllocationRatio: 'DiskAllocationRatio',
      endTime: 'EndTime',
      engine: 'Engine',
      hostCPU: 'HostCPU',
      hostClass: 'HostClass',
      hostMem: 'HostMem',
      hostName: 'HostName',
      hostStatus: 'HostStatus',
      hostStorage: 'HostStorage',
      hostType: 'HostType',
      IPAddress: 'IPAddress',
      imageCategory: 'ImageCategory',
      instanceNumber: 'InstanceNumber',
      memAllocationRatio: 'MemAllocationRatio',
      memoryUsed: 'MemoryUsed',
      openPermission: 'OpenPermission',
      storageUsed: 'StorageUsed',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      allocationStatus: 'string',
      bastionInstanceId: 'string',
      CPUAllocationRatio: 'string',
      cpuUsed: 'string',
      createdTime: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      diskAllocationRatio: 'string',
      endTime: 'string',
      engine: 'string',
      hostCPU: 'string',
      hostClass: 'string',
      hostMem: 'string',
      hostName: 'string',
      hostStatus: 'string',
      hostStorage: 'string',
      hostType: 'string',
      IPAddress: 'string',
      imageCategory: 'string',
      instanceNumber: 'string',
      memAllocationRatio: 'string',
      memoryUsed: 'string',
      openPermission: 'string',
      storageUsed: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

